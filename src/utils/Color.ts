export class Color {
    constructor(
        public red: number,
        public green: number,
        public blue: number
    ) {}

    toString(): string {
        return `rgb(${this.red}, ${this.green}, ${this.blue})`;
    }

    toInt(): number {
        return (
            ((this.red & 0xff) << 16) |
            ((this.green & 0xff) << 8) |
            (this.blue & 0xff)
        );
    }

    static fromInt(int: number): Color {
        return new Color((int >> 16) & 0xff, (int >> 8) & 0xff, int & 0xff);
    }

    static fromHex(hex: string): Color {
        const match = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);

        if (!match) {
            throw new Error(`Invalid hex color: ${hex}`);
        }

        return new Color(
            parseInt(match[1], 16),
            parseInt(match[2], 16),
            parseInt(match[3], 16)
        );
    }

    static fromHSL(h: number, s: number, l: number): Color {
        let r: number, g: number, b: number;

        if (s == 0) {
            r = g = b = l;
        } else {
            const hue2rgb = (p: number, q: number, t: number): number => {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1 / 6) return p + (q - p) * 6 * t;
                if (t < 1 / 2) return q;
                if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            };

            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
        }

        return new Color(
            Math.round(r * 255),
            Math.round(g * 255),
            Math.round(b * 255)
        );
    }
}

export const colors = {
    red: new Color(255, 0, 0),
    green: new Color(0, 255, 0),
    blue: new Color(0, 0, 255),
    orange: new Color(255, 165, 0),
    yellow: new Color(255, 255, 0),
    purple: new Color(128, 0, 128),
    pink: new Color(255, 20, 147),
    white: new Color(255, 255, 255),
    black: new Color(0, 0, 0),
    gray: new Color(128, 128, 128),
    brown: new Color(165, 42, 42),
    cyan: new Color(0, 255, 255),
    darkGreen: new Color(0, 128, 0),
    darkBlue: new Color(0, 0, 128),
    darkOrange: new Color(255, 140, 0),
    darkYellow: new Color(128, 128, 0),
    darkPurple: new Color(75, 0, 130),
    darkPink: new Color(255, 105, 180),
    darkGray: new Color(64, 64, 64),
    darkBrown: new Color(139, 69, 19),
    darkCyan: new Color(0, 128, 128),
};
