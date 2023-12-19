import { runner, colors } from 'christmas-tree';

// Candy Cane

runner.update = (time, delta) => {
  for (const light of runner.lights) {
    const z = light.locationOriginCenterBottomScaled.z;

    light.update = (time, delta) => {
      const newLoc = light.locationOriginCenterBottomScaled.rotateXY(
        z * 2 * Math.PI * 2.5 * Math.sin(time / 5_000) + time * 0.005,
      );

      if (newLoc.x < -0.25) {
        return colors.darkBlue;
      } else if (newLoc.x < 0.15) {
        return colors.blue;
      } else {
        return colors.white;
      }
    };
  }
};
