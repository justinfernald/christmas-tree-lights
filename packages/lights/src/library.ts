export * from '@christmas-tree/core/src/utils/Vector3';
export * from '@christmas-tree/core/src/utils/Color';
export * from '@christmas-tree/core/src/utils/Light';
import * as Shapes from '@christmas-tree/core/src/utils/Shapes';
import * as Utils from '@christmas-tree/core/src/utils';
import { LightRunner } from './runners/LightRunner';

export { Utils, Shapes };

export const runner = new LightRunner(0.1);
