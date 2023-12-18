import { Shape } from './Shape';

export class Pyramid extends Shape {
  constructor(
    private baseLength: number,
    private height: number,
    private center: { x: number; y: number; z: number },
  ) {
    super();
  }

  isPointInside(x: number, y: number, z: number): boolean {
    const halfBaseLength = this.baseLength / 2;
    const top = this.center.z + this.height / 2;
    const bottom = this.center.z - this.height / 2;
    const baseXLimit = this.center.x + halfBaseLength;
    const baseYLimit = this.center.y + halfBaseLength;

    if (
      z > top ||
      z < bottom ||
      x > baseXLimit ||
      x < this.center.x - halfBaseLength ||
      y > baseYLimit ||
      y < this.center.y - halfBaseLength
    ) {
      return false;
    }

    return true;
  }
}
