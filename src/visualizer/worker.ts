import { LocalRunner } from '../runners/LocalRunner';
import { sleep } from '../utils/Time';

async function main() {
  while (true) {
    await sleep(1000);
    postMessage("aye, i'm working here!");
  }
}

let runner: LocalRunner | undefined;

onmessage = (e) => {
  const { type, data } = e.data;

  console.log({ type });

  if (type === 'code') {
    const code = data;

    console.log(code);

    const module = eval(code + '\nself.exports = exports;');
    runner = module.runner;
  }

  if (type === 'play') {
    if (!runner) return;
    console.log('running play');
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
};

main();
