import { LightDTO } from '../utils/Light';

export enum WorkerMessageTypes {
  Update = 'update',
  Play = 'play',
  Pause = 'pause',
  Reset = 'reset',
  Step = 'step',
  Ready = 'ready',
  Confirmation = 'confirmation',
  Code = 'code',
  Fps = 'fps',
  AudioTime = 'audioTime',
  AudioEnded = 'audioEnded',
  AudioPause = 'audioPause',
  AudioPlay = 'audioPlay',
  AudioReset = 'audioReset',
  AudioUrl = 'audioUrl',
  AudioLoaded = 'audioLoaded',
}

export interface WorkerMessageStructure {
  type: string;
  data?: unknown;
}

export interface UpdateMessage extends WorkerMessageStructure {
  type: WorkerMessageTypes.Update;
  data: { lights: LightDTO[] };
}

export interface StartMessage extends WorkerMessageStructure {
  type: WorkerMessageTypes.Play;
}

export interface PauseMessage extends WorkerMessageStructure {
  type: WorkerMessageTypes.Pause;
}

export interface ResetMessage extends WorkerMessageStructure {
  type: WorkerMessageTypes.Reset;
}

export interface StepMessage extends WorkerMessageStructure {
  type: WorkerMessageTypes.Step;
}

export interface ReadyMessage extends WorkerMessageStructure {
  type: WorkerMessageTypes.Ready;
}

export interface ConfirmationMessage extends WorkerMessageStructure {
  type: WorkerMessageTypes.Confirmation;
  data: { messageId: string };
}

export interface CodeMessage extends WorkerMessageStructure {
  type: WorkerMessageTypes.Code;
  data: { code: string };
}

export interface FpsMessage extends WorkerMessageStructure {
  type: WorkerMessageTypes.Fps;
  data: { fps: number };
}

export interface AudioTimeMessage extends WorkerMessageStructure {
  type: WorkerMessageTypes.AudioTime;
  data: { time: number };
}

export interface AudioEndedMessage extends WorkerMessageStructure {
  type: WorkerMessageTypes.AudioEnded;
}

export interface AudioPauseMessage extends WorkerMessageStructure {
  type: WorkerMessageTypes.AudioPause;
}

export interface AudioPlayMessage extends WorkerMessageStructure {
  type: WorkerMessageTypes.AudioPlay;
}

export interface AudioResetMessage extends WorkerMessageStructure {
  type: WorkerMessageTypes.AudioReset;
}

export interface AudioUrlMessage extends WorkerMessageStructure {
  type: WorkerMessageTypes.AudioUrl;
  data: { url: string; loop: boolean };
}

export interface AudioLoadedMessage extends WorkerMessageStructure {
  type: WorkerMessageTypes.AudioLoaded;
}

export type WorkerMessage =
  | StartMessage
  | PauseMessage
  | ResetMessage
  | StepMessage
  | CodeMessage
  | UpdateMessage
  | ReadyMessage
  | ConfirmationMessage
  | FpsMessage
  | AudioTimeMessage
  | AudioEndedMessage
  | AudioPauseMessage
  | AudioPlayMessage
  | AudioResetMessage
  | AudioUrlMessage
  | AudioLoadedMessage;

export type AppToWorkerMessageTypes =
  | WorkerMessageTypes.Play
  | WorkerMessageTypes.Pause
  | WorkerMessageTypes.Reset
  | WorkerMessageTypes.Step
  | WorkerMessageTypes.Code
  | WorkerMessageTypes.AudioLoaded
  | WorkerMessageTypes.AudioTime
  | WorkerMessageTypes.AudioEnded;

export type WorkerToAppMessageTypes =
  | WorkerMessageTypes.Update
  | WorkerMessageTypes.Ready
  | WorkerMessageTypes.Confirmation
  | WorkerMessageTypes.Fps
  | WorkerMessageTypes.AudioPause
  | WorkerMessageTypes.AudioPlay
  | WorkerMessageTypes.AudioReset
  | WorkerMessageTypes.AudioUrl;
