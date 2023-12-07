declare module 'christmas-tree/animations/randomPlane' {

}
declare module 'christmas-tree/animations/test' {
  const ws281x: any;
  const NUM_LEDS = 500;
  const channel: any;
  let offset: number;
  function colorwheel(pos: number): number;
  function rgb2Int(r: number, g: number, b: number): number;

}
declare module 'christmas-tree/src/App' {
  import './App.css';
  function App(): import("@emotion/react/jsx-runtime").JSX.Element;
  export default App;

}
declare module 'christmas-tree/src/editor-exports' {
  import { Vector3 } from 'christmas-tree/src/utils/Vector3';
  import { Color, colors } from 'christmas-tree/src/utils/Color';
  import { Light } from 'christmas-tree/src/utils/Light';
  import { runner } from 'christmas-tree/src/runners/App';
  import { sleep } from 'christmas-tree/src/utils/Time';
  import * as MathUtils from 'christmas-tree/src/utils/Math';
  export { Vector3, Color, colors, Light, runner, sleep, MathUtils };

}
declare module 'christmas-tree/src/example' {
  export const example = "\nrunner.setup = () => {\n    for (const [i, light] of runner.lights.entries()) {\n        light.update = (time, delta) => {\n            return Color.fromHSL((i + time * 0.1) % 360, 100, 50);\n        };\n    }\n};\n\nrunner.update = (time, delta) => {\n    // console.log(runner.lights);\n};\n\nrunner.play();\n";

}
declare module 'christmas-tree/src/index' {
  export {};

}
declare module 'christmas-tree/src/main' {
  export {};

}
declare module 'christmas-tree/src/runners/App' {
  import { Runner } from 'christmas-tree/src/runners/Runner';
  export const runner: Runner;

}
declare module 'christmas-tree/src/runners/LightRunner' {
  import { Runner } from "christmas-tree/src/runners/Runner";
  import ws281x from "rpi-ws281x-native";
  export class LightRunner extends Runner {
      fps: number;
      channel: ReturnType<typeof ws281x>;
      /** brightness is 0 to 1 */
      constructor(brightness: number);
      draw(): void;
  }

}
declare module 'christmas-tree/src/runners/LocalRunner' {
  import { Runner } from "christmas-tree/src/runners/Runner";
  export class LocalRunner extends Runner {
      fps: number;
      draw(): void;
  }

}
declare module 'christmas-tree/src/runners/Runner' {
  import { Light } from "christmas-tree/src/utils/Light";
  export abstract class Runner {
      abstract fps: number;
      abstract draw(): void;
      setup?: () => void;
      update?: (time: number, delta: number | null, iteration: number) => void;
      lights: Light[];
      time: number | null;
      iteration: number;
      running: boolean;
      run(): Promise<void>;
      reset(): void;
      pause(): void;
      play(): void;
      step(): void;
      lightUpdate(time: number, delta: number | null, iteration: number): void;
  }

}
declare module 'christmas-tree/src/styles/index' {
  export * from 'christmas-tree/src/styles/theme';
  export * from 'christmas-tree/src/styles/utils';

}
declare module 'christmas-tree/src/styles/theme' {
  export const standardSizes: {
      readonly xs: 2;
      readonly sm: 5;
      readonly md: 10;
      readonly lg: 15;
      readonly xl: 25;
  };
  export const colors: {
      readonly primary: "#000";
      readonly secondary: "#fff";
      readonly accent: "#f00";
      readonly background: "#fff";
      readonly text: "#000";
  };
  export const standardShadows: {
      readonly 0: "0 0 0 rgba(0,0,0,0.12), 0 0 0 rgba(0,0,0,0.24)";
      readonly 1: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)";
      readonly 2: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)";
      readonly 3: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)";
      readonly 4: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)";
      readonly 5: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)";
  };
  export const transitionTimes: {
      readonly fast: "0.2s";
      readonly medium: "0.4s";
      readonly slow: "0.6s";
      readonly debug: "5s";
  };

}
declare module 'christmas-tree/src/styles/utils' {
  import { CSSObject } from '@emotion/react';
  import { CSSProperties } from '@emotion/serialize/types';
  import { Property } from 'csstype';
  import { standardShadows, standardSizes, transitionTimes } from 'christmas-tree/src/styles/theme';
  export type StandardSizeNumber = keyof typeof standardSizes | number;
  export const getStandardSizes: (size: StandardSizeNumber) => number;
  export const createStandardSizing: (cssProp: keyof CSSProperties) => (size: StandardSizeNumber) => CSSObject;
  export const absolute: (top?: number, right?: number, bottom?: number, left?: number) => CSSObject;
  export const relative: (top?: number, right?: number, bottom?: number, left?: number) => CSSObject;
  export const borderRadius: (size: StandardSizeNumber) => CSSObject;
  export const border: (color: string, size?: string) => {
      border: string;
  };
  export const padding: (size: StandardSizeNumber) => CSSObject;
  export const paddingHorizontal: (size: StandardSizeNumber) => CSSObject;
  export const paddingVertical: (size: keyof typeof standardSizes) => CSSObject;
  export const margin: (size: StandardSizeNumber) => CSSObject;
  export const marginHorizontalCenter: CSSObject;
  export const marginHorizontal: (size: StandardSizeNumber) => CSSObject;
  export const marginVertical: (size: keyof typeof standardSizes) => CSSObject;
  export const flex: (direction?: Property.FlexDirection) => CSSObject;
  export const flexValue: (value?: number) => CSSObject;
  export const font: (family?: CSSObject['fontFamily'], size?: CSSObject['fontSize'], weight?: CSSObject['fontWeight']) => CSSObject;
  export const flex1: CSSObject;
  export const flex2: CSSObject;
  export const flex3: CSSObject;
  export const flex4: CSSObject;
  export const flex5: CSSObject;
  export const flexCenter: CSSObject;
  export const flexCenterVertical: CSSObject;
  export const flexCenterHorizontal: CSSObject;
  export const flexBetween: CSSObject;
  export const flexAround: CSSObject;
  export const flexEvenly: CSSObject;
  export const flexColumn: CSSObject;
  export const fullSize: CSSObject;
  export const fullWidth: CSSObject;
  export const fullHeight: CSSObject;
  export const imageCover: CSSObject;
  export const imageContain: CSSObject;
  export const dropShadow: (size: keyof typeof standardShadows, inset?: boolean) => CSSObject;
  export const textShadow: (size: keyof typeof standardShadows) => CSSObject;
  export const center: CSSObject;
  export const centerHorizontal: CSSObject;
  export const centerVertical: CSSObject;
  export const transition: (time: keyof typeof transitionTimes) => CSSObject;
  export const clearTextStyle: CSSObject;
  export const property: <T extends keyof CSSProperties>(prop: T) => (value: CSSProperties[T]) => CSSObject;

}
declare module 'christmas-tree/src/utils/Color' {
  export class Color {
      red: number;
      green: number;
      blue: number;
      constructor(red: number, green: number, blue: number);
      toString(): string;
      toInt(): number;
      static fromInt(int: number): Color;
      static fromHex(hex: string): Color;
      static fromHSL(h: number, s: number, l: number): Color;
  }
  export const colors: {
      red: Color;
      green: Color;
      blue: Color;
      orange: Color;
      yellow: Color;
      purple: Color;
      pink: Color;
      white: Color;
      black: Color;
      gray: Color;
      brown: Color;
      cyan: Color;
      darkGreen: Color;
      darkBlue: Color;
      darkOrange: Color;
      darkYellow: Color;
      darkPurple: Color;
      darkPink: Color;
      darkGray: Color;
      darkBrown: Color;
      darkCyan: Color;
  };

}
declare module 'christmas-tree/src/utils/Light' {
  import { Color } from "christmas-tree/src/utils/Color";
  import { Vector3 } from "christmas-tree/src/utils/Vector3";
  export class Light {
      location: Vector3;
      color: Color;
      update?: (timeMs: number, deltaMs: number | null, iteration: number) => Color | void;
      constructor(location: Vector3, color: Color);
  }

}
declare module 'christmas-tree/src/utils/Math' {
  export const RAD_TO_DEG: number;
  export const DEG_TO_RAD: number;
  /**
   * Generates perlin noise at a given point ranging from -1 to 1.
   * @param x
   * @param y
   * @returns
   */
  export function perlinNoise(x: number, y: number): number;
  /**
   * Clamps a number between a minimum and maximum value.
   * @param value
   * @param min minimum value
   * @param max maximum value
   * @returns
   */
  export function clamp(value: number, min: number, max: number): number;
  /**
   * Linearly interpolates between two numbers.
   * @param a
   * @param b
   * @param t value between 0 and 1
   * @returns
   */
  export function lerp(a: number, b: number, t: number): number;
  /**
   * Linearly interpolates between two angles in degrees.
   * @param a degrees
   * @param b degrees
   * @param t value between 0 and 1
   * @returns degrees
   */
  export function lerpAngle(a: number, b: number, t: number): number;
  /**
   * Returns the difference between two angles in degrees.
   * @param a degrees
   * @param b degrees
   * @returns degrees
   */
  export function angleDifference(a: number, b: number): number;
  /**
   * get a random number
   * @param min min
   * @param max max
   * @returns random value between min and max
   */
  export function random(min: number, max: number): number;
  /**
   * get a random int
   * @param min min inclusive
   * @param max max exclusive
   * @returns random value between min and max
   */
  export function randomInt(min: number, max: number): number;
  export function randomChoice<T>(array: T[]): T;
  export function randomBool(): boolean;
  export function randomSign(): number;
  export function shuffle<T>(array: T[]): T[];
  export function shuffleInPlace<T>(array: T[]): T[];

}
declare module 'christmas-tree/src/utils/Time' {
  export function sleep(ms: number): Promise<unknown>;

}
declare module 'christmas-tree/src/utils/Vector3' {
  export class Vector3 {
      x: number;
      y: number;
      z: number;
      static fromObject(obj: {
          x: number;
          y: number;
          z: number;
      }): Vector3;
      static zero(): Vector3;
      static forward(): Vector3;
      static backward(): Vector3;
      static up(): Vector3;
      static down(): Vector3;
      static left(): Vector3;
      static right(): Vector3;
      static randomOnSphere(radius: number): Vector3;
      static randomInSphere(radius: number): Vector3;
      constructor(x: number, y: number, z: number);
      clone(): Vector3;
      add(v: Vector3): Vector3;
      sub(v: Vector3): Vector3;
      mult(v: Vector3): Vector3;
      dot(v: Vector3): number;
      cross(v: Vector3): Vector3;
      scale(scaler: number): Vector3;
      limitLength(length?: number): Vector3;
      asLength(length: number): Vector3;
      get squaredMagnitude(): number;
      get length(): number;
      get normalized(): Vector3;
      get asTuple(): [x: number, y: number, z: number];
      get asObject(): {
          x: number;
          y: number;
          z: number;
      };
      negate(): Vector3;
      /** In radians */
      rotateXYZ(angles: {
          x: number;
          y: number;
          z: number;
      }): Vector3;
      /** In radians */
      rotateXY(angle: number): Vector3;
      /** In radians */
      rotateYZ(angle: number): Vector3;
      /** In radians */
      rotateZX(angle: number): Vector3;
      /** In radians */
      rotateAroundAxis(axis: Vector3, angle: number): Vector3;
      angleBetween(v: Vector3): number;
      projectOnto(v: Vector3): Vector3;
      midpoint(v: Vector3): Vector3;
  }

}
declare module 'christmas-tree' {
  import main = require('christmas-tree/src/editor-exports');
  export = main;
}