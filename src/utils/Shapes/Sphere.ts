import { Shape } from './Shape';

export class Sphere extends Shape {
  constructor(
    private radius: number,
    private center: { x: number; y: number; z: number },
  ) {
    super();
  }

  isPointInside(x: number, y: number, z: number): boolean {
    const distance = Math.sqrt(
      (x - this.center.x) ** 2 + (y - this.center.y) ** 2 + (z - this.center.z) ** 2,
    );
    return distance <= this.radius;
  }
}
