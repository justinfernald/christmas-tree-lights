import { Color } from './Color';

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
 * Normalizes a value within a range.
 * If it is outside the range, null is returned.
 * If it is inside the range, a value between 0 and 1 is returned.
 * 0 is returned if the value is equal to the minimum value.
 * 1 is returned if the value is equal to the maximum value.
 * Linearly maps the value to the 0-1 range if it is within the range.
 *
 * @param value
 * @param min minimum value
 * @param max maximum value
 * @returns
 */
export function normalizeWithinRange(
  value: number,
  min: number,
  max: number,
): number | null {
  if (value < min || value > max) {
    return null; // Value is not in range
  }

  return (value - min) / (max - min); // Linearly map to 0-1 range
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
 * Returns the mod.
 * @param a
 * @param b
 * @returns
 */
export function mod(a: number, b: number): number {
  return ((a % b) + b) % b;
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

/**
 * Returns a random element from the given array.
 * @param array - The array to choose from.
 * @returns The randomly chosen element.
 * @template T - The type of elements in the array.
 */
export function randomChoice<T>(array: T[]): T {
  return array[randomInt(0, array.length)];
}

/**
 * Generates a random boolean value.
 * @returns {boolean} The randomly generated boolean value.
 */
export function randomBool(): boolean {
  return Math.random() < 0.5;
}

/**
 * Generates a random sign, either 1 or -1.
 *
 * @returns The randomly generated sign.
 */
export function randomSign(): number {
  return randomBool() ? 1 : -1;
}

/**
 * Generates a random point within a circle of the specified radius.
 * @param radius The radius of the circle.
 * @returns An tuple containing the x and y coordinates.
 */
export function randomInCircle(
  radius: number,
  origin: [x: number, y: number] = [0, 0],
): [x: number, y: number] {
  const angle = random(0, Math.PI * 2);
  const r = radius * Math.sqrt(Math.random()); // used to make it uniform

  const [offsetX, offsetY] = origin;
  return [offsetX + Math.cos(angle) * r, offsetY + Math.sin(angle) * r];
}

/**
 * Generates random coordinates on a circle with the specified radius.
 * @param radius The radius of the circle.
 * @returns An tuple containing the x and y coordinates.
 */
export function randomOnCircle(
  radius: number,
  origin: [x: number, y: number] = [0, 0],
): [x: number, y: number] {
  const angle = random(0, Math.PI * 2);

  const [offsetX, offsetY] = origin;
  return [offsetX + Math.cos(angle) * radius, offsetY + Math.sin(angle) * radius];
}

/**
 * Generates a random color based on the specified hue range.
 * @param hMin The minimum hue value (default: 0) [0 - hMax].
 * @param hMax The maximum hue value (default: 360) [0 - 360].
 * @param s The saturation value (default: 100) [0 - 100].
 * @param l The lightness value (default: 50) [0 - 100].
 * @returns A Color object representing the generated color.
 */
export function randomColorByHue(hMin = 0, hMax = 360, s = 100, l = 50) {
  const h = random(hMin, hMax);
  return Color.fromHSL(h, s, l);
}

/**
 * Shuffles the elements of an array in place.
 * @param array - The array to be shuffled.
 * @returns The shuffled array.
 * @template T - The type of elements in the array.
 */
export function shuffle<T>(array: T[]): T[] {
  const result = array.slice();
  for (let i = result.length - 1; i > 0; i--) {
    const j = randomInt(0, i + 1);
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Shuffles an array in place.
 *
 * @template T - The type of elements in the array.
 * @param {T[]} array - The array to be shuffled.
 * @returns {T[]} - The shuffled array.
 */
export function shuffleInPlace<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = randomInt(0, i + 1);
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/**
 * Pauses the execution for a specified number of milliseconds.
 * @param ms - The number of milliseconds to sleep.
 * @returns A promise that resolves after the specified time has elapsed.
 */
export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export function debounce<F extends (...args: any[]) => any>(func: F, waitFor: number): F {
  let timeout: NodeJS.Timeout | null = null;

  const debounced = (...args: any[]) => {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => func(...args), waitFor);
  };

  return debounced as any;
}
/* eslint-enable @typescript-eslint/no-explicit-any */
