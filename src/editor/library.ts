export * from '../utils/Vector3';
export * from '../utils/Color';
export * from '../utils/Light';
export * from '../utils/Shapes';
import * as Utils from '../utils';
import { LocalRunner } from '../runners/LocalRunner';

export { Utils };

export const runner = new LocalRunner();
// type runner = LocalRunner;

// const Vector3 = Vector3Lib.Vector3;
// type Vector3 = Vector3Lib.Vector3;

// const Color = ColorLib.Color;
// type Color = ColorLib.Color;

// const colors = ColorLib.colors;
// type colors = typeof ColorLib.colors;

// const Light = LightLib.Light;
// type Light = LightLib.Light

// export { Vector3, Color, colors, Light, MathUtils, Time, runner };
