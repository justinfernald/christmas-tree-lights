import * as Vector3Lib from '../utils/Vector3';
import * as ColorLib from '../utils/Color';
import * as LightLib from '../utils/Light';
import * as MathUtils from '../utils/Math';
import * as Time from '../utils/Time';
import { LocalRunner } from '../runners/LocalRunner';

const runner = new LocalRunner();
const Vector3 = Vector3Lib.Vector3;
const Color = ColorLib.Color;
const colors = ColorLib.colors;
const Light = LightLib.Light;

export { Vector3, Color, colors, Light, MathUtils, Time, runner };
