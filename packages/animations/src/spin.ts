import { runner, Utils, Vector3, Light, Color, colors } from 'christmas-tree';

runner.update = (time, delta) => {
  for (const light of runner.lights) {

    const angles = {
      x: 45 * Utils.DEG_TO_RAD + time * 0.001, 
      y: light.location.z * 0.01 * Utils.DEG_TO_RAD + time * 0.006, 
    };

    light.update = (time, delta) => {
      const newLoc = light.locationOriginCenterScaled.add(
        new Vector3(0, 0, (Math.sin(time * 0.0002)) / 2)
      ).rotateXY(angles.x).rotateYZ(angles.y)

      return newLoc.z < 0 ? colors.red : colors.green;
    };
  }
};
