/**
 * Represents a 3-dimensional vector in Euclidean space.
 */
export class Vector3 {
  /**
   * Creates a Vector3 from an object with `x`, `y`, and `z` properties.
   * @param obj - The object containing the `x`, `y`, and `z` properties.
   * @returns A new Vector3 instance.
   */
  static fromObject(obj: { x: number; y: number; z: number }): Vector3 {
    return new Vector3(obj.x, obj.y, obj.z);
  }

  /**
   * Creates a Vector3 from a tuple of numbers representing the `x`, `y`, and `z` values.
   * @param tuple - The tuple containing the `x`, `y`, and `z` values.
   * @returns A new Vector3 instance.
   */
  static fromTuple(tuple: [x: number, y: number, z: number]): Vector3 {
    return new Vector3(tuple[0], tuple[1], tuple[2]);
  }

  /**
   * Creates a Vector3 with all components set to zero.
   * @returns A new Vector3 instance with all components set to zero.
   */
  static zero(): Vector3 {
    return new Vector3(0, 0, 0);
  }

  /**
   * Creates a Vector3 representing the forward direction.
   * @returns A new Vector3 instance representing the forward direction.
   */
  static forward(): Vector3 {
    return new Vector3(0, 0, 1);
  }

  /**
   * Creates a Vector3 representing the backward direction.
   * @returns A new Vector3 instance representing the backward direction.
   */
  static backward(): Vector3 {
    return new Vector3(0, 0, -1);
  }

  /**
   * Creates a Vector3 representing the up direction.
   * @returns A new Vector3 instance representing the up direction.
   */
  static up(): Vector3 {
    return new Vector3(0, 1, 0);
  }

  /**
   * Creates a Vector3 representing the down direction.
   * @returns A new Vector3 instance representing the down direction.
   */
  static down(): Vector3 {
    return new Vector3(0, -1, 0);
  }

  /**
   * Creates a Vector3 representing the left direction.
   * @returns A new Vector3 instance representing the left direction.
   */
  static left(): Vector3 {
    return new Vector3(-1, 0, 0);
  }

  /**
   * Creates a Vector3 representing the right direction.
   * @returns A new Vector3 instance representing the right direction.
   */
  static right(): Vector3 {
    return new Vector3(1, 0, 0);
  }

  /**
   * Creates a random Vector3 on the surface of a sphere with the given radius.
   * @param radius - The radius of the sphere.
   * @returns A new Vector3 instance representing a random point on the sphere's surface.
   */
  static randomOnSphere(radius: number): Vector3 {
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);

