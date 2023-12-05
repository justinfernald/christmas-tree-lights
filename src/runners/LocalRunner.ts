import { Runner } from "./Runner";

export class LocalRunner extends Runner {
    fps = 1;

    draw() {
        for (const light of this.lights) {
            console.log(light.color);
        }
    }
}
