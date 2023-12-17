[christmas-tree](../README.md) / [Exports](../modules.md) / Color

# Class: Color

Represents a color in RGB format.

## Table of contents

### Constructors

- [constructor](Color.md#constructor)

### Properties

- [blue](Color.md#blue)
- [green](Color.md#green)
- [red](Color.md#red)
- [blendFuncs](Color.md#blendfuncs)

### Methods

- [blend](Color.md#blend)
- [blendChannel](Color.md#blendchannel)
- [complementary](Color.md#complementary)
- [intensity](Color.md#intensity)
- [toHSL](Color.md#tohsl)
- [toInt](Color.md#toint)
- [toString](Color.md#tostring)
- [fromHSL](Color.md#fromhsl)
- [fromHex](Color.md#fromhex)
- [fromInt](Color.md#fromint)
- [fromRGB](Color.md#fromrgb)

## Constructors

### constructor

• **new Color**(`red`, `green`, `blue`): [`Color`](Color.md)

Creates a new Color instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `red` | `number` | The red component of the color (0 to 255). |
| `green` | `number` | The green component of the color (0 to 255). |
| `blue` | `number` | The blue component of the color (0 to 255). |

#### Returns

[`Color`](Color.md)

#### Defined in

[utils/Color.ts:55](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Color.ts#L55)

## Properties

### blue

• **blue**: `number`

The blue component of the color (0 to 255).

#### Defined in

[utils/Color.ts:58](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Color.ts#L58)

___

### green

• **green**: `number`

The green component of the color (0 to 255).

#### Defined in

[utils/Color.ts:57](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Color.ts#L57)

___

### red

• **red**: `number`

The red component of the color (0 to 255).

#### Defined in

[utils/Color.ts:56](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Color.ts#L56)

___

### blendFuncs

▪ `Static` `Private` **blendFuncs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `0` | (`a`: `number`, `b`: `number`) => `number` |
| `1` | (`a`: `number`, `b`: `number`) => `number` |
| `10` | (`a`: `number`, `b`: `number`) => `number` |
| `11` | (`a`: `number`, `b`: `number`) => `number` |
| `12` | (`a`: `number`, `b`: `number`) => `number` |
| `2` | (`a`: `number`, `b`: `number`) => `number` |
| `3` | (`a`: `number`, `b`: `number`) => `number` |
| `4` | (`a`: `number`, `b`: `number`) => `number` |
| `5` | (`a`: `number`, `b`: `number`) => `number` |
| `6` | (`a`: `number`, `b`: `number`) => `number` |
| `7` | (`a`: `number`, `b`: `number`) => `number` |
| `8` | (`a`: `number`, `b`: `number`) => `number` |
| `9` | (`a`: `number`, `b`: `number`) => `number` |

#### Defined in

[utils/Color.ts:26](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Color.ts#L26)

## Methods

### blend

▸ **blend**(`color`, `mode?`): [`Color`](Color.md)

Blends the color with another color.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `color` | [`Color`](Color.md) | `undefined` | The color to blend with. |
| `mode` | [`BlendMode`](../enums/BlendMode.md) | `BlendMode.Lighten` | The blend mode to use. |

#### Returns

[`Color`](Color.md)

A new Color instance.

#### Defined in

[utils/Color.ts:75](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Color.ts#L75)

___

### blendChannel

▸ **blendChannel**(`c1`, `c2`, `blendFunc`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c1` | `number` |
| `c2` | `number` |
| `blendFunc` | (`a`: `number`, `b`: `number`) => `number` |

#### Returns

`number`

#### Defined in

[utils/Color.ts:61](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Color.ts#L61)

___

### complementary

▸ **complementary**(): [`Color`](Color.md)

Returns the complementary color of the current color.
The complementary color is obtained by adding 180 degrees to the hue value of the current color.

#### Returns

[`Color`](Color.md)

The complementary color.

#### Defined in

[utils/Color.ts:136](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Color.ts#L136)

___

### intensity

▸ **intensity**(`amount`): [`Color`](Color.md)

Returns a new color with the specified intensity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `number` | The intensity of the new color (0 to 1). |

#### Returns

[`Color`](Color.md)

A new Color instance.

#### Defined in

[utils/Color.ts:146](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Color.ts#L146)

___

### toHSL

▸ **toHSL**(): [h: number, s: number, l: number]

Converts the RGB color values to HSL (Hue, Saturation, Lightness) format.

#### Returns

[h: number, s: number, l: number]

An array containing the HSL values [Hue, Saturation, Lightness].

#### Defined in

[utils/Color.ts:89](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Color.ts#L89)

___

### toInt

▸ **toInt**(): `number`

Returns the color as a 32-bit integer.

#### Returns

`number`

The color as an integer.

#### Defined in

[utils/Color.ts:166](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Color.ts#L166)

___

### toString

▸ **toString**(): `string`

Returns the color as a string in the format "rgb(red, green, blue)".

#### Returns

`string`

The color as a string.

#### Defined in

[utils/Color.ts:158](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Color.ts#L158)

___

### fromHSL

▸ **fromHSL**(`h`, `s`, `l`): [`Color`](Color.md)

Creates a new Color instance from HSL components.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `h` | `number` | The hue component of the color (0 to 360). |
| `s` | `number` | The saturation component of the color (0 to 100). |
| `l` | `number` | The lightness component of the color (0 to 100). |

#### Returns

[`Color`](Color.md)

A new Color instance.

#### Defined in

[utils/Color.ts:223](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Color.ts#L223)

___

### fromHex

▸ **fromHex**(`hex`): [`Color`](Color.md)

Creates a new Color instance from a hexadecimal color string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hex` | `string` | The hexadecimal color string (e.g., "#ff0000"). |

#### Returns

[`Color`](Color.md)

A new Color instance.

**`Throws`**

Error if the hex color string is invalid.

#### Defined in

[utils/Color.ts:187](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Color.ts#L187)

___

### fromInt

▸ **fromInt**(`int`): [`Color`](Color.md)

Creates a new Color instance from a 32-bit integer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `int` | `number` | The integer representing the color. |

#### Returns

[`Color`](Color.md)

A new Color instance.

#### Defined in

[utils/Color.ts:175](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Color.ts#L175)

___

### fromRGB

▸ **fromRGB**(`r`, `g`, `b`): [`Color`](Color.md)

Creates a new Color instance from RGB components.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `r` | `number` | The red component of the color (0 to 255). |
| `g` | `number` | The green component of the color (0 to 255). |
| `b` | `number` | The blue component of the color (0 to 255). |

#### Returns

[`Color`](Color.md)

A new Color instance.

#### Defined in

[utils/Color.ts:208](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Color.ts#L208)
