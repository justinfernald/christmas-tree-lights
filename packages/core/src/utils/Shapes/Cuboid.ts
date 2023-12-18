import { Shape } from './Shape';

export class Cuboid extends Shape {
  constructor(
    private lengthX: number,
    private lengthY: number,
    private lengthZ: number,
    private center: { x: number; y: number; z: number },
  ) {
    super();
  }

  isPointInside(x: number, y: number, z: number): boolean {
    const halfX = this.lengthX / 2;
    const halfY = this.lengthY / 2;
    const halfZ = this.lengthZ / 2;
    return (
      x >= this.center.x - halfX &&
      x <= this.center.x + halfX &&
      y >= this.center.y - halfY &&
      y <= this.center.y + halfY &&
      z >= this.center.z - halfZ &&
      z <= this.center.z + halfZ
    );
  }
}
