import { MutableRefObject, createContext, useContext } from 'react';
import { CodeEditorRef } from '../components/CodeEditor';
import { makeSimpleAutoObservable } from '../utils/mobx';
import { BaseViewModel } from '../utils/ViewModel';
import SimWorker from '../visualizer/worker?worker';

export class AppModel extends BaseViewModel<{
  codeEditorRef: MutableRefObject<CodeEditorRef | null>;
}> {
  worker = new SimWorker();

  constructor(props: { codeEditorRef: MutableRefObject<CodeEditorRef | null> }) {
    super(props);
    makeSimpleAutoObservable(this, {}, { autoBind: true });
  }

  compile() {
    if (!this.props.codeEditorRef.current) throw new Error('codeEditor is null');

    return this.props.codeEditorRef.current.compile();
  }

  async newWorker() {
    this.worker.terminate();

    this.worker = new SimWorker();

    await new Promise<void>((resolve) => {
      const listener = (e: MessageEvent<any>) => {
        const { type } = e.data;

        if (type === 'ready') {
          resolve();
          this.worker.removeEventListener('message', listener);
        }
      };

      this.worker.addEventListener('message', listener);
    });
  }

  async setupCode() {
    await this.newWorker();

    console.log('setup worker');

    const result = await this.compile();

    if (!result) return;

    const { codeStub } = result;

    this.worker.postMessage({ type: 'code', data: codeStub });
  }

  play() {
    this.worker.postMessage({ type: 'play' });
  }

  pause() {
    this.worker.postMessage({ type: 'pause' });
  }

  reset() {
    this.worker.postMessage({ type: 'reset' });
  }

  step() {
    this.worker.postMessage({ type: 'step' });
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
