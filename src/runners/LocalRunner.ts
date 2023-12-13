import { Runner } from './Runner';

export class LocalRunner extends Runner {
  fps = 30;

  draw() {
    postMessage({
      type: 'update',
      data: { lights: this.lights.map((light) => light.toDto()) },
    });
  }
}
