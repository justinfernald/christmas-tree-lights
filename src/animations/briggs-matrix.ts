import { runner, Light, colors } from 'christmas-tree';

/**
 * "Merry Christmas!"
 *      /\       -------
 *     /  \      level 0
 *    /    \     -------
 *    \    /     level 1
 *    /    \     -------
 *   /      \      ...
 *  /        \
 *  \        /
 *   /      \
 *   \      /
 *    |    |     --------
 *      | |      level 9
 *      ---      --------
 */

// ---------------------------------- SET-UP ------------------------------

const BOTTOM_LEVEL_NUMBER: number = 9;
const GLITCH_CHANCE: number = 0.1;
const DROP_RESTART_CHANCE: number = 0.02;

// Gets the level number the light is located at using its z-coordinate.
//   The z-coordinate can range from [0, 1]. Levels are subdivided by tenths.
function getLevelNum(light: Light): number {
  // Edge case
  if (light._location.z === 1) {
    return BOTTOM_LEVEL_NUMBER;
  }
  return Math.floor((light._location.z * 10));
}

// Gets the closest light in the next level with respect to the x-y plane.
function getClosestLightInNextLevel(light: Light): Light | null {
  const levelNum = getLevelNum(light);
  if (levelNum === BOTTOM_LEVEL_NUMBER) {
    return null;
  }

  let closest: Light | null = null;
  let shortestDistance = Infinity;
  for (const lightAtNextLevel of levels[levelNum + 1]) {
    const dist = Math.sqrt(
      Math.pow(light._location.x - lightAtNextLevel._location.x, 2) +
      Math.pow(light._location.y - lightAtNextLevel._location.y, 2)
    );
    if (dist < shortestDistance) {
      shortestDistance = dist;
      closest = lightAtNextLevel;
    }
  } 
  return closest;
}

function isRandomlyGlitched(): boolean {
  return Math.random() < GLITCH_CHANCE;
}

// Organize lights into their respective levels.
const levels = [...Array(10)].map(_ => []);
for (const light of runner.lights) {
  levels[getLevelNum(light)].push(light);
}

// Pre-compute the the drop path from each starting light in the zeroth (top) level.
//   The path is terminated with a null value.
const dropPaths = levels[0].map((topLight: Light) => {
  const path = [topLight];
  while (path[path.length - 1] != null) {
    path.push(getClosestLightInNextLevel(path[path.length - 1]));
  }
  return path;
});

const drops = dropPaths.map((path) => {
  return {
    path,
    index: path.length - 1,
    glitched: isRandomlyGlitched()
  }
});

// ---------------------------------- Animation ------------------------------

function fadeTree(): void {
  for (const light of runner.lights) {
    light.color = light.color.intensity(0.85);
  }
}

for (const light of runner.lights) {
  light.color = colors.black;
}

runner.update = (time, delta, iteration) => {
  fadeTree();
  for (const drop of drops) {
    const dropLight = drop.path[drop.index];
    if (dropLight != null) {
      dropLight.color = drop.glitched ? colors.green : colors.darkGreen;
      drop.index += 1;
    } else if (Math.random() < DROP_RESTART_CHANCE) {
      drop.index = 0;
      drop.glitched = isRandomlyGlitched();
    }
  }
};