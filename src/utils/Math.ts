export const RAD_TO_DEG = 180 / Math.PI;
export const DEG_TO_RAD = Math.PI / 180;

const p = shuffle(Array.from({ length: 256 }, (_, i) => i));

function fade(t: number): number {
  return t * t * t * (t * (t * 6 - 15) + 10);
}

function grad(hash: number, x: number, y: number): number {
  const h = hash & 15;
  const u = h < 8 ? x : y;
  const v = h < 4 ? y : h === 12 || h === 14 ? x : 0;
  return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
}

/**
 * Generates perlin noise at a given point ranging from -1 to 1.
 * @param x
 * @param y
 * @returns
 */
export function perlinNoise(x: number, y: number): number {
  const X = Math.floor(x) & 255;
  const Y = Math.floor(y) & 255;

  x -= Math.floor(x);
  y -= Math.floor(y);

  const u = fade(x);
  const v = fade(y);

  const A = p[X] + Y;
  const B = p[X + 1] + Y;

  return lerp(
    lerp(grad(p[A], x, y), grad(p[B], x - 1, y), u),
    lerp(grad(p[A + 1], x, y - 1), grad(p[B + 1], x - 1, y - 1), u),
    v,
  );
}

/**
 * Clamps a number between a minimum and maximum value.
 * @param value
 * @param min minimum value
 * @param max maximum value
 * @returns
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Linearly interpolates between two numbers.
 * @param a
 * @param b
 * @param t value between 0 and 1
 * @returns
 */
export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

/**
 * Linearly interpolates between two angles in degrees.
 * @param a degrees
 * @param b degrees
 * @param t value between 0 and 1
 * @returns degrees
 */
export function lerpAngle(a: number, b: number, t: number): number {
  return a + angleDifference(b, a) * t;
}

/**
 * Returns the difference between two angles in degrees.
 * @param a degrees
 * @param b degrees
 * @returns degrees
 */
export function angleDifference(a: number, b: number): number {
  const diff = b - a;
  return ((diff + 180) % 360) - 180;
}

/**
 * get a random number
 * @param min min
 * @param max max
 * @returns random value between min and max
 */
export function random(min: number, max: number): number {
  return min + Math.random() * (max - min);
}

/**
 * get a random int
 * @param min min inclusive
 * @param max max exclusive
 * @returns random value between min and max
 */
export function randomInt(min: number, max: number): number {
  return Math.floor(random(min, max));
}

export function randomChoice<T>(array: T[]): T {
  return array[randomInt(0, array.length)];
}

export function randomBool(): boolean {
  return Math.random() < 0.5;
}

export function randomSign(): number {
  return randomBool() ? 1 : -1;
}

export function shuffle<T>(array: T[]): T[] {
  const result = array.slice();
  for (let i = result.length - 1; i > 0; i--) {
    const j = randomInt(0, i + 1);
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function shuffleInPlace<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = randomInt(0, i + 1);
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
