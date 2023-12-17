import { MutableRefObject, createContext, useContext } from 'react';
import { CodeEditorRef } from '../components/CodeEditor';
import { makeSimpleAutoObservable, result } from '../utils/mobx';
import { BaseViewModel } from '../utils/ViewModel';
import SimWorker from '../visualizer/worker?worker';
import { action } from 'mobx';
import { sleep } from '../utils';
import { MainApp } from '../visualizer/display';
import {
  AppToWorkerMessageTypes,
  WorkerMessage,
  WorkerMessageTypes,
  WorkerToAppMessageTypes,
} from '../visualizer/messages';
import { AudioModel } from './AudioModel';

export class AppModel extends BaseViewModel<{
  codeEditorRef: MutableRefObject<CodeEditorRef | null>;
}> {
  worker?: Worker;
  terminated: boolean = false;

  displayApp: MainApp | null = null;

  audioModel = new AudioModel(this);

  constructor(props: { codeEditorRef: MutableRefObject<CodeEditorRef | null> }) {
    super(props);
    makeSimpleAutoObservable(this, {}, { autoBind: true });

    this.setupListeners();
  }

  fps = 30;

  flare = true;

  snackbar = {
    showing: false,
    message: '',
    timeout: 5000,
    severity: 'info' as 'info' | 'error' | 'warning' | 'success',
  };

  showSnackbar(
    message: string,
    severity: 'info' | 'error' | 'warning' | 'success',
    timeout = 5000,
  ) {
    this.snackbar = {
      showing: true,
      message,
      severity,
      timeout,
    };
  }

  closeSnackbar() {
    this.snackbar.showing = false;
  }

  setupListeners() {
    // add listener for control + s - then copy url to clipboard

    document.addEventListener('keydown', (e) => {
      if (e.key === 's' && e.ctrlKey) {
        e.preventDefault();
        this.save();
      }
    });
  }

  save() {
    const url = new URL(window.location.href);

    navigator.clipboard.writeText(url.toString());

    this.showSnackbar('Copied URL to clipboard', 'info');
  }

  compile() {
    if (!this.props.codeEditorRef.current) throw new Error('codeEditor is null');

    return this.props.codeEditorRef.current.compile();
  }

  async newWorker() {
    this.enforcerDestroyer?.();
    this.worker?.terminate();
    this.terminated = false;

    this.fps = 30;
    this.worker = new SimWorker();

    await new Promise<void>((resolve) => {
      const listener = (
        e: MessageEvent<WorkerMessage & { type: WorkerToAppMessageTypes }>,
      ) => {
        const { type } = e.data;

        if (type === 'ready') {
          resolve();
          this.worker!.removeEventListener('message', listener);
        }
      };

      this.worker!.addEventListener('message', listener);
    });

    const fpsListener = (
      e: MessageEvent<WorkerMessage & { type: WorkerToAppMessageTypes }>,
    ) => {
      const { type, data } = e.data;

      if (type === WorkerMessageTypes.Fps) {
        this.fps = data.fps;
      }
    };
    this.worker!.addEventListener('message', fpsListener);
  }

  *workerEnforcer() {
    if (!this.worker) throw new Error('worker is null');

    let count = 0;

    const animationStartTime = performance.now();

    while (true) {
      const frameTime = 1000 / this.fps;
      const allowedTime = 2 * frameTime;

      const startTime = performance.now();
      const isFast = yield* result(
        new Promise<boolean>((resolve) => {
          const listener = action(
            (e: MessageEvent<WorkerMessage & { type: WorkerToAppMessageTypes }>) => {
              const { type } = e.data;
              if (type === 'update' || type === 'fps') {
                resolve(true);
                this.worker?.removeEventListener('message', listener);
              }
            },
          );

          if (!this.worker) throw new Error('worker is null');

          this.worker.addEventListener('message', listener);

          setTimeout(
            () => {
              this.worker?.removeEventListener('message', listener);
              resolve(false);
            },
            allowedTime + (count < this.fps * 3 ? frameTime * 5 : 0),
          );
        }),
      );

      if (!isFast && this.playing) {
        const endTime = performance.now();

        const time = endTime - startTime;
        const fullTime = endTime - animationStartTime;

        console.log('slow', {
          frameTime: time,
          frameCount: count,
          allowedTime,
          fps: this.fps,
          fullTime,
        });

        this.showSnackbar('Program was poorly performing and was stopped', 'warning');

        this.worker.terminate();
        this.terminated = true;
        this.playing = false;

        break;
      }

      count++;
    }
  }

  messagePending = false;

  async sendWorkerMessage<T extends AppToWorkerMessageTypes>(
    type: T,
    data: (WorkerMessage & { type: T })['data'],
  ) {
    if (!this.worker) throw new Error('worker is null');

    const messageId = Math.random().toString(36).slice(2);

    return await new Promise<boolean>((resolve) => {
      const listener = (
        e: MessageEvent<WorkerMessage & { type: WorkerToAppMessageTypes }>,
      ) => {
        const workerMessageData = e.data;

        if (
          workerMessageData.type === 'confirmation' &&
          messageId === workerMessageData.data.messageId
        ) {
          resolve(true);
          this.messagePending = false;
          this.worker!.removeEventListener('message', listener);
        }
      };

      this.worker!.addEventListener('message', listener);

      if (this.messagePending) {
        resolve(false);
      }
      this.messagePending = true;
      if (data) {
        this.worker!.postMessage({ type, data: { ...data, messageId } });
      } else {
        this.worker!.postMessage({ type, data: { messageId } });
      }
    });
  }

  code = '';

  async setupCode(forceRun = false) {
    await sleep(100);

    const result = await this.compile();

    if (!result) return false;

    const { codeStub } = result;

    if (this.code === codeStub && !forceRun) return false;

    this.code = codeStub;

    console.log('setup worker');
    await this.newWorker();
    return await this.sendWorkerMessage(WorkerMessageTypes.Code, { code: codeStub });
  }

  playing = false;

  enforcerDestroyer?: () => void;

  *play() {
    if (this.terminated) {
      if (!(yield* result(this.setupCode(true)))) return;
    }

    if (!(yield* result(this.sendWorkerMessage(WorkerMessageTypes.Play, {})))) return;
    this.playing = true;

    const enforcerRunner = async () => {
      try {
        const enforcer = this.workerEnforcer();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.enforcerDestroyer = (enforcer as any).cancel;
        await enforcer;
      } catch {
        // Ignore errors
      }
    };
    enforcerRunner();
  }

  *pause() {
    this.enforcerDestroyer?.();
    if (!(yield* result(this.sendWorkerMessage(WorkerMessageTypes.Pause, {})))) return;
    this.playing = false;
  }

  *reset() {
    yield this.sendWorkerMessage(WorkerMessageTypes.Reset, {});
  }

  *step() {
    if (this.terminated) {
      if (!(yield* result(this.setupCode()))) return;
    }

    yield this.sendWorkerMessage(WorkerMessageTypes.Step, {});
  }
}

export const AppContext = createContext<AppModel | undefined>(undefined);

// use react context
export const useAppModel = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppModel must be used within an AppProvider');
  }
  return context;
};
