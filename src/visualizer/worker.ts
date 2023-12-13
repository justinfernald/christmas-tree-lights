import { LocalRunner } from '../runners/LocalRunner';
import { AppToWorkerMessageTypes, WorkerMessage } from './messages';

function main() {
  let runner: LocalRunner | undefined;

  self.addEventListener(
    'message',
    (e: MessageEvent<WorkerMessage & { type: AppToWorkerMessageTypes }>) => {
      const { type, data } = e.data;

      if (type === 'code') {
        const { code } = data;

        const module = eval(code + '\nself.exports = exports;');
        runner = module.runner;
      }

      if (type === 'play') {
        if (!runner) return;
        runner.play();
      }

      if (type === 'pause') {
        if (!runner) return;
        runner.pause();
      }

      if (type === 'reset') {
        if (!runner) return;
        runner.reset();
      }

      if (type === 'step') {
        if (!runner) return;
        runner.step();
      }

      console.log(type, data);

      postMessage({
        type: 'confirmation',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data: { type, messageId: (data as any).messageId },
      });
    },
  );

  postMessage({ type: 'ready' });
}

main();
