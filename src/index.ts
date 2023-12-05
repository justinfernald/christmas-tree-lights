import { Color } from "./utils/Color";
import { LocalRunner } from "./runners/LocalRunner";

const runner = new LocalRunner();

runner.setup = () => {
    for (const [i, light] of runner.lights.entries()) {
        light.update = (time, delta) => {
            return new Color(
                (i + time * 0.01) % 255,
                (i + time * 0.01) % 255,
                (i + time * 0.01) % 255
            );
        };
    }
};

runner.run();
