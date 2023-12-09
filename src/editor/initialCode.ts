import { runner, Color } from 'christmas-tree';

runner.setup = () => {
  for (const [i, light] of runner.lights.entries()) {
    light.update = (time, delta) => {
      return Color.fromHSL((i + time * 0.1) % 360, 100, 50);
    };
  }
};

runner.update = (time, delta) => {
  console.log(time, delta);
  // console.log(runner.lights);
};

runner.play();
