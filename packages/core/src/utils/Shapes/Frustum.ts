import { Shape } from './Shape';

export class Frustum extends Shape {
  constructor(
    private near: number,
    private far: number,
    private left: number,
    private right: number,
    private top: number,
    private bottom: number,
    private center: { x: number; y: number; z: number },
  ) {
    super();
  }

  isPointInside(x: number, y: number, z: number): boolean {
    const halfNear = this.near / 2;
    const halfFar = this.far / 2;

    if (
      x >= this.center.x - halfNear &&
      x <= this.center.x + halfNear &&
      y >= this.center.y - halfNear &&
      y <= this.center.y + halfNear &&
      z >= this.center.z - halfNear &&
      z <= this.center.z + halfFar
    ) {
      return true;
    }

    return false;
  }
}
