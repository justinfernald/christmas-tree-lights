import { Color } from '../utils/Color';
import { Light } from '../utils/Light';
import { Vector3 } from '../utils/Vector3';

import locations from '../locations.json';
import { sleep } from '../utils/Time';

export abstract class Runner {
  abstract fps: number;
  abstract draw(): void;
  setup?: () => void;
  update?: (time: number, delta: number | null, iteration: number) => void;

  lights = locations.map(
    (location) => new Light(Vector3.fromObject(location), new Color(255, 0, 0)),
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

    while (true) {
      if (!this.running) {
        break;
      }

      const delta = 1000 / this.fps;

      this.iteration++;
      this.time += delta;

      this.update?.(this.time, delta, this.iteration);
      this.lightUpdate(this.time, delta, this.iteration);

      this.draw();

      await sleep(delta);
    }
  }

  reset() {
    this.iteration = 0;
    this.time = null;
  }

  pause() {
    this.running = false;
  }

  play() {
    this.running = true;
    this.run();
  }

  step() {
    this.running = true;
    this.run();
    this.running = false;
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
