import { AudioRunner } from '@christmas-tree/core/src/runners/AudioRunner';

export class LightAudioRunner extends AudioRunner {
  // audio: HTMLAudioElement | null = null;

  async audioLoader(url: string, loop = true) {
    // this.audio = new Audio(url);
    // this.audio.loop = loop;
    // // get when audio ends
    // this.audio.addEventListener(
    //   'ended',
    //   () => {
    //     this.audioEnded?.();
    //   },
    //   false,
    // );
    // // get current audio time
    // this.audio.addEventListener('timeupdate', () => {
    //   this.audioTime?.(this.audio?.currentTime ?? 0);
    // });
    // return new Promise<void>((res) => {
    //   this.audio!.addEventListener(
    //     'loadeddata',
    //     () => {
    //       res();
    //     },
    //     false,
    //   );
    // });
  }

  audioPause() {
    // if (this.audio) {
    //   this.audio.pause();
    // }
  }

  audioPlay() {
    // if (this.audio) {
    //   this.audio.play();
    // }
  }

  audioReset() {
    // if (this.audio) {
    //   this.audio.currentTime = 0;
    // }
  }
}
