import { Runner } from './Runner';

export class LocalRunner extends Runner {
  _fps = 30;

  set fps(fps: number) {
    this._fps = fps;
    postMessage({ type: 'fps', data: { fps } });
  }

  get fps() {
    return this._fps;
  }

  draw() {
    postMessage({
      type: 'update',
      data: { lights: this.lights.map((light) => light.toDto()) },
    });
  }
}
