/**
 * Returns the difference between two angles in degrees.
 * @param a degrees
 * @param b degrees
 * @returns degrees
 */
declare function angleDifference(a: number, b: number): number;

/**
 * Enum representing different blend modes for colors.
 */
export declare enum BlendMode {
    Normal = 0,
    Multiply = 1,
    Screen = 2,
    Overlay = 3,
    Darken = 4,
    Lighten = 5,
    ColorDodge = 6,
    ColorBurn = 7,
    HardLight = 8,
    SoftLight = 9,
    Difference = 10,
    Exclusion = 11,
    Gamma = 12
}

/**
 * Clamps a number between a minimum and maximum value.
 * @param value
 * @param min minimum value
 * @param max maximum value
 * @returns
 */
declare function clamp(value: number, min: number, max: number): number;

/**
 * Represents a color in RGB format.
 */
export declare class Color {
    red: number;
    green: number;
    blue: number;
    private static blendFuncs;
    /**
     * Creates a new Color instance.
     * @param red The red component of the color (0 to 255).
     * @param green The green component of the color (0 to 255).
     * @param blue The blue component of the color (0 to 255).
     */
    constructor(red: number, green: number, blue: number);
    private blendChannel;
    /**
     * Blends the color with another color.
     * @param color The color to blend with.
     * @param mode The blend mode to use.
     * @returns A new Color instance.
     */
    blend(color: Color, mode?: BlendMode): Color;
    /**
     * Converts the RGB color values to HSL (Hue, Saturation, Lightness) format.
     * @returns An array containing the HSL values [Hue, Saturation, Lightness].
     */
    toHSL(): [h: number, s: number, l: number];
    /**
     * Returns the complementary color of the current color.
     * The complementary color is obtained by adding 180 degrees to the hue value of the current color.
     * @returns {Color} The complementary color.
     */
    complementary(): Color;
    /**
     * Returns a new color with the specified intensity.
     * @param amount The intensity of the new color (0 to 1).
     * @returns A new Color instance.
     */
    intensity(amount: number): Color;
    /**
     * Returns the color as a string in the format "rgb(red, green, blue)".
     * @returns The color as a string.
     */
    toString(): string;
    /**
     * Returns the color as a 32-bit integer.
     * @returns The color as an integer.
     */
    toInt(): number;
    /**
     * Creates a new Color instance from a 32-bit integer.
     * @param int The integer representing the color.
     * @returns A new Color instance.
     */
    static fromInt(int: number): Color;
    /**
     * Creates a new Color instance from a hexadecimal color string.
     * @param hex The hexadecimal color string (e.g., "#ff0000").
     * @returns A new Color instance.
     * @throws Error if the hex color string is invalid.
     */
    static fromHex(hex: string): Color;
    /**
     * Creates a new Color instance from RGB components.
     * @param r The red component of the color (0 to 255).
     * @param g The green component of the color (0 to 255).
     * @param b The blue component of the color (0 to 255).
     * @returns A new Color instance.
     */
    static fromRGB(r: number, g: number, b: number): Color;
    /**
     * Creates a new Color instance from HSL components.
     * @param h The hue component of the color (0 to 360).
     * @param s The saturation component of the color (0 to 100).
     * @param l The lightness component of the color (0 to 100).
     * @returns A new Color instance.
     */
    static fromHSL(h: number, s: number, l: number): Color;
}

/**
 * Predefined colors
 */
