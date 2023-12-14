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

### Methods

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

[utils/Color.ts:13](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/Color.ts#L13)

## Properties

### blue

• **blue**: `number`

The blue component of the color (0 to 255).

#### Defined in

[utils/Color.ts:16](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/Color.ts#L16)

___

### green

• **green**: `number`

The green component of the color (0 to 255).

#### Defined in

[utils/Color.ts:15](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/Color.ts#L15)

___

### red

• **red**: `number`

The red component of the color (0 to 255).

#### Defined in

[utils/Color.ts:14](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/Color.ts#L14)

## Methods

### toInt

▸ **toInt**(): `number`

Returns the color as a 32-bit integer.

#### Returns

`number`

The color as an integer.

#### Defined in

[utils/Color.ts:31](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/Color.ts#L31)

___

### toString

▸ **toString**(): `string`

Returns the color as a string in the format "rgb(red, green, blue)".

#### Returns

`string`

The color as a string.

#### Defined in

[utils/Color.ts:23](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/Color.ts#L23)

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

[utils/Color.ts:88](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/Color.ts#L88)

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

[utils/Color.ts:52](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/Color.ts#L52)

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

[utils/Color.ts:40](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/Color.ts#L40)

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

[utils/Color.ts:73](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/Color.ts#L73)
