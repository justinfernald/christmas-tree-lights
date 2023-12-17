import {
  runner,
  Color,
  Vector3,
  Utils,
  Light,
  colors,
} from 'christmas-tree';

const scale = new Vector3(1, 1, 1.74);

runner.setup = () => {
  for (const [i, light] of runner.lights.entries()) {
    light.update = (time, delta) => {
      const location = light._location
        .sub(new Vector3(0.5, 0.5, 0.5))
        .rotateXY(time * 0.003)
        .add(new Vector3(0.5, 0.5, 0.5));
      const sphere1 = location.mult(scale).sub(new Vector3(0.5, 0.3, 1.45)).length;
      const sphere2 = location.mult(scale).sub(new Vector3(0.5, 0.7, 1.45)).length;
      const cylinderX = location.z * location.z * 0.7 - location.z / 13 + 0.5;
      const cylinder = location
        .mult(new Vector3(1, 1, 0))
        .sub(new Vector3(cylinderX, 0.5, 0)).length;
      const radius = 0.3;
      const cylinderRadius = 0.2;
      if (sphere1 < radius || sphere2 < radius) {
        return new Color(0, 255, 0);
      }
      if (cylinder < cylinderRadius) {
        if (location.z < 0.2) {
          return new Color(255, 130, 130);
        }
        return new Color(255, 0, 0);
      }
      return new Color(0, 0, 0);
    };
  }
};
