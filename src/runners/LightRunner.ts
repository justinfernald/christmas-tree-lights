import { Runner } from './Runner';
import ws281x from 'rpi-ws281x-native';

export class LightRunner extends Runner {
  fps = 30;
  channel: ReturnType<typeof ws281x>;

  /** brightness is 0 to 1 */
  constructor(brightness: number) {
    super();

    this.channel = ws281x(this.lights.length, {
      stripType: ws281x.stripType.WS2811_RGB,
      brightness: 255 * brightness,
    });

    process.on('SIGINT', () => {
      ws281x.reset();
      ws281x.finalize();

      process.nextTick(() => {
        process.exit(0);
      });
    });
  }

  draw() {
    for (const [i, light] of this.lights.entries()) {
      this.channel.array[i] = light.color.toInt();
    }

    ws281x.render();
  }
}
