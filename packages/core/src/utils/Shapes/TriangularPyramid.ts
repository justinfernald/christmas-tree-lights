import { Shape } from './Shape';

export class TriangularPyramid extends Shape {
  constructor(
    private baseLength: number,
    private height: number,
    private center: { x: number; y: number; z: number },
  ) {
    super();
  }

  isPointInside(x: number, y: number, z: number): boolean {
    const halfBase = this.baseLength / 2;
    const top = this.center.z + this.height / 2;
    const bottom = this.center.z - this.height / 2;
    const baseXLimit = this.center.x + halfBase;
    const baseYLimit = this.center.y + halfBase;
    return (
      z >= bottom &&
      z <= top &&
      x >= this.center.x - halfBase &&
      x <= baseXLimit &&
      y >= this.center.y - halfBase &&
      y <= baseYLimit
    );
  }
}
