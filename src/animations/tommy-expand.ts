import { runner, Utils, Vector3, Light, Color, colors } from 'christmas-tree';

const COLORS = [
  Color.fromHex('#ff0000'),
  Color.fromHex('#ff7878'),
  Color.fromHex('#ffffff'),
  Color.fromHex('#74d680'),
  Color.fromHex('#378b29'),
];

const PULSE_SPEED = 0.5 / 1000; // units per millisecond
const PULSE_DELAY = 4 * 1000; //milliseconds
const PULSE_RADIUS = 0.2;

interface Pulse {
  location: Vector3;
  time: number;
  color: Color;
}

function createPulse(time: number, lights: Light[]): Pulse {
  const angle = Utils.random(-180, 180);
  const baseX = Math.cos(angle * Utils.DEG_TO_RAD) / 2;
  const baseY = Math.sin(angle * Utils.DEG_TO_RAD) / 2;
  const baseZ = Utils.random(-0.87, 0.87);
  const loc = Vector3.fromObject({ x: baseX, y: baseY, z: baseZ });
  let closest = lights[0];
  let closestToLocDist = closest.locationOriginCenterScaled.distanceTo(loc);

  for (const light of lights) {
    const lightLoc = light.locationOriginCenterScaled;

    const lightToLocDist = lightLoc.distanceTo(loc);

    if (lightToLocDist < closestToLocDist) {
      closest = light;
      closestToLocDist = lightToLocDist;
    }
  }

  const location = closest.locationOriginCenterScaled;
  const color = Utils.randomChoice(COLORS);
  return { location, time, color };
}

let currentPulse: null | Pulse = null;

runner.setup = () => {
  console.log('SETUP');
  currentPulse = null; // this doesn't fix the reset issue, but will with update to lib
};

runner.update = (time, delta, iteration) => {
  // added time <= 1000 / runner.fps to fix reset issue, but can be removed with update to lib
  if (
    !currentPulse ||
    currentPulse.time + PULSE_DELAY < time ||
    time <= 1000 / runner.fps
  ) {
    currentPulse = createPulse(time, runner.lights);
  }

  for (const light of runner.lights) {
    const lightLoc = light.locationOriginCenterScaled;

    const lightDistance = lightLoc.distanceTo(currentPulse.location);
    const targetDistance = (time - currentPulse.time) * PULSE_SPEED - PULSE_RADIUS;
    const pulseDistance = Math.abs(lightDistance - targetDistance);

    const intensity = Math.max(0, 1 - pulseDistance / PULSE_RADIUS);
    light.color = Color.fromRGB(
      currentPulse.color.red * intensity,
      currentPulse.color.green * intensity,
      currentPulse.color.blue * intensity,
    );
  }
};
