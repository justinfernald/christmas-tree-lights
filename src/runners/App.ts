import { LightRunner } from './LightRunner';
import { LocalRunner } from './LocalRunner';

const isLocal = true;

export const runner = isLocal ? new LocalRunner() : new LightRunner(0.1);
