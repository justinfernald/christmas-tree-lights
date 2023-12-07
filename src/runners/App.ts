import { LightRunner } from './LightRunner';
import { LocalRunner } from './LocalRunner';
import { Runner } from './Runner';

const isLocal = true;

export const runner: Runner = isLocal ? new LocalRunner() : new LightRunner(0.1);
