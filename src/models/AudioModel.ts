import { makeAutoObservable, reaction } from 'mobx';
import {
  WorkerMessage,
  WorkerMessageTypes,
  WorkerToAppMessageTypes,
} from '../visualizer/messages';
import { AppModel } from './AppModel';

export class AudioModel {
  audio: HTMLAudioElement | null = null;

  constructor(private appModel: AppModel) {
    reaction(() => this.appModel.worker, this.listenToMessages);

    makeAutoObservable(this, {}, { autoBind: true });
  }

  setupAudio(url: string, loop: boolean) {
    this.audio = new Audio(url);
    this.audio.loop = loop;

    this.audio.addEventListener('ended', () => {
      this.appModel.sendWorkerMessage(WorkerMessageTypes.AudioEnded, {});
    });

    this.audio.addEventListener('timeupdate', () => {
      this.appModel.sendWorkerMessage(WorkerMessageTypes.AudioTime, {
        time: this.audio!.currentTime ?? 0,
      });
    });

    this.audio.addEventListener('loadeddata', () => {
      this.appModel.sendWorkerMessage(WorkerMessageTypes.AudioLoaded, {});
    });
  }

  private listenToMessages = () => {
    const worker = this.appModel.worker;

    if (!worker) {
      return;
    }

    worker.addEventListener('message', (e) => {
      const payload = e.data as WorkerMessage & { type: WorkerToAppMessageTypes };

      if (payload.type === WorkerMessageTypes.AudioUrl) {
        this.setupAudio(payload.data.url, payload.data.loop);
        console.log('setup audio');
      }

      if (payload.type === WorkerMessageTypes.AudioPause) {
        this.audio?.pause();
        console.log('pause audio');
      }

      if (payload.type === WorkerMessageTypes.AudioPlay) {
        this.audio?.play();
        console.log('play audio');
      }

      if (payload.type === WorkerMessageTypes.AudioReset) {
        this.audio!.currentTime = 0;
        console.log('reset audio');
      }
    });
  };
}
