import { Color } from '../utils/Color';
import { Light } from '../utils/Light';
import { Vector3 } from '../utils/Vector3';

import locations from '../locations.json';
import { sleep } from '../utils';
import { AudioRunner } from './AudioRunner';

export abstract class Runner {
  abstract fps: number;
  abstract draw(): void;

  audioRunner: AudioRunner | null = null;

  /**
   * Optional setup function that can be called before running the animation.
   */
  setup?: () => void;
  /**
   * A function that updates the state of the runner.
   * @param time - The current time in milliseconds.
   * @param delta - The time difference between the current and previous frame in milliseconds.
   * @param iteration - The current iteration of the update loop.
   */
  update?: (time: number, delta: number | null, iteration: number) => void;

  /**
   * The lights that will be updated and drawn.
   */
  lights = locations.map(
    (location) => new Light(Vector3.fromObject(location), new Color(0, 0, 0)),
  );

  time: number | null = null;

  iteration = 0;

  running = false;

  async run() {
    if (!this.running || this.time === null) {
      this.time = 0;
      this.running = true;
      this.setup?.();
    }

    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (!this.running) {
        break;
      }

      if (this.time === null) {
        this.time = 0;
        this.setup?.();
      }

      const delta = 1000 / this.fps;

      this.update?.(this.time, delta, this.iteration);
      this.lightUpdate(this.time, delta, this.iteration);

      this.draw();

      this.iteration++;
      this.time += delta;

      await sleep(delta);
    }
  }

  reset() {
    this.iteration = 0;
    this.time = null;

    for (const light of this.lights) {
      light.color = new Color(0, 0, 0);
    }

    this.draw();
    this.audioRunner?.audioReset();
  }

  pause() {
    this.running = false;
    this.audioRunner?.audioPause();
  }

  play() {
    this.running = true;
    this.run();
    this.audioRunner?.audioPlay();
  }

  async step() {
    this.running = true;
    this.run();
    this.running = false;

    this.audioRunner?.audioPlay();
    const delta = 1000 / this.fps;
    await sleep(delta);
    this.audioRunner?.audioPause();
  }

  lightUpdate(time: number, delta: number | null, iteration: number) {
    for (const light of this.lights) {
      const newColor = light.update?.(time, delta, iteration);
      if (newColor) {
        light.color = newColor;
      }
    }
  }
}
