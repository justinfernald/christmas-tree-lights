import { Color } from "./utils/Color";
import { LocalRunner } from "./runners/LocalRunner";
import { LightRunner } from "./runners/LightRunner";

const local: boolean = false;

const runner = local ? new LocalRunner() : new LightRunner(0.1);

runner.setup = () => {
    for (const [i, light] of runner.lights.entries()) {
        light.update = (time, delta) => {
            return Color.fromHSL((i + time * 0.1) % 360, 100, 50);
        };
    }
};

runner.update = (time, delta) => {
    // console.log(runner.lights);
};

runner.run();
