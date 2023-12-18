import { Shape } from './Shape';

export class CylinderWithEllipticalBase extends Shape {
  constructor(
    private majorRadius: number,
    private minorRadius: number,
    private height: number,
    private center: { x: number; y: number; z: number },
  ) {
    super();
  }

  isPointInside(x: number, y: number, z: number): boolean {
    const distanceToAxis = Math.sqrt((x - this.center.x) ** 2 + (y - this.center.y) ** 2);
    return (
      distanceToAxis <= this.majorRadius &&
      z >= this.center.z - this.height / 2 &&
      z <= this.center.z + this.height / 2 &&
      Math.sqrt(
        (x - this.center.x) ** 2 / this.majorRadius ** 2 +
          (y - this.center.y) ** 2 / this.minorRadius ** 2,
      ) <= 1
    );
  }
}
