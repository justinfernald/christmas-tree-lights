export * from '../utils/Vector3';
export * from '../utils/Color';
export * from '../utils/Light';
import * as Shapes from '../utils/Shapes';
import * as Utils from '../utils';
import { LocalRunner } from '../runners/LocalRunner';

export { Utils, Shapes };

export const runner = new LocalRunner();
