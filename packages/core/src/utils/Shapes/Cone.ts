import { Shape } from './Shape';

export class Cone extends Shape {
  constructor(
    private radius: number,
    private height: number,
    private center: { x: number; y: number; z: number },
  ) {
    super();
  }

  isPointInside(x: number, y: number, z: number): boolean {
    const distanceToAxis = Math.sqrt((x - this.center.x) ** 2 + (y - this.center.y) ** 2);
    const slope = this.radius / this.height;
    const coneRadiusAtZ = slope * (z - this.center.z) + this.radius;
    return (
      distanceToAxis <= coneRadiusAtZ &&
      z >= this.center.z - this.height / 2 &&
      z <= this.center.z + this.height / 2
    );
  }
}
