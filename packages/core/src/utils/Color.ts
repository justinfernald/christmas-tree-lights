import { clamp } from '.';

/**
 * Enum representing different blend modes for colors.
 */
export enum BlendMode {
  Normal,
  Multiply,
  Screen,
  Overlay,
  Darken,
  Lighten,
  ColorDodge,
  ColorBurn,
  HardLight,
  SoftLight,
  Difference,
  Exclusion,
  Gamma,
}

/**
 * Represents a color in RGB format.
 */
export class Color {
  private static blendFuncs = {
    [BlendMode.Normal]: (a: number, b: number) => b,
    [BlendMode.Multiply]: (a: number, b: number) => a * b,
    [BlendMode.Screen]: (a: number, b: number) => a + b - a * b,
    [BlendMode.Overlay]: (a: number, b: number) =>
      a < 0.5 ? 2 * a * b : 1 - 2 * (1 - a) * (1 - b),
    [BlendMode.Darken]: (a: number, b: number) => Math.min(a, b),
    [BlendMode.Lighten]: (a: number, b: number) => Math.max(a, b),
    [BlendMode.ColorDodge]: (a: number, b: number) =>
      b === 1 ? 1 : Math.min(1, a / (1 - b)),
    [BlendMode.ColorBurn]: (a: number, b: number) =>
      b === 0 ? 0 : 1 - Math.min(1, (1 - a) / b),
    [BlendMode.HardLight]: (a: number, b: number) =>
      b < 0.5 ? 2 * a * b : 1 - 2 * (1 - a) * (1 - b),
    [BlendMode.SoftLight]: (a: number, b: number) =>
      b < 0.5
        ? 2 * a * b + a * a * (1 - 2 * b)
        : Math.sqrt(a) * (2 * b - 1) + 2 * a * (1 - b),
    [BlendMode.Difference]: (a: number, b: number) => Math.abs(a - b),
    [BlendMode.Exclusion]: (a: number, b: number) => a + b - 2 * a * b,
    [BlendMode.Gamma]: (a: number, b: number) => ((a ** 2.2 + b ** 2.2) / 2) ** (1 / 2.2),
  };

  /**
   * Creates a new Color instance.
   * @param red The red component of the color (0 to 255).
   * @param green The green component of the color (0 to 255).
   * @param blue The blue component of the color (0 to 255).
   */
  constructor(
    public red: number,
    public green: number,
    public blue: number,
  ) {}

  private blendChannel(
    c1: number,
    c2: number,
    blendFunc: (a: number, b: number) => number,
  ): number {
    return clamp(Math.round(blendFunc(c1 / 255, c2 / 255) * 255), 0, 255);
  }

  /**
   * Blends the color with another color.
   * @param color The color to blend with.
   * @param mode The blend mode to use.
   * @returns A new Color instance.
   */
  blend(color: Color, mode: BlendMode = BlendMode.Lighten): Color {
    const blendFunc = Color.blendFuncs[mode];

    return new Color(
      this.blendChannel(this.red, color.red, blendFunc),
      this.blendChannel(this.green, color.green, blendFunc),
      this.blendChannel(this.blue, color.blue, blendFunc),
    );
  }

  /**
   * Converts the RGB color values to HSL (Hue, Saturation, Lightness) format.
   * @returns An array containing the HSL values [Hue, Saturation, Lightness].
   */
  toHSL(): [h: number, s: number, l: number] {
    const r = this.red / 255;
    const g = this.green / 255;
    const b = this.blue / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);

    let h = (max + min) / 2;
    let s = h;
    const l = h;

    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;

      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;

        case g:
          h = (b - r) / d + 2;
          break;

        case b:
          h = (r - g) / d + 4;
          break;

        default:
          break;
      }

      h /= 6;
    }

    return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
  }

  /**
   * Returns the complementary color of the current color.
   * The complementary color is obtained by adding 180 degrees to the hue value of the current color.
   * @returns {Color} The complementary color.
   */
  complementary(): Color {
    const [h, s, l] = this.toHSL();
    return Color.fromHSL((h + 180) % 360, s, l);
  }

  /**
   * Returns a new color with the specified intensity.
   * @param amount The intensity of the new color (0 to 1).
   * @returns A new Color instance.
   */
  intensity(amount: number): Color {
    return new Color(
      clamp(Math.round(this.red * amount), 0, 255),
      clamp(Math.round(this.green * amount), 0, 255),
      clamp(Math.round(this.blue * amount), 0, 255),
    );
  }

  /**
   * Returns the color as a string in the format "rgb(red, green, blue)".
   * @returns The color as a string.
   */
  toString(): string {
    return `rgb(${this.red}, ${this.green}, ${this.blue})`;
  }

  /**
   * Returns the color as a 32-bit integer.
   * @returns The color as an integer.
   */
  toInt(): number {
    return ((this.red & 0xff) << 16) | ((this.green & 0xff) << 8) | (this.blue & 0xff);
  }

  /**
   * Creates a new Color instance from a 32-bit integer.
   * @param int The integer representing the color.
   * @returns A new Color instance.
   */
  static fromInt(int: number): Color {
    int = clamp(int, 0, 0xffffff);

    return new Color((int >> 16) & 0xff, (int >> 8) & 0xff, int & 0xff);
  }

  /**
   * Creates a new Color instance from a hexadecimal color string.
   * @param hex The hexadecimal color string (e.g., "#ff0000").
   * @returns A new Color instance.
   * @throws Error if the hex color string is invalid.
   */
  static fromHex(hex: string): Color {
    const match = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);

    if (!match) {
      throw new Error(`Invalid hex color: ${hex}`);
    }

    return new Color(
      parseInt(match[1], 16),
      parseInt(match[2], 16),
      parseInt(match[3], 16),
    );
  }

  /**
   * Creates a new Color instance from RGB components.
   * @param r The red component of the color (0 to 255).
   * @param g The green component of the color (0 to 255).
   * @param b The blue component of the color (0 to 255).
   * @returns A new Color instance.
   */
  static fromRGB(r: number, g: number, b: number): Color {
    r = clamp(r, 0, 255);
    g = clamp(g, 0, 255);
    b = clamp(b, 0, 255);

    return new Color(r, g, b);
  }

  /**
   * Creates a new Color instance from HSL components.
   * @param h The hue component of the color (0 to 360).
   * @param s The saturation component of the color (0 to 100).
   * @param l The lightness component of the color (0 to 100).
   * @returns A new Color instance.
   */
  static fromHSL(h: number, s: number, l: number): Color {
    h = clamp(h, 0, 360);
    s = clamp(s, 0, 100);
    l = clamp(l, 0, 100);

    h /= 360;
    s /= 100;
    l /= 100;

    let r, g, b;

    if (s === 0) {
      r = g = b = l;
    } else {
      const hue2rgb = (p: number, q: number, t: number) => {
        if (t < 0) {
          t += 1;
        }

        if (t > 1) {
          t -= 1;
        }

        if (t < 1 / 6) {
          return p + (q - p) * 6 * t;
        }

        if (t < 1 / 2) {
          return q;
        }

        if (t < 2 / 3) {
          return p + (q - p) * (2 / 3 - t) * 6;
        }

        return p;
      };

      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;

      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }

    return new Color(Math.round(r * 255), Math.round(g * 255), Math.round(b * 255));
  }
}

/**
 * Predefined colors
 */
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
