import { runner, Utils, Vector3, Light, Color, colors } from 'christmas-tree';

runner.setup = () => {
  for (const [i, light] of runner.lights.entries()) {
    light.update = (time, delta) => {
      const locationFixedOrigin = light.locationOriginCenterBottomScaled;

      const { x, y } = locationFixedOrigin;

      const angle = Math.atan2(x, y);

      const angleDeg = angle * Utils.RAD_TO_DEG;

      return Color.fromHSL(
        Utils.mod(angleDeg + light.location.z * 360 * 2 + time * -0.2, 360),
        100,
        50,
      );
    };
  }
};

runner.update = (time, delta) => {};
