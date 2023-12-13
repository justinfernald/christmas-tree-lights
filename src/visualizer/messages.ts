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

export type WorkerMessage =
  | StartMessage
  | PauseMessage
  | ResetMessage
  | StepMessage
  | CodeMessage
  | UpdateMessage
  | ReadyMessage
  | ConfirmationMessage;

export type AppToWorkerMessageTypes =
  | WorkerMessageTypes.Play
  | WorkerMessageTypes.Pause
  | WorkerMessageTypes.Reset
  | WorkerMessageTypes.Step
  | WorkerMessageTypes.Code;

export type WorkerToAppMessageTypes =
  | WorkerMessageTypes.Update
  | WorkerMessageTypes.Ready
  | WorkerMessageTypes.Confirmation;
