import { Color } from './Color';
import { Vector3 } from './Vector3';

export interface LightDTO {
  location: [number, number, number];
  color: number;
}

/**
 * Represents a light source.
 */
export class Light {
  _location: Vector3;
  color: Color;

  /**
   * Location of the light.
   * x: 0 to 1
   * y: 0 to 1
   * z: 0 to 1 (0 is bottom of tree, 1 is top of tree)
   */
  get location() {
    return new Vector3(this._location.x, this._location.y, 1 - this._location.z);
  }

  /**
   * Location of the light with z scaled by 1.74.
   * x: 0 to 1
   * y: 0 to 1
   * z: 0 to 1.74 (0 is bottom of tree, 1.74 is top of tree)
   */
  get locationScaled() {
    return this.location.mult(new Vector3(1, 1, 1.74));
  }

  /**
   * Location of the light with origin at the center of the tree.
   * x: -0.5 to 0.5
   * y: -0.5 to 0.5
   * z: -0.5 to 0.5 (-0.5 is bottom of tree, 0.5 is top of tree)
   */
  get locationOriginCenter() {
    return this.location.sub(new Vector3(0.5, 0.5, 0.5));
  }

  /**
   * Location of the light with origin at the center of the tree and z scaled by 1.74.
   * x: -0.5 to 0.5
   * y: -0.5 to 0.5
   * z: -0.87 to 0.87 (-0.87 is bottom of tree, 0.87 is top of tree)
   */
  get locationOriginCenterScaled() {
    return this.locationOriginCenter.mult(new Vector3(1, 1, 1.74));
  }

  /**
   * Location of the light with origin at the center of the tree for x and y, and bottom of the tree.
   * x: -0.5 to 0.5
   * y: -0.5 to 0.5
   * z: 0 to 1 (0 is bottom of tree, 1 is top of tree)
   */
  get locationOriginCenterBottom() {
    return this.location.sub(new Vector3(0.5, 0.5, 0));
  }

  /**
   * Location of the light with origin at the center of the tree for x and y, and bottom of the tree.
   * x: -0.5 to 0.5
   * y: -0.5 to 0.5
   * z: 0 to 1.74 (0 is bottom of tree, 1.74 is top of tree)
   */
  get locationOriginCenterBottomScaled() {
    return this.locationOriginCenterBottom.mult(new Vector3(1, 1, 1.74));
  }

  /**
   * Updates the light's color based on the specified parameters.
   *
   * @param timeMs - The current time in milliseconds.
   * @param deltaMs - The time difference in milliseconds since the last update.
   * @param iteration - The current iteration count.
   * @returns The updated color of the light, or void if no color update is needed.
   */
  update?: (timeMs: number, deltaMs: number | null, iteration: number) => Color | void;

  constructor(location: Vector3, color: Color) {
    this._location = location;
    this.color = color;
  }

  /**
   * Converts the Light object to a Data Transfer Object (DTO).
   * @returns The DTO representation of the Light object.
   */
  toDto(): LightDTO {
    return {
      location: this._location.asTuple,
      color: this.color.toInt(),
    };
  }

  /**
   * Creates a Light instance from a data transfer object (DTO).
   * @param dto - The DTO containing the location and color information.
   * @returns A new Light instance.
   */
  static fromDto(dto: LightDTO) {
    return new Light(Vector3.fromTuple(dto.location), Color.fromInt(dto.color));
  }
}
