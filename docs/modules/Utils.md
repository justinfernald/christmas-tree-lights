[christmas-tree](../README.md) / [Exports](../modules.md) / Utils

# Namespace: Utils

## Table of contents

### Variables

- [DEG\_TO\_RAD](Utils.md#deg_to_rad)
- [RAD\_TO\_DEG](Utils.md#rad_to_deg)

### Functions

- [angleDifference](Utils.md#angledifference)
- [clamp](Utils.md#clamp)
- [debounce](Utils.md#debounce)
- [lerp](Utils.md#lerp)
- [lerpAngle](Utils.md#lerpangle)
- [mod](Utils.md#mod)
- [normalizeWithinRange](Utils.md#normalizewithinrange)
- [perlinNoise](Utils.md#perlinnoise)
- [random](Utils.md#random)
- [randomBool](Utils.md#randombool)
- [randomChoice](Utils.md#randomchoice)
- [randomColorByHue](Utils.md#randomcolorbyhue)
- [randomInCircle](Utils.md#randomincircle)
- [randomInt](Utils.md#randomint)
- [randomOnCircle](Utils.md#randomoncircle)
- [randomSign](Utils.md#randomsign)
- [shuffle](Utils.md#shuffle)
- [shuffleInPlace](Utils.md#shuffleinplace)
- [sleep](Utils.md#sleep)

## Variables

### DEG\_TO\_RAD

• `Const` **DEG\_TO\_RAD**: `number`

#### Defined in

[utils/index.ts:4](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/index.ts#L4)

___

### RAD\_TO\_DEG

• `Const` **RAD\_TO\_DEG**: `number`

#### Defined in

[utils/index.ts:3](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/index.ts#L3)

## Functions

### angleDifference

▸ **angleDifference**(`a`, `b`): `number`

Returns the difference between two angles in degrees.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | degrees |
| `b` | `number` | degrees |

#### Returns

`number`

degrees

#### Defined in

[utils/index.ts:109](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/index.ts#L109)

___

### clamp

▸ **clamp**(`value`, `min`, `max`): `number`

Clamps a number between a minimum and maximum value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` |  |
| `min` | `number` | minimum value |
| `max` | `number` | maximum value |

#### Returns

`number`

#### Defined in

[utils/index.ts:52](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/index.ts#L52)

___

### debounce

▸ **debounce**\<`F`\>(`func`, `waitFor`): `F`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends (...`args`: `any`[]) => `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `F` |
| `waitFor` | `number` |

#### Returns

`F`

#### Defined in

[utils/index.ts:255](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/index.ts#L255)

___

### lerp

▸ **lerp**(`a`, `b`, `t`): `number`

Linearly interpolates between two numbers.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` |  |
| `b` | `number` |  |
| `t` | `number` | value between 0 and 1 |

#### Returns

`number`

#### Defined in

[utils/index.ts:88](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/index.ts#L88)

___

### lerpAngle

▸ **lerpAngle**(`a`, `b`, `t`): `number`

Linearly interpolates between two angles in degrees.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | degrees |
| `b` | `number` | degrees |
| `t` | `number` | value between 0 and 1 |

#### Returns

`number`

degrees

#### Defined in

[utils/index.ts:99](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/index.ts#L99)

___

### mod

▸ **mod**(`a`, `b`): `number`

Returns the mod.

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |

#### Returns

`number`

#### Defined in

[utils/index.ts:120](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/index.ts#L120)

___

### normalizeWithinRange

▸ **normalizeWithinRange**(`value`, `min`, `max`): `number` \| ``null``

Normalizes a value within a range.
If it is outside the range, null is returned.
If it is inside the range, a value between 0 and 1 is returned.
0 is returned if the value is equal to the minimum value.
1 is returned if the value is equal to the maximum value.
Linearly maps the value to the 0-1 range if it is within the range.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` |  |
| `min` | `number` | minimum value |
| `max` | `number` | maximum value |

#### Returns

`number` \| ``null``

#### Defined in

[utils/index.ts:69](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/index.ts#L69)

___

### perlinNoise

▸ **perlinNoise**(`x`, `y`): `number`

Generates perlin noise at a given point ranging from -1 to 1.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`number`

#### Defined in

[utils/index.ts:25](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/index.ts#L25)

___

### random

▸ **random**(`min`, `max`): `number`

get a random number

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `min` | `number` | min |
| `max` | `number` | max |

#### Returns

`number`

random value between min and max

#### Defined in

[utils/index.ts:130](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/index.ts#L130)

___

### randomBool

▸ **randomBool**(): `boolean`

Generates a random boolean value.

#### Returns

`boolean`

The randomly generated boolean value.

#### Defined in

[utils/index.ts:158](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/index.ts#L158)

___

### randomChoice

▸ **randomChoice**\<`T`\>(`array`): `T`

Returns a random element from the given array.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of elements in the array. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | The array to choose from. |

#### Returns

`T`

The randomly chosen element.

#### Defined in

[utils/index.ts:150](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/index.ts#L150)

___

### randomColorByHue

▸ **randomColorByHue**(`hMin?`, `hMax?`, `s?`, `l?`): [`Color`](../classes/Color.md)

Generates a random color based on the specified hue range.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `hMin` | `number` | `0` | The minimum hue value (default: 0) [0 - hMax]. |
| `hMax` | `number` | `360` | The maximum hue value (default: 360) [0 - 360]. |
| `s` | `number` | `100` | The saturation value (default: 100) [0 - 100]. |
| `l` | `number` | `50` | The lightness value (default: 50) [0 - 100]. |

#### Returns

[`Color`](../classes/Color.md)

A Color object representing the generated color.

#### Defined in

[utils/index.ts:210](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/index.ts#L210)

___

### randomInCircle

▸ **randomInCircle**(`radius`, `origin?`): [x: number, y: number]

Generates a random point within a circle of the specified radius.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `radius` | `number` | The radius of the circle. |
| `origin` | [x: number, y: number] | - |

#### Returns

[x: number, y: number]

An tuple containing the x and y coordinates.

#### Defined in

[utils/index.ts:176](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/index.ts#L176)

___

### randomInt

▸ **randomInt**(`min`, `max`): `number`

get a random int

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `min` | `number` | min inclusive |
| `max` | `number` | max exclusive |

#### Returns

`number`

random value between min and max

#### Defined in

[utils/index.ts:140](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/index.ts#L140)

___

### randomOnCircle

▸ **randomOnCircle**(`radius`, `origin?`): [x: number, y: number]

Generates random coordinates on a circle with the specified radius.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `radius` | `number` | The radius of the circle. |
| `origin` | [x: number, y: number] | - |

#### Returns

[x: number, y: number]

An tuple containing the x and y coordinates.

#### Defined in

[utils/index.ts:192](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/index.ts#L192)

___

### randomSign

▸ **randomSign**(): `number`

Generates a random sign, either 1 or -1.

#### Returns

`number`

The randomly generated sign.

#### Defined in

[utils/index.ts:167](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/index.ts#L167)

___

### shuffle

▸ **shuffle**\<`T`\>(`array`): `T`[]

Shuffles the elements of an array in place.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of elements in the array. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | The array to be shuffled. |

#### Returns

`T`[]

The shuffled array.

#### Defined in

[utils/index.ts:221](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/index.ts#L221)

___

### shuffleInPlace

▸ **shuffleInPlace**\<`T`\>(`array`): `T`[]

Shuffles an array in place.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of elements in the array. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | The array to be shuffled. |

#### Returns

`T`[]

- The shuffled array.

#### Defined in

[utils/index.ts:237](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/index.ts#L237)

___

### sleep

▸ **sleep**(`ms`): `Promise`\<`unknown`\>

Pauses the execution for a specified number of milliseconds.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ms` | `number` | The number of milliseconds to sleep. |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves after the specified time has elapsed.

#### Defined in

[utils/index.ts:250](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/index.ts#L250)
