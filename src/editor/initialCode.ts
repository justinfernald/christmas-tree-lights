import { runner, Utils, Vector3, Light, Color, colors } from 'christmas-tree';

runner.setup = () => {
  for (const light of runner.lights) {
    /**
     * This light update function is library syntatic sugar.
     * It is a tool to allow you to write you animation with only a single
     * light in mind. It also has the added feature of if you return a color,
     * it will set that light to that color.
     * You can also set the light color with `light.color = [some color]`
     */
    light.update = (time, delta, iteration) => {
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

/** Down here is same code but written without using light.update
 * You can test it by commenting out the runner.setup function and
 * Uncommenting this runner.update function.
 *
 * This can come in handy for different types of animations like,
 * moving a sphere through the tree and you need to check what lights
 * are in the sphere and if it, do some animation. (This is just one example)
 * That can lead to good performance boost.
 */
// runner.update = (time, delta, iteration) => {
//   for (const light of runner.lights) {
//     const locationFixedOrigin = light.locationOriginCenterBottomScaled;

//     const { x, y } = locationFixedOrigin;

//     const angle = Math.atan2(x, y);

//     const angleDeg = angle * Utils.RAD_TO_DEG;

//     light.color = Color.fromHSL(
//       Utils.mod(angleDeg + light.location.z * 360 * 2 + time * -0.2, 360),
//       100,
//       50,
//     );
//   };
// };
