import { Light } from "./utils/Light";
import locations from "./locations.json";
import { Vector3 } from "./utils/Vector3";
import { Color } from "./utils/Color";
import ws281x from "rpi-ws281x-native";
import { run } from "node:test";

const brightness = 0.1;

abstract class Runner {
    abstract fps: number;
    abstract draw(): void;
    setup?: () => void;
    update?: (time: number, delta: number | null) => void;

    lights = locations.map(
        (location) =>
            new Light(Vector3.fromObject(location), new Color(255, 0, 0))
    );

    startTime: number | null = null;
    lastRun: number | null = null;

    run(count = 0) {
        if (count === 0) {
            this.startTime = Date.now();
            this.setup?.();
        }

        const time = this.startTime ? Date.now() - this.startTime : 0;
        const delta = this.lastRun ? time - this.lastRun : null;
        this.lastRun = time;

        this.update?.(time, delta);
        this.lightUpdate(time, delta);

        this.draw?.();

        setTimeout(() => this.run(count + 1), 1000 / this.fps);
    }

    lightUpdate(time: number, delta: number | null) {
        for (const light of this.lights) {
            const newColor = light.update?.(time, delta);
            if (newColor) {
                light.color = newColor;
            }
        }
    }
}

class LocalRunner extends Runner {
    fps = 1;

    draw() {
        for (const light of this.lights) {
            console.log(light.color);
        }
    }
}

class RemoteRunner extends Runner {
    fps = 60;
    channel: ReturnType<typeof ws281x>;

    /** brightness is 0 to 1 */
    constructor(brightness: number) {
        super();

        this.channel = ws281x(this.lights.length, {
            stripType: ws281x.stripType.WS2811_RGB,
            brightness: 255 * brightness,
        });

        process.on("SIGINT", () => {
            ws281x.reset();
            ws281x.finalize();

            process.nextTick(() => {
                process.exit(0);
            });
        });
    }

    draw() {
        for (const [i, light] of this.lights.entries()) {
            this.channel.array[i] = light.color.toInt();
        }
    }
}

const runner = new LocalRunner();

runner.setup = () => {
    for (const [i, light] of runner.lights.entries()) {
        light.update = (time, delta) => {
            return new Color(
                (i + time * 0.001) % 255,
                (i + time * 0.001) % 255,
                (i + time * 0.001) % 255
            );
        };
    }
};

runner.run();
