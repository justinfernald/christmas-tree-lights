import { Color } from "./Color";
import { Vector3 } from "./Vector3";

export class Light {
    location: Vector3;
    color: Color;

    update?: (
        timeMs: number,
        deltaMs: number | null,
        iteration: number
    ) => Color | void;

    constructor(location: Vector3, color: Color) {
        this.location = location;
        this.color = color;
    }
}
