import { LocalRunner } from '../runners/LocalRunner';
import { sleep } from '../utils/Time';

function main() {
  let runner: LocalRunner | undefined;

  self.addEventListener('message', (e) => {
    const { type, data } = e.data;

    if (type === 'code') {
      const code = data;

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
  });

  postMessage({ type: 'ready' });
}

main();
