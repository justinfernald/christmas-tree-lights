import { Shape } from './Shape';

export class Cube extends Shape {
  constructor(
    private sideLength: number,
    private center: { x: number; y: number; z: number },
  ) {
    super();
  }

  isPointInside(x: number, y: number, z: number): boolean {
    const halfSide = this.sideLength / 2;
    return (
      Math.abs(x - this.center.x) <= halfSide &&
      Math.abs(y - this.center.y) <= halfSide &&
      Math.abs(z - this.center.z) <= halfSide
    );
  }
}
