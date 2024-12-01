export * from '@christmas-tree/core/src/library';
import { LocalRunner } from './runners/LocalRunner';
export * from './runners/LocalAudioRunner';

export const runner = new LocalRunner();
