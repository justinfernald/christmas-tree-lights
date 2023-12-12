import { runner, Color, Vector3, MathUtils, Light, Time, colors } from 'christmas-tree';

// Note all x, y, z values range from 0 to 1
// To scale z proportionally with tree, multiple value by 1.74
// Also z=0 the top of the tree

runner.setup = () => {
  for (const [i, light] of runner.lights.entries()) {
    light.update = (time, delta) => {
      const locationFixedOrigin = light.location.sub(new Vector3(0.5, 0.5, 0.5));

      const { x, y } = locationFixedOrigin;

      const angle = Math.atan2(x, y);

      const angleDeg = angle * MathUtils.RAD_TO_DEG;

      return Color.fromHSL(
        (angleDeg + light.location.z * 360 + time * 0.1) % 360,
        100,
        50,
      );
    };
  }
};

runner.update = (time, delta) => {};
