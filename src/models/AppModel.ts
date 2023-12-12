import { MutableRefObject, createContext, useContext } from 'react';
import { CodeEditorRef } from '../components/CodeEditor';
import { makeSimpleAutoObservable, result } from '../utils/mobx';
import { BaseViewModel } from '../utils/ViewModel';
import SimWorker from '../visualizer/worker?worker';
import { action } from 'mobx';
import { sleep } from '../utils/Time';

export class AppModel extends BaseViewModel<{
  codeEditorRef: MutableRefObject<CodeEditorRef | null>;
}> {
  worker?: Worker;
  terminated: boolean = false;

  constructor(props: { codeEditorRef: MutableRefObject<CodeEditorRef | null> }) {
    super(props);
    makeSimpleAutoObservable(this, {}, { autoBind: true });

    this.setupListeners();
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
  }

  compile() {
    if (!this.props.codeEditorRef.current) throw new Error('codeEditor is null');

    return this.props.codeEditorRef.current.compile();
  }

  async newWorker() {
    this.worker?.terminate();
    this.terminated = false;
    this.worker = new SimWorker();

    await new Promise<void>((resolve) => {
      const listener = (e: MessageEvent<any>) => {
        const { type } = e.data;

        if (type === 'ready') {
          resolve();
          this.worker!.removeEventListener('message', listener);
        }
      };

      this.worker!.addEventListener('message', listener);
    });
  }

  workerEnforcer() {
    if (!this.worker) throw new Error('worker is null');

    let lastUpdateTime = performance.now();
    let count = 0;

    const listener = action((e: MessageEvent<any>) => {
      const { type } = e.data;

      if (type === 'update') {
        const currentTime = performance.now();
        const deltaTime = currentTime - lastUpdateTime;
        const expectedDeltaTime = 1.2 * (1000 / 30) + (count < 2 ? 40 : 0);

        if (deltaTime > expectedDeltaTime && this.playing && count !== 0) {
          this.worker!.terminate();
          this.terminated = true;
          this.playing = false;
          alert("Your code is too slow. It's been terminated.");
        }

        lastUpdateTime = currentTime;
        count++;
      }
    });

    this.worker.addEventListener('message', listener);

    return () => {
      this.worker!.removeEventListener('message', listener);
    };
  }

  messagePending = false;

  async sendWorkerMessage(type: string, data: Record<string, any>) {
    if (!this.worker) throw new Error('worker is null');

    const messageId = Math.random().toString(36).slice(2);

    return await new Promise<boolean>((resolve) => {
      const listener = (e: MessageEvent<any>) => {
        const { type: messageType, data: messageData } = e.data;

        if (messageType === 'confirmation' && messageId === messageData.messageId) {
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
      this.worker!.postMessage({ type, data: { ...data, messageId } });
    });
  }

  code = '';

  async setupCode() {
    console.log('setup worker');

    await sleep(100);

    const result = await this.compile();

    if (!result) return false;

    const { codeStub } = result;

    if (this.code === codeStub) return false;

    this.code = codeStub;

    await this.newWorker();
    return await this.sendWorkerMessage('code', { code: codeStub });
  }

  playing = false;

  enforcerDestroyer?: () => void;

  *play() {
    if (this.terminated) {
      if (!(yield* result(this.setupCode()))) return;
    }

    if (!(yield* result(this.sendWorkerMessage('play', {})))) return;
    this.playing = true;

    this.enforcerDestroyer = this.workerEnforcer();
  }

  *pause() {
    this.enforcerDestroyer?.();
    if (!(yield* result(this.sendWorkerMessage('pause', {})))) return;
    this.playing = false;
  }

  *reset() {
    yield this.sendWorkerMessage('reset', {});
  }

  *step() {
    if (this.terminated) {
      if (!(yield* result(this.setupCode()))) return;
    }

    yield this.sendWorkerMessage('step', {});
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
