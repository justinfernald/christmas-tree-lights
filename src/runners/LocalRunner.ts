import { Runner } from './Runner';

export class LocalRunner extends Runner {
  fps = 30;

  draw() {
    postMessage({ type: 'update', lights: this.lights.map((light) => light.toDto()) });
  }
}
