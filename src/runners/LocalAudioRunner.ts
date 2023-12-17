import {
  WorkerMessage,
  WorkerMessageTypes,
  WorkerToAppMessageTypes,
} from '../visualizer/messages';
import { AudioRunner } from './AudioRunner';

export class LocalAudioRunner extends AudioRunner {
  constructor(url: string, loop: boolean) {
    super(url, loop);

    addEventListener('message', this.audioMessageListener);
  }

  audioMessageListener = (message: MessageEvent<WorkerMessage>) => {
    if (message.data.type === WorkerMessageTypes.AudioTime) {
      this.audioTime?.(message.data.data.time);
    } else if (message.data.type === WorkerMessageTypes.AudioEnded) {
      this.audioEnded?.();
    }
  };

  audioLoader(url: string, loop = true) {
    sendAppMessage(WorkerMessageTypes.AudioUrl, { url, loop });

    return new Promise<void>((res) => {
      const listener = (message: MessageEvent<WorkerMessage>) => {
        if (message.data.type === WorkerMessageTypes.AudioLoaded) {
          res();
          removeEventListener('message', listener);
        }
      };

      addEventListener('message', listener);
    });
  }

  audioPause() {
    sendAppMessage(WorkerMessageTypes.AudioPause, {});
  }

  audioPlay() {
    sendAppMessage(WorkerMessageTypes.AudioPlay, {});
  }

  audioReset() {
    sendAppMessage(WorkerMessageTypes.AudioReset, {});
  }
}

function sendAppMessage<T extends WorkerToAppMessageTypes>(
  type: T,
  data: (WorkerMessage & { type: T })['data'],
) {
  const messageId = Math.random().toString(36).slice(2);

  if (data) {
    postMessage({ type, data: { ...data, messageId } });
  } else {
    postMessage({ type, data: { messageId } });
  }
}
