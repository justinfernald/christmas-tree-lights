import { Color } from "../utils/Color";
import { Light } from "../utils/Light";
import { Vector3 } from "../utils/Vector3";

import locations from "../locations.json";

export abstract class Runner {
    abstract fps: number;
    abstract draw(): void;
    setup?: () => void;
    update?: (time: number, delta: number | null, iteration: number) => void;

    lights = locations.map(
        (location) =>
            new Light(Vector3.fromObject(location), new Color(255, 0, 0))
    );

    startTime: number | null = null;
    lastRun: number | null = null;

    run(iteration = 0) {
        if (iteration === 0) {
            this.startTime = Date.now();
            this.setup?.();
        }

        const time = this.startTime ? Date.now() - this.startTime : 0;
        const delta = this.lastRun ? time - this.lastRun : null;
        this.lastRun = time;

        this.update?.(time, delta, iteration);
        this.lightUpdate(time, delta, iteration);

        this.draw?.();

        setTimeout(() => this.run(iteration + 1), 1000 / this.fps);
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
