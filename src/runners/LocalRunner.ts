import { Runner } from './Runner';

export class LocalRunner extends Runner {
  fps = 1;

  draw() {
    (window as any).LIGHTS = this.lights;
    for (const light of this.lights) {
      // console.log(light.color);
    }
  }
}
