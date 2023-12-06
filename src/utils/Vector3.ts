export class Vector3 {
    static fromObject(obj: { x: number; y: number; z: number }): Vector3 {
        return new Vector3(obj.x, obj.y, obj.z);
    }

    static zero(): Vector3 {
        return new Vector3(0, 0, 0);
    }

    static forward(): Vector3 {
        return new Vector3(0, 0, 1);
    }

    static backward(): Vector3 {
        return new Vector3(0, 0, -1);
    }

    static up(): Vector3 {
        return new Vector3(0, 1, 0);
    }

    static down(): Vector3 {
        return new Vector3(0, -1, 0);
    }

    static left(): Vector3 {
        return new Vector3(-1, 0, 0);
    }

    static right(): Vector3 {
        return new Vector3(1, 0, 0);
    }

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

    constructor(public x: number, public y: number, public z: number) {}

    clone(): Vector3 {
        return new Vector3(this.x, this.y, this.z);
    }

    add(v: Vector3): Vector3 {
        return new Vector3(this.x + v.x, this.y + v.y, this.z + v.z);
    }

    sub(v: Vector3): Vector3 {
        return new Vector3(this.x - v.x, this.y - v.y, this.z - v.z);
    }

    mult(v: Vector3): Vector3 {
        return new Vector3(this.x * v.x, this.y * v.y, this.z * v.z);
    }

    dot(v: Vector3): number {
        return this.x * v.x + this.y * v.y + this.z * v.z;
    }

    cross(v: Vector3): Vector3 {
        const x = this.y * v.z - this.z * v.y;
        const y = this.z * v.x - this.x * v.z;
        const z = this.x * v.y - this.y * v.x;

        return new Vector3(x, y, z);
    }

    scale(scaler: number): Vector3 {
        return new Vector3(this.x * scaler, this.y * scaler, this.z * scaler);
    }

    limitLength(length = 1): Vector3 {
        return this.length <= length ? this.clone() : this.asLength(length);
    }

    asLength(length: number): Vector3 {
        return this.normalized.scale(length);
    }

    get squaredMagnitude(): number {
        return this.x ** 2 + this.y ** 2 + this.z ** 2;
    }

    get length(): number {
        return Math.hypot(this.x, this.y, this.z);
    }

    get normalized(): Vector3 {
        const length = this.length;
        return new Vector3(this.x / length, this.y / length, this.z / length);
    }

    get asTuple(): [x: number, y: number, z: number] {
        return [this.x, this.y, this.z];
    }

    get asObject(): { x: number; y: number; z: number } {
        return { x: this.x, y: this.y, z: this.z };
    }

    negate(): Vector3 {
        return new Vector3(-this.x, -this.y, -this.z);
    }

    /** In radians */
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
        const rotatedZ =
            this.x * sinY + this.y * (-sinX * cosY) + this.z * (cosX * cosY);

        return new Vector3(rotatedX, rotatedY, rotatedZ);
    }

    /** In radians */
    rotateXY(angle: number): Vector3 {
        const cosTheta = Math.cos(angle);
        const sinTheta = Math.sin(angle);
        const rotatedX = this.x * cosTheta - this.y * sinTheta;
        const rotatedY = this.x * sinTheta + this.y * cosTheta;

        return new Vector3(rotatedX, rotatedY, this.z);
    }

    /** In radians */
    rotateYZ(angle: number): Vector3 {
        const cosTheta = Math.cos(angle);
        const sinTheta = Math.sin(angle);
        const rotatedY = this.y * cosTheta - this.z * sinTheta;
        const rotatedZ = this.y * sinTheta + this.z * cosTheta;

        return new Vector3(this.x, rotatedY, rotatedZ);
    }

    /** In radians */
    rotateZX(angle: number): Vector3 {
        const cosTheta = Math.cos(angle);
        const sinTheta = Math.sin(angle);
        const rotatedZ = this.z * cosTheta - this.x * sinTheta;
        const rotatedX = this.z * sinTheta + this.x * cosTheta;

        return new Vector3(rotatedX, this.y, rotatedZ);
    }

    /** In radians */
    rotateAroundAxis(axis: Vector3, angle: number): Vector3 {
        const cosTheta = Math.cos(angle);
        const sinTheta = Math.sin(angle);
        const dot = this.dot(axis);

        const crossX = axis.y * this.z - axis.z * this.y;
        const crossY = axis.z * this.x - axis.x * this.z;
        const crossZ = axis.x * this.y - axis.y * this.x;

        const rotatedX =
            this.x * cosTheta +
            crossX * sinTheta +
            dot * (1 - cosTheta) * axis.x;
        const rotatedY =
            this.y * cosTheta +
            crossY * sinTheta +
            dot * (1 - cosTheta) * axis.y;
        const rotatedZ =
            this.z * cosTheta +
            crossZ * sinTheta +
            dot * (1 - cosTheta) * axis.z;

        return new Vector3(rotatedX, rotatedY, rotatedZ);
    }

    angleBetween(v: Vector3): number {
        const dotProduct = this.dot(v);
        const magnitudes = this.length * v.length;
        return Math.acos(dotProduct / magnitudes);
    }

    projectOnto(v: Vector3): Vector3 {
        const dotProduct = this.dot(v);
        const magnitudeSquared = v.squaredMagnitude;

        if (magnitudeSquared === 0) {
            throw new Error("Cannot project onto a zero-length vector.");
        }

        const scalar = dotProduct / magnitudeSquared;
        return v.scale(scalar);
    }

    midpoint(v: Vector3): Vector3 {
        return new Vector3(
            (this.x + v.x) / 2,
            (this.y + v.y) / 2,
            (this.z + v.z) / 2
        );
    }
}
