import { Runner } from './Runner';

export class LocalRunner extends Runner {
  fps = 20;

  draw() {
    // (window as any).LIGHTS = this.lights;
    // for (const light of this.lights) {
    //   // console.log(light.color);
    // }

    // TODO: fix this add to global window type
    (window as any).updateLights?.(this.lights);
  }
}
