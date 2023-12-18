import { Shape } from './Shape';

export class HexagonalPrism extends Shape {
  constructor(
    private sideLength: number,
    private height: number,
    private center: { x: number; y: number; z: number },
  ) {
    super();
  }

  isPointInside(x: number, y: number, z: number): boolean {
    const halfSide = this.sideLength / 2;
    const top = this.center.z + this.height / 2;
    const bottom = this.center.z - this.height / 2;
    const baseXLimit = this.center.x + halfSide;
    const baseYLimit = this.center.y + halfSide;
    const baseX = Math.abs(x - this.center.x);
    const baseY = Math.abs(y - this.center.y);
    return (
      z >= bottom &&
      z <= top &&
      baseX <= halfSide &&
      baseY <= halfSide &&
      ((baseX + baseY) * Math.sqrt(3)) / 2 <= halfSide
    );
  }
}
