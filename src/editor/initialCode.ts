import { Color, Light, Utils, Vector3, colors, runner } from 'christmas-tree';

// Note all x, y, z values range from 0 to 1
// To scale z proportionally with tree, multiple value by 1.74
// Also z=0 the top of the tree

const light: Light = new Light(new Vector3(0, 0, 0), new Color(0, 0, 0));

runner.setup = () => {
  for (const [i, light] of runner.lights.entries()) {
    light.update = (time, delta) => {
      const locationFixedOrigin = light.location.sub(new Vector3(0.5, 0.5, 0.5));

      const { x, y } = locationFixedOrigin;

      const angle = Math.atan2(x, y);

      const angleDeg = angle * Utils.RAD_TO_DEG;

      return Color.fromHSL(
        (angleDeg + light.location.z * 360 + time * 0.1) % 360,
        100,
        50,
      );
    };
  }
};

runner.update = (time, delta) => {};
