export abstract class AudioRunner {
  loader: Promise<void> | null = null;

  constructor(url: string, loop = true) {
    this.loader = this.audioLoader(url, loop);
  }

  abstract audioLoader(url: string, loop: boolean): Promise<void>;

  audioTime?: (time: number) => void;
  audioEnded?: () => void;

  abstract audioPause(): void;

  abstract audioPlay(): void;

  abstract audioReset(): void;
}
