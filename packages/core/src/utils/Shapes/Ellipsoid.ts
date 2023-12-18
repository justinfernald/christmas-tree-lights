import { Shape } from './Shape';

export class Ellipsoid extends Shape {
  constructor(
    private semiAxisX: number,
    private semiAxisY: number,
    private semiAxisZ: number,
    private center: { x: number; y: number; z: number },
  ) {
    super();
  }

  isPointInside(x: number, y: number, z: number): boolean {
    const normalizedX = (x - this.center.x) / this.semiAxisX;
    const normalizedY = (y - this.center.y) / this.semiAxisY;
    const normalizedZ = (z - this.center.z) / this.semiAxisZ;
    return normalizedX ** 2 + normalizedY ** 2 + normalizedZ ** 2 <= 1;
  }
}