    return new Vector3(x, y, z);
  }

  /**
   * Creates a random Vector3 inside a sphere with the given radius.
   * @param radius - The radius of the sphere.
   * @returns A new Vector3 instance representing a random point inside the sphere.
   */
  static randomInSphere(radius: number): Vector3 {
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    const r = radius * Math.cbrt(Math.random());
    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);

    return new Vector3(x, y, z);
  }

  /**
   * Creates a new Vector3 instance with the specified `x`, `y`, and `z` values.
   * @param x - The x component of the vector.
   * @param y - The y component of the vector.
   * @param z - The z component of the vector.
   */
  constructor(
    public x: number,
    public y: number,
    public z: number,
  ) {}

  /**
   * Creates a copy of this Vector3 instance.
   * @returns A new Vector3 instance with the same `x`, `y`, and `z` values as this vector.
   */
  clone(): Vector3 {
    return new Vector3(this.x, this.y, this.z);
  }

  /**
   * Adds another vector to this vector and returns the result.
   * @param v - The vector to add.
   * @returns A new Vector3 instance representing the sum of this vector and the given vector.
   */
  add(v: Vector3): Vector3 {
    return new Vector3(this.x + v.x, this.y + v.y, this.z + v.z);
  }

  /**
   * Subtracts another vector from this vector and returns the result.
   * @param v - The vector to subtract.
   * @returns A new Vector3 instance representing the difference between this vector and the given vector.
   */
  sub(v: Vector3): Vector3 {
    return new Vector3(this.x - v.x, this.y - v.y, this.z - v.z);
  }

  /**
   * Multiplies this vector by another vector component-wise and returns the result.
   * @param v - The vector to multiply by.
   * @returns A new Vector3 instance representing the component-wise product of this vector and the given vector.
   */
  mult(v: Vector3): Vector3 {
    return new Vector3(this.x * v.x, this.y * v.y, this.z * v.z);
  }

  /**
   * Calculates the dot product of this vector and another vector.
   * @param v - The vector to calculate the dot product with.
   * @returns The dot product of this vector and the given vector.
   */
  dot(v: Vector3): number {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  }

  /**
   * Calculates the cross product of this vector and another vector.
   * @param v - The vector to calculate the cross product with.
   * @returns A new Vector3 instance representing the cross product of this vector and the given vector.
   */
  cross(v: Vector3): Vector3 {
    const x = this.y * v.z - this.z * v.y;
    const y = this.z * v.x - this.x * v.z;
    const z = this.x * v.y - this.y * v.x;

    return new Vector3(x, y, z);
  }

  /**
   * Scales this vector by a scalar value and returns the result.
   * @param scaler - The scalar value to scale by.
   * @returns A new Vector3 instance representing the scaled vector.
   */
  scale(scaler: number): Vector3 {
    return new Vector3(this.x * scaler, this.y * scaler, this.z * scaler);
  }

  /**
   * Limits the length of this vector to the specified value.
   * If the length of the vector is less than or equal to the specified length, the vector is returned unchanged.
   * If the length of the vector is greater than the specified length, a new vector with the same direction but the specified length is returned.
   * @param length - The maximum length of the vector.
   * @returns A new Vector3 instance with the same direction as this vector but with a length no greater than the specified length.
   */
  limitLength(length = 1): Vector3 {
    return this.length <= length ? this.clone() : this.asLength(length);
  }

  /**
   * Returns a new vector with the same direction as this vector but with the specified length.
   * @param length - The desired length of the vector.
   * @returns A new Vector3 instance with the same direction as this vector but with the specified length.
   */
  asLength(length: number): Vector3 {
    return this.normalized.scale(length);
  }

  /**
   * Calculates the distance between this vector and another vector.
   * @param v - The vector to calculate the distance to.
   * @returns The distance between this vector and the given vector.
   */
  distanceTo(v: Vector3): number {
    return Math.hypot(this.x - v.x, this.y - v.y, this.z - v.z);
  }

  /**
   * Returns the squared magnitude of this vector.
   * @returns The squared magnitude of this vector.
   */
  get squaredMagnitude(): number {
    return this.x ** 2 + this.y ** 2 + this.z ** 2;
  }

  /**
   * Returns the length (magnitude) of this vector.
   * @returns The length of this vector.
   */
  get length(): number {
    return Math.hypot(this.x, this.y, this.z);
  }

  /**
   * Returns a new vector with the same direction as this vector but with a length of 1.
   * @returns A new Vector3 instance representing the normalized vector.
   */
  get normalized(): Vector3 {
    const length = this.length;
    return new Vector3(this.x / length, this.y / length, this.z / length);
  }

  /**
   * Returns the components of this vector as a tuple of numbers.
   * @returns A tuple containing the `x`, `y`, and `z` values of this vector.
   */
  get asTuple(): [x: number, y: number, z: number] {
    return [this.x, this.y, this.z];
  }

  /**
   * Returns the components of this vector as an object with `x`, `y`, and `z` properties.
   * @returns An object containing the `x`, `y`, and `z` values of this vector.
   */
  get asObject(): { x: number; y: number; z: number } {
    return { x: this.x, y: this.y, z: this.z };
  }

  /**
   * Returns the negation of this vector.
   * @returns A new Vector3 instance representing the negation of this vector.
   */
  negate(): Vector3 {
    return new Vector3(-this.x, -this.y, -this.z);
  }

  /**
   * Rotates this vector around the x, y, and z axes by the specified angles.
   * @param angles - An object containing the rotation angles in radians for the x, y, and z axes.
   * @returns A new Vector3 instance representing the rotated vector.
   */
  rotateXYZ(angles: { x: number; y: number; z: number }): Vector3 {
    const { x, y, z } = angles;

    const cosX = Math.cos(x);
    const sinX = Math.sin(x);
    const cosY = Math.cos(y);
    const sinY = Math.sin(y);
    const cosZ = Math.cos(z);
    const sinZ = Math.sin(z);

    const rotatedX =
      this.x * (cosY * cosZ) +
      this.y * (cosX * sinZ + sinX * sinY * cosZ) +
      this.z * (sinX * sinZ - cosX * sinY * cosZ);
    const rotatedY =
      this.x * (-cosY * sinZ) +
      this.y * (cosX * cosZ - sinX * sinY * sinZ) +
      this.z * (sinX * cosZ + cosX * sinY * sinZ);
    const rotatedZ = this.x * sinY + this.y * (-sinX * cosY) + this.z * (cosX * cosY);

    return new Vector3(rotatedX, rotatedY, rotatedZ);
  }

  /**
   * Rotates this vector around the x and y axes by the specified angle.
   * @param angle - The rotation angle in radians.
   * @returns A new Vector3 instance representing the rotated vector.
   */
  rotateXY(angle: number): Vector3 {
    const cosTheta = Math.cos(angle);
    const sinTheta = Math.sin(angle);
    const rotatedX = this.x * cosTheta - this.y * sinTheta;
    const rotatedY = this.x * sinTheta + this.y * cosTheta;

    return new Vector3(rotatedX, rotatedY, this.z);
  }

  /**
   * Rotates this vector around the y and z axes by the specified angle.
   * @param angle - The rotation angle in radians.
   * @returns A new Vector3 instance representing the rotated vector.
   */
  rotateYZ(angle: number): Vector3 {
    const cosTheta = Math.cos(angle);
    const sinTheta = Math.sin(angle);
    const rotatedY = this.y * cosTheta - this.z * sinTheta;
    const rotatedZ = this.y * sinTheta + this.z * cosTheta;

    return new Vector3(this.x, rotatedY, rotatedZ);
  }

  /**
   * Rotates this vector around the z and x axes by the specified angle.
   * @param angle - The rotation angle in radians.
   * @returns A new Vector3 instance representing the rotated vector.
   */
  rotateZX(angle: number): Vector3 {
    const cosTheta = Math.cos(angle);
    const sinTheta = Math.sin(angle);
    const rotatedZ = this.z * cosTheta - this.x * sinTheta;
    const rotatedX = this.z * sinTheta + this.x * cosTheta;

    return new Vector3(rotatedX, this.y, rotatedZ);
  }

  /**
   * Rotates this vector around the specified axis by the specified angle.
   * @param axis - The axis to rotate around.
   * @param angle - The rotation angle in radians.
   * @returns A new Vector3 instance representing the rotated vector.
   */
  rotateAroundAxis(axis: Vector3, angle: number): Vector3 {
    const cosTheta = Math.cos(angle);
    const sinTheta = Math.sin(angle);
    const dot = this.dot(axis);

    const crossX = axis.y * this.z - axis.z * this.y;
    const crossY = axis.z * this.x - axis.x * this.z;
    const crossZ = axis.x * this.y - axis.y * this.x;

    const rotatedX =
      this.x * cosTheta + crossX * sinTheta + dot * (1 - cosTheta) * axis.x;
    const rotatedY =
      this.y * cosTheta + crossY * sinTheta + dot * (1 - cosTheta) * axis.y;
    const rotatedZ =
      this.z * cosTheta + crossZ * sinTheta + dot * (1 - cosTheta) * axis.z;

    return new Vector3(rotatedX, rotatedY, rotatedZ);
  }

  /**
   * Calculates the angle between this vector and another vector.
   * @param v - The vector to calculate the angle to.
   * @returns The angle between this vector and the given vector in radians.
   */
  angleBetween(v: Vector3): number {
    const dotProduct = this.dot(v);
    const magnitudes = this.length * v.length;
    return Math.acos(dotProduct / magnitudes);
  }

  /**
   * Projects this vector onto another vector.
   * @param v - The vector to project onto.
   * @returns A new Vector3 instance representing the projection of this vector onto the given vector.
   * @throws An error if the given vector has zero length.
   */
  projectOnto(v: Vector3): Vector3 {
    const dotProduct = this.dot(v);
    const magnitudeSquared = v.squaredMagnitude;

    if (magnitudeSquared === 0) {
      throw new Error('Cannot project onto a zero-length vector.');
    }

    const scalar = dotProduct / magnitudeSquared;
    return v.scale(scalar);
  }

  /**
   * Calculates the midpoint between this vector and another vector.
   * @param v - The vector to calculate the midpoint with.
   * @returns A new Vector3 instance representing the midpoint between this vector and the given vector.
   */
  midpoint(v: Vector3): Vector3 {
    return new Vector3((this.x + v.x) / 2, (this.y + v.y) / 2, (this.z + v.z) / 2);
  }
}
