import { Shape } from './Shape';

export class Torus extends Shape {
  constructor(
    private majorRadius: number,
    private minorRadius: number,
    private center: { x: number; y: number; z: number },
  ) {
    super();
  }

  isPointInside(x: number, y: number, z: number): boolean {
    const distanceToAxis = Math.sqrt((x - this.center.x) ** 2 + (y - this.center.y) ** 2);
    return (
      distanceToAxis >= this.majorRadius - this.minorRadius &&
      distanceToAxis <= this.majorRadius + this.minorRadius &&
      Math.abs(z - this.center.z) <= this.minorRadius
    );
  }
}