export declare const colors: {
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

declare class Cone extends Shape {
    private radius;
    private height;
    private center;
    constructor(radius: number, height: number, center: {
        x: number;
        y: number;
        z: number;
    });
    isPointInside(x: number, y: number, z: number): boolean;
}

declare class ConeFrustum extends Shape {
    private nearRadius;
    private farRadius;
    private height;
    private center;
    constructor(nearRadius: number, farRadius: number, height: number, center: {
        x: number;
        y: number;
        z: number;
    });
    isPointInside(x: number, y: number, z: number): boolean;
}

declare class Cube extends Shape {
    private sideLength;
    private center;
    constructor(sideLength: number, center: {
        x: number;
        y: number;
        z: number;
    });
    isPointInside(x: number, y: number, z: number): boolean;
}

declare class Cuboid extends Shape {
    private lengthX;
    private lengthY;
    private lengthZ;
    private center;
    constructor(lengthX: number, lengthY: number, lengthZ: number, center: {
        x: number;
        y: number;
        z: number;
    });
    isPointInside(x: number, y: number, z: number): boolean;
}

declare class Cylinder extends Shape {
    private radius;
    private height;
    private center;
    constructor(radius: number, height: number, center: {
        x: number;
        y: number;
        z: number;
    });
    isPointInside(x: number, y: number, z: number): boolean;
}

declare class CylinderWithEllipticalBase extends Shape {
    private majorRadius;
    private minorRadius;
    private height;
    private center;
    constructor(majorRadius: number, minorRadius: number, height: number, center: {
        x: number;
        y: number;
        z: number;
    });
    isPointInside(x: number, y: number, z: number): boolean;
}

declare function debounce<F extends (...args: any[]) => any>(func: F, waitFor: number): F;

declare const DEG_TO_RAD: number;

declare class Ellipsoid extends Shape {
    private semiAxisX;
    private semiAxisY;
    private semiAxisZ;
    private center;
    constructor(semiAxisX: number, semiAxisY: number, semiAxisZ: number, center: {
        x: number;
        y: number;
        z: number;
    });
    isPointInside(x: number, y: number, z: number): boolean;
}

declare class Frustum extends Shape {
    private near;
    private far;
    private left;
    private right;
    private top;
    private bottom;
    private center;
    constructor(near: number, far: number, left: number, right: number, top: number, bottom: number, center: {
        x: number;
        y: number;
        z: number;
    });
    isPointInside(x: number, y: number, z: number): boolean;
}

declare class HexagonalPrism extends Shape {
    private sideLength;
    private height;
    private center;
    constructor(sideLength: number, height: number, center: {
        x: number;
        y: number;
        z: number;
    });
    isPointInside(x: number, y: number, z: number): boolean;
}

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

/**
 * Represents a light source.
 */
export declare class Light {
    _location: Vector3;
    color: Color;
    /**
     * Location of the light.
     * x: 0 to 1
     * y: 0 to 1
     * z: 0 to 1 (0 is bottom of tree, 1 is top of tree)
     */
    get location(): Vector3;
    /**
     * Location of the light with z scaled by 1.74.
     * x: 0 to 1
     * y: 0 to 1
     * z: 0 to 1.74 (0 is bottom of tree, 1.74 is top of tree)
     */
    get locationScaled(): Vector3;
    /**
     * Location of the light with origin at the center of the tree.
     * x: -0.5 to 0.5
     * y: -0.5 to 0.5
     * z: -0.5 to 0.5 (-0.5 is bottom of tree, 0.5 is top of tree)
     */
    get locationOriginCenter(): Vector3;
    /**
     * Location of the light with origin at the center of the tree and z scaled by 1.74.
     * x: -0.5 to 0.5
     * y: -0.5 to 0.5
     * z: -0.87 to 0.87 (-0.87 is bottom of tree, 0.87 is top of tree)
     */
    get locationOriginCenterScaled(): Vector3;
    /**
     * Location of the light with origin at the center of the tree for x and y, and bottom of the tree.
     * x: -0.5 to 0.5
     * y: -0.5 to 0.5
     * z: 0 to 1 (0 is bottom of tree, 1 is top of tree)
     */
    get locationOriginCenterBottom(): Vector3;
    /**
     * Location of the light with origin at the center of the tree for x and y, and bottom of the tree.
     * x: -0.5 to 0.5
     * y: -0.5 to 0.5
     * z: 0 to 1.74 (0 is bottom of tree, 1.74 is top of tree)
     */
    get locationOriginCenterBottomScaled(): Vector3;
    /**
     * Updates the light's color based on the specified parameters.
     *
     * @param timeMs - The current time in milliseconds.
     * @param deltaMs - The time difference in milliseconds since the last update.
     * @param iteration - The current iteration count.
     * @returns The updated color of the light, or void if no color update is needed.
     */
    update?: (timeMs: number, deltaMs: number | null, iteration: number) => Color | void;
    constructor(location: Vector3, color: Color);
    /**
     * Converts the Light object to a Data Transfer Object (DTO).
     * @returns The DTO representation of the Light object.
     */
    toDto(): LightDTO;
    /**
     * Creates a Light instance from a data transfer object (DTO).
     * @param dto - The DTO containing the location and color information.
     * @returns A new Light instance.
     */
    static fromDto(dto: LightDTO): Light;
}

export declare interface LightDTO {
    location: [number, number, number];
    color: number;
}

declare class LocalRunner extends Runner {
    _fps: number;
    set fps(fps: number);
    get fps(): number;
    draw(): void;
}

/**
 * Returns the mod.
 * @param a
 * @param b
 * @returns
 */
declare function mod(a: number, b: number): number;

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
declare function normalizeWithinRange(value: number, min: number, max: number): number | null;

declare class Octahedron extends Shape {
    private edgeLength;
    private center;
    constructor(edgeLength: number, center: {
        x: number;
        y: number;
        z: number;
    });
    isPointInside(x: number, y: number, z: number): boolean;
}

/**
 * Generates perlin noise at a given point ranging from -1 to 1.
 * @param x
 * @param y
 * @returns
 */
declare function perlinNoise(x: number, y: number): number;

declare class Pyramid extends Shape {
    private baseLength;
    private height;
    private center;
    constructor(baseLength: number, height: number, center: {
        x: number;
        y: number;
        z: number;
    });
    isPointInside(x: number, y: number, z: number): boolean;
}

declare const RAD_TO_DEG: number;

/**
 * get a random number
 * @param min min
 * @param max max
 * @returns random value between min and max
 */
declare function random(min: number, max: number): number;

/**
 * Generates a random boolean value.
 * @returns {boolean} The randomly generated boolean value.
 */
declare function randomBool(): boolean;

/**
 * Returns a random element from the given array.
 * @param array - The array to choose from.
 * @returns The randomly chosen element.
 * @template T - The type of elements in the array.
 */
declare function randomChoice<T>(array: T[]): T;

/**
 * Generates a random color based on the specified hue range.
 * @param hMin The minimum hue value (default: 0) [0 - hMax].
 * @param hMax The maximum hue value (default: 360) [0 - 360].
 * @param s The saturation value (default: 100) [0 - 100].
 * @param l The lightness value (default: 50) [0 - 100].
 * @returns A Color object representing the generated color.
 */
declare function randomColorByHue(hMin?: number, hMax?: number, s?: number, l?: number): Color;

/**
 * Generates a random point within a circle of the specified radius.
 * @param radius The radius of the circle.
 * @returns An tuple containing the x and y coordinates.
 */
declare function randomInCircle(radius: number, origin?: [x: number, y: number]): [x: number, y: number];

/**
 * get a random int
 * @param min min inclusive
 * @param max max exclusive
 * @returns random value between min and max
 */
declare function randomInt(min: number, max: number): number;

/**
 * Generates random coordinates on a circle with the specified radius.
 * @param radius The radius of the circle.
 * @returns An tuple containing the x and y coordinates.
 */
declare function randomOnCircle(radius: number, origin?: [x: number, y: number]): [x: number, y: number];

/**
 * Generates a random sign, either 1 or -1.
 *
 * @returns The randomly generated sign.
 */
declare function randomSign(): number;

declare class RectangularPrism extends Shape {
    private lengthX;
    private lengthY;
    private lengthZ;
    private center;
    constructor(lengthX: number, lengthY: number, lengthZ: number, center: {
        x: number;
        y: number;
        z: number;
    });
    isPointInside(x: number, y: number, z: number): boolean;
}

declare abstract class Runner {
    abstract fps: number;
    abstract draw(): void;
    /**
     * Optional setup function that can be called before running the animation.
     */
    setup?: () => void;
    /**
     * A function that updates the state of the runner.
     * @param time - The current time in milliseconds.
     * @param delta - The time difference between the current and previous frame in milliseconds.
     * @param iteration - The current iteration of the update loop.
     */
    update?: (time: number, delta: number | null, iteration: number) => void;
    /**
     * The lights that will be updated and drawn.
     */
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

export declare const runner: LocalRunner;

declare class Shape {
    constructor();
    isPointInside(x: number, y: number, z: number): boolean;
}

declare namespace Shapes {
    export {
        Cone,
        ConeFrustum,
        Cube,
        Cuboid,
        Cylinder,
        CylinderWithEllipticalBase,
        Ellipsoid,
        Frustum,
        HexagonalPrism,
        Octahedron,
        Pyramid,
        RectangularPrism,
        Shape,
        Sphere,
        Torus,
        TriangularPyramid
    }
}
export { Shapes }

/**
 * Shuffles the elements of an array in place.
 * @param array - The array to be shuffled.
 * @returns The shuffled array.
 * @template T - The type of elements in the array.
 */
declare function shuffle<T>(array: T[]): T[];

/**
 * Shuffles an array in place.
 *
 * @template T - The type of elements in the array.
 * @param {T[]} array - The array to be shuffled.
 * @returns {T[]} - The shuffled array.
 */
declare function shuffleInPlace<T>(array: T[]): T[];

/**
 * Pauses the execution for a specified number of milliseconds.
 * @param ms - The number of milliseconds to sleep.
 * @returns A promise that resolves after the specified time has elapsed.
 */
declare function sleep(ms: number): Promise<unknown>;

declare class Sphere extends Shape {
    private radius;
    private center;
    constructor(radius: number, center: {
        x: number;
        y: number;
        z: number;
    });
    isPointInside(x: number, y: number, z: number): boolean;
}

declare class Torus extends Shape {
    private majorRadius;
    private minorRadius;
    private center;
    constructor(majorRadius: number, minorRadius: number, center: {
        x: number;
        y: number;
        z: number;
    });
    isPointInside(x: number, y: number, z: number): boolean;
}

declare class TriangularPyramid extends Shape {
    private baseLength;
    private height;
    private center;
    constructor(baseLength: number, height: number, center: {
        x: number;
        y: number;
        z: number;
    });
    isPointInside(x: number, y: number, z: number): boolean;
}

declare namespace Utils {
    export {
        perlinNoise,
        clamp,
        normalizeWithinRange,
        lerp,
        lerpAngle,
        angleDifference,
        mod,
        random,
        randomInt,
        randomChoice,
        randomBool,
        randomSign,
        randomInCircle,
        randomOnCircle,
        randomColorByHue,
        shuffle,
        shuffleInPlace,
        sleep,
        debounce,
        RAD_TO_DEG,
        DEG_TO_RAD
    }
}
export { Utils }

/**
 * Represents a 3-dimensional vector in Euclidean space.
 */
export declare class Vector3 {
    x: number;
    y: number;
    z: number;
    /**
     * Creates a Vector3 from an object with `x`, `y`, and `z` properties.
     * @param obj - The object containing the `x`, `y`, and `z` properties.
     * @returns A new Vector3 instance.
     */
    static fromObject(obj: {
        x: number;
        y: number;
        z: number;
    }): Vector3;
    /**
     * Creates a Vector3 from a tuple of numbers representing the `x`, `y`, and `z` values.
     * @param tuple - The tuple containing the `x`, `y`, and `z` values.
     * @returns A new Vector3 instance.
     */
    static fromTuple(tuple: [x: number, y: number, z: number]): Vector3;
    /**
     * Creates a Vector3 with all components set to zero.
     * @returns A new Vector3 instance with all components set to zero.
     */
    static zero(): Vector3;
    /**
     * Creates a Vector3 representing the forward direction.
     * @returns A new Vector3 instance representing the forward direction.
     */
    static forward(): Vector3;
    /**
     * Creates a Vector3 representing the backward direction.
     * @returns A new Vector3 instance representing the backward direction.
     */
    static backward(): Vector3;
    /**
     * Creates a Vector3 representing the up direction.
     * @returns A new Vector3 instance representing the up direction.
     */
    static up(): Vector3;
    /**
     * Creates a Vector3 representing the down direction.
     * @returns A new Vector3 instance representing the down direction.
     */
    static down(): Vector3;
    /**
     * Creates a Vector3 representing the left direction.
     * @returns A new Vector3 instance representing the left direction.
     */
    static left(): Vector3;
    /**
     * Creates a Vector3 representing the right direction.
     * @returns A new Vector3 instance representing the right direction.
     */
    static right(): Vector3;
    /**
     * Creates a random Vector3 on the surface of a sphere with the given radius.
     * @param radius - The radius of the sphere.
     * @returns A new Vector3 instance representing a random point on the sphere's surface.
     */
    static randomOnSphere(radius: number): Vector3;
    /**
     * Creates a random Vector3 inside a sphere with the given radius.
     * @param radius - The radius of the sphere.
     * @returns A new Vector3 instance representing a random point inside the sphere.
     */
    static randomInSphere(radius: number): Vector3;
    /**
     * Creates a new Vector3 instance with the specified `x`, `y`, and `z` values.
     * @param x - The x component of the vector.
     * @param y - The y component of the vector.
     * @param z - The z component of the vector.
     */
    constructor(x: number, y: number, z: number);
    /**
     * Creates a copy of this Vector3 instance.
     * @returns A new Vector3 instance with the same `x`, `y`, and `z` values as this vector.
     */
    clone(): Vector3;
    /**
     * Adds another vector to this vector and returns the result.
     * @param v - The vector to add.
     * @returns A new Vector3 instance representing the sum of this vector and the given vector.
     */
    add(v: Vector3): Vector3;
    /**
     * Subtracts another vector from this vector and returns the result.
     * @param v - The vector to subtract.
     * @returns A new Vector3 instance representing the difference between this vector and the given vector.
     */
    sub(v: Vector3): Vector3;
    /**
     * Multiplies this vector by another vector component-wise and returns the result.
     * @param v - The vector to multiply by.
     * @returns A new Vector3 instance representing the component-wise product of this vector and the given vector.
     */
    mult(v: Vector3): Vector3;
    /**
     * Calculates the dot product of this vector and another vector.
     * @param v - The vector to calculate the dot product with.
     * @returns The dot product of this vector and the given vector.
     */
    dot(v: Vector3): number;
    /**
     * Calculates the cross product of this vector and another vector.
     * @param v - The vector to calculate the cross product with.
     * @returns A new Vector3 instance representing the cross product of this vector and the given vector.
     */
    cross(v: Vector3): Vector3;
    /**
     * Scales this vector by a scalar value and returns the result.
     * @param scaler - The scalar value to scale by.
     * @returns A new Vector3 instance representing the scaled vector.
     */
    scale(scaler: number): Vector3;
    /**
     * Limits the length of this vector to the specified value.
     * If the length of the vector is less than or equal to the specified length, the vector is returned unchanged.
     * If the length of the vector is greater than the specified length, a new vector with the same direction but the specified length is returned.
     * @param length - The maximum length of the vector.
     * @returns A new Vector3 instance with the same direction as this vector but with a length no greater than the specified length.
     */
    limitLength(length?: number): Vector3;
    /**
     * Returns a new vector with the same direction as this vector but with the specified length.
     * @param length - The desired length of the vector.
     * @returns A new Vector3 instance with the same direction as this vector but with the specified length.
     */
    asLength(length: number): Vector3;
    /**
     * Calculates the distance between this vector and another vector.
     * @param v - The vector to calculate the distance to.
     * @returns The distance between this vector and the given vector.
     */
    distanceTo(v: Vector3): number;
    /**
     * Returns the squared magnitude of this vector.
     * @returns The squared magnitude of this vector.
     */
    get squaredMagnitude(): number;
    /**
     * Returns the length (magnitude) of this vector.
     * @returns The length of this vector.
     */
    get length(): number;
    /**
     * Returns a new vector with the same direction as this vector but with a length of 1.
     * @returns A new Vector3 instance representing the normalized vector.
     */
    get normalized(): Vector3;
    /**
     * Returns the components of this vector as a tuple of numbers.
     * @returns A tuple containing the `x`, `y`, and `z` values of this vector.
     */
    get asTuple(): [x: number, y: number, z: number];
    /**
     * Returns the components of this vector as an object with `x`, `y`, and `z` properties.
     * @returns An object containing the `x`, `y`, and `z` values of this vector.
     */
    get asObject(): {
        x: number;
        y: number;
        z: number;
    };
    /**
     * Returns the negation of this vector.
     * @returns A new Vector3 instance representing the negation of this vector.
     */
    negate(): Vector3;
    /**
     * Rotates this vector around the x, y, and z axes by the specified angles.
     * @param angles - An object containing the rotation angles in radians for the x, y, and z axes.
     * @returns A new Vector3 instance representing the rotated vector.
     */
    rotateXYZ(angles: {
        x: number;
        y: number;
        z: number;
    }): Vector3;
    /**
     * Rotates this vector around the x and y axes by the specified angle.
     * @param angle - The rotation angle in radians.
     * @returns A new Vector3 instance representing the rotated vector.
     */
    rotateXY(angle: number): Vector3;
    /**
     * Rotates this vector around the y and z axes by the specified angle.
     * @param angle - The rotation angle in radians.
     * @returns A new Vector3 instance representing the rotated vector.
     */
    rotateYZ(angle: number): Vector3;
    /**
     * Rotates this vector around the z and x axes by the specified angle.
     * @param angle - The rotation angle in radians.
     * @returns A new Vector3 instance representing the rotated vector.
     */
    rotateZX(angle: number): Vector3;
    /**
     * Rotates this vector around the specified axis by the specified angle.
     * @param axis - The axis to rotate around.
     * @param angle - The rotation angle in radians.
     * @returns A new Vector3 instance representing the rotated vector.
     */
    rotateAroundAxis(axis: Vector3, angle: number): Vector3;
    /**
     * Calculates the angle between this vector and another vector.
     * @param v - The vector to calculate the angle to.
     * @returns The angle between this vector and the given vector in radians.
     */
    angleBetween(v: Vector3): number;
    /**
     * Projects this vector onto another vector.
     * @param v - The vector to project onto.
     * @returns A new Vector3 instance representing the projection of this vector onto the given vector.
     * @throws An error if the given vector has zero length.
     */
    projectOnto(v: Vector3): Vector3;
    /**
     * Calculates the midpoint between this vector and another vector.
     * @param v - The vector to calculate the midpoint with.
     * @returns A new Vector3 instance representing the midpoint between this vector and the given vector.
     */
    midpoint(v: Vector3): Vector3;
}

export { }
