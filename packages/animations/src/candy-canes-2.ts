import { runner, Vector3, colors } from 'christmas-tree';

let i = 0;
runner.setup = () => {
  for (const light of runner.lights) {
    const location = light.locationOriginCenterBottomScaled;
    const {z} = location;

    light.update = (time, delta) => {
      const newLoc = location.rotateXY(z * 2 * Math.PI * 3.5 * Math.sin(time / 800) + i * 0.2)

      if (newLoc.x < 0) {
        return colors.red;
      } else {
        return colors.white;
      }
    };
  }
};

runner.update = (time) => {
  if (Math.sin(time /500) > 0) {
    i++;
  } else {
    i--;
  }
}
