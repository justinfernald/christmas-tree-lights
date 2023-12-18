import { runner, Utils, Vector3, Light, BlendMode, Color, colors } from 'christmas-tree';

interface SlidingCuboidInput {
  color: Color,
  eulerAngles: Vector3,

  duration: number,
  startTime: number

  width: number
}

class SlidingCuboid {
  constructor(public data: SlidingCuboidInput) { }

  /**
   * x value between 0 and 1, return value between 0 and 1
   * x = 0, back of cuboid
   * x = 1, front of cuboid
  */
  powerFn(x: number): number {
    return x;
  }

  /** returns brightness from 0 to 1 */
  getPowerLevel(location: Vector3, time: number): number {
    const rotatedLocation = location.rotateXYZ(this.data.eulerAngles);


    const val = Utils.lerp(-0.87 - this.data.width, 0.87 + this.data.width, (time - this.data.startTime) / this.data.duration)

    const min = val;
    const max = val + this.data.width

    const inRangeVal = Utils.normalizeWithinRange(rotatedLocation.z, min, max)

    if (inRangeVal === null) return 0;

    return this.powerFn(inRangeVal);
  }
}

function getRandomAngles() {
  return new Vector3(Utils.random(0, 2 * Math.PI), Utils.random(0, 2 * Math.PI), Utils.random(0, 2 * Math.PI))
}

let slidingCuboids: SlidingCuboid[] = [];

runner.setup = () => {
  slidingCuboids = []

  for (const light of runner.lights) {
    light.update = (time, delta, iteration) => {

      for (const slidingCuboid of slidingCuboids) {
        const brightness = slidingCuboid.getPowerLevel(light.locationOriginCenterScaled, time)

        if (brightness === 0) continue;

        const color = slidingCuboid.data.color;
        return light.color.blend(color.intensity(brightness), BlendMode.Lighten);
      }

      return colors.black
    };
  }
};

const spawnDelay = 750;

let lastSpawnTime = -spawnDelay;

runner.update = (time, delta, iteration) => {
  if (lastSpawnTime + spawnDelay < time || slidingCuboids.length === 0) {
    lastSpawnTime = time;
    slidingCuboids.push(new SlidingCuboid({
      color: Utils.randomColorByHue(),
      duration: Utils.randomInt(1000, 3000),
      eulerAngles: getRandomAngles(),
      startTime: time,
      width: .3
    }))
  }

  slidingCuboids = slidingCuboids.filter(
    slidingCuboid => slidingCuboid.data.startTime + slidingCuboid.data.duration >= time
  );
};
