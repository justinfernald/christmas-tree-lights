import { Shape } from './Shape';

export class Octahedron extends Shape {
  constructor(
    private edgeLength: number,
    private center: { x: number; y: number; z: number },
  ) {
    super();
  }

  isPointInside(x: number, y: number, z: number): boolean {
    const halfEdge = this.edgeLength / 2;
    const top = this.center.z + halfEdge;
    const bottom = this.center.z - halfEdge;
    const baseXLimit = this.center.x + halfEdge;
    const baseYLimit = this.center.y + halfEdge;
    const baseX = Math.abs(x - this.center.x);
    const baseY = Math.abs(y - this.center.y);
    return (
      z >= bottom && z <= top && baseX + baseY + Math.abs(z - this.center.z) <= halfEdge
    );
  }
}
