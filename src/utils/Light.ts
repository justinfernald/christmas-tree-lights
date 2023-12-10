import { Color } from './Color';
import { Vector3 } from './Vector3';

export class Light {
  location: Vector3;
  color: Color;

  update?: (timeMs: number, deltaMs: number | null, iteration: number) => Color | void;

  constructor(location: Vector3, color: Color) {
    this.location = location;
    this.color = color;
  }

  toDto() {
    return {
      location: this.location.asTuple,
      color: this.color.toInt(),
    };
  }

  static fromDto(dto: { location: [number, number, number]; color: number }) {
    return new Light(Vector3.fromTuple(dto.location), Color.fromInt(dto.color));
  }
}
