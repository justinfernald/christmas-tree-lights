/**
 * Returns the difference between two angles in degrees.
 * @param a degrees
 * @param b degrees
 * @returns degrees
 */
declare function angleDifference(a: number, b: number): number;

/**
 * Clamps a number between a minimum and maximum value.
 * @param value
 * @param min minimum value
 * @param max maximum value
 * @returns
 */
declare function clamp(value: number, min: number, max: number): number;

export declare const Color: typeof ColorLib.Color;

declare class Color_2 {
    red: number;
    green: number;
    blue: number;
    /**
     * red: 0 to 255
     * green: 0 to 255
     * blue: 0 to 255
     */
    constructor(red: number, green: number, blue: number);
    toString(): string;
    toInt(): number;
    static fromInt(int: number): Color_2;
    static fromHex(hex: string): Color_2;
    /**
     * red: 0 to 255
     * green: 0 to 255
     * blue: 0 to 255
     */
    static fromRGB(r: number, g: number, b: number): Color_2;
    /**
     * hue: 0 to 360
     * saturation: 0 to 100
     * lightness: 0 to 100
     */
    static fromHSL(h: number, s: number, l: number): Color_2;
}

declare namespace ColorLib {
    export {
        Color_2 as Color,
        colors_2 as colors
    }
}

export declare const colors: {
    red: ColorLib.Color;
    green: ColorLib.Color;
    blue: ColorLib.Color;
    orange: ColorLib.Color;
    yellow: ColorLib.Color;
    purple: ColorLib.Color;
    pink: ColorLib.Color;
    white: ColorLib.Color;
    black: ColorLib.Color;
    gray: ColorLib.Color;
    brown: ColorLib.Color;
    cyan: ColorLib.Color;
    darkGreen: ColorLib.Color;
    darkBlue: ColorLib.Color;
    darkOrange: ColorLib.Color;
    darkYellow: ColorLib.Color;
    darkPurple: ColorLib.Color;
    darkPink: ColorLib.Color;
    darkGray: ColorLib.Color;
    darkBrown: ColorLib.Color;
    darkCyan: ColorLib.Color;
};

declare const colors_2: {
    red: Color_2;
    green: Color_2;
    blue: Color_2;
    orange: Color_2;
    yellow: Color_2;
    purple: Color_2;
    pink: Color_2;
    white: Color_2;
    black: Color_2;
    gray: Color_2;
    brown: Color_2;
    cyan: Color_2;
    darkGreen: Color_2;
    darkBlue: Color_2;
    darkOrange: Color_2;
    darkYellow: Color_2;
    darkPurple: Color_2;
    darkPink: Color_2;
    darkGray: Color_2;
    darkBrown: Color_2;
    darkCyan: Color_2;
};

declare const DEG_TO_RAD: number;

/**
 * Linearly interpolates between two numbers.
 * @param a
 * @param b
 * @param t value between 0 and 1
 * @returns
 */
declare function lerp(a: number, b: number, t: number): number;

/**
 * Linearly interpolates between two angles in degrees.
 * @param a degrees
 * @param b degrees
 * @param t value between 0 and 1
 * @returns degrees
 */
declare function lerpAngle(a: number, b: number, t: number): number;

export declare const Light: typeof LightLib.Light;

declare class Light_2 {
    location: Vector3_2;
    color: Color_2;
    update?: (timeMs: number, deltaMs: number | null, iteration: number) => Color_2 | void;
    constructor(location: Vector3_2, color: Color_2);
    toDto(): {
        location: [x: number, y: number, z: number];
        color: number;
    };
    static fromDto(dto: {
        location: [number, number, number];
        color: number;
    }): Light_2;
}

declare namespace LightLib {
    export {
        Light_2 as Light
    }
}

declare class LocalRunner extends Runner {
    fps: number;
    draw(): void;
}

declare namespace MathUtils {
    export {
        perlinNoise,
        clamp,
        lerp,
        lerpAngle,
        angleDifference,
        random,
        randomInt,
        randomChoice,
        randomBool,
        randomSign,
        shuffle,
        shuffleInPlace,
        RAD_TO_DEG,
        DEG_TO_RAD
    }
}
export { MathUtils }

/**
 * Generates perlin noise at a given point ranging from -1 to 1.
 * @param x
 * @param y
 * @returns
 */
declare function perlinNoise(x: number, y: number): number;

declare const RAD_TO_DEG: number;

/**
 * get a random number
 * @param min min
 * @param max max
 * @returns random value between min and max
 */
declare function random(min: number, max: number): number;

declare function randomBool(): boolean;

declare function randomChoice<T>(array: T[]): T;

/**
 * get a random int
 * @param min min inclusive
 * @param max max exclusive
 * @returns random value between min and max
 */
declare function randomInt(min: number, max: number): number;

declare function randomSign(): number;

declare abstract class Runner {
    abstract fps: number;
    abstract draw(): void;
    setup?: () => void;
    update?: (time: number, delta: number | null, iteration: number) => void;
    lights: Light_2[];
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

export declare const runner: LocalRunner;

declare function shuffle<T>(array: T[]): T[];

declare function shuffleInPlace<T>(array: T[]): T[];

declare function sleep(ms: number): Promise<unknown>;

declare namespace Time {
    export {
        sleep
    }
}
export { Time }

export declare const Vector3: typeof Vector3Lib.Vector3;

declare class Vector3_2 {
    x: number;
    y: number;
    z: number;
    static fromObject(obj: {
        x: number;
        y: number;
        z: number;
    }): Vector3_2;
    static fromTuple(tuple: [x: number, y: number, z: number]): Vector3_2;
    static zero(): Vector3_2;
    static forward(): Vector3_2;
    static backward(): Vector3_2;
    static up(): Vector3_2;
    static down(): Vector3_2;
    static left(): Vector3_2;
    static right(): Vector3_2;
    static randomOnSphere(radius: number): Vector3_2;
    static randomInSphere(radius: number): Vector3_2;
    constructor(x: number, y: number, z: number);
    clone(): Vector3_2;
    add(v: Vector3_2): Vector3_2;
    sub(v: Vector3_2): Vector3_2;
    mult(v: Vector3_2): Vector3_2;
    dot(v: Vector3_2): number;
    cross(v: Vector3_2): Vector3_2;
    scale(scaler: number): Vector3_2;
    limitLength(length?: number): Vector3_2;
    asLength(length: number): Vector3_2;
    distanceTo(v: Vector3_2): number;
    get squaredMagnitude(): number;
    get length(): number;
    get normalized(): Vector3_2;
    get asTuple(): [x: number, y: number, z: number];
    get asObject(): {
        x: number;
        y: number;
        z: number;
    };
    negate(): Vector3_2;
    /** In radians */
    rotateXYZ(angles: {
        x: number;
        y: number;
        z: number;
    }): Vector3_2;
    /** In radians */
    rotateXY(angle: number): Vector3_2;
    /** In radians */
    rotateYZ(angle: number): Vector3_2;
    /** In radians */
    rotateZX(angle: number): Vector3_2;
    /** In radians */
    rotateAroundAxis(axis: Vector3_2, angle: number): Vector3_2;
    angleBetween(v: Vector3_2): number;
    projectOnto(v: Vector3_2): Vector3_2;
    midpoint(v: Vector3_2): Vector3_2;
}

declare namespace Vector3Lib {
    export {
        Vector3_2 as Vector3
    }
}

export { }
