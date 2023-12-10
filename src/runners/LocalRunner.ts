import { Runner } from './Runner';

export class LocalRunner extends Runner {
  fps = 20;

  draw() {
    postMessage({ type: 'update', lights: this.lights.map((light) => light.toDto()) });
  }
}
