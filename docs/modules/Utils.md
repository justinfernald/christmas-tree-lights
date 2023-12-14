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
- [perlinNoise](Utils.md#perlinnoise)
- [random](Utils.md#random)
- [randomBool](Utils.md#randombool)
- [randomChoice](Utils.md#randomchoice)
- [randomInt](Utils.md#randomint)
- [randomSign](Utils.md#randomsign)
- [shuffle](Utils.md#shuffle)
- [shuffleInPlace](Utils.md#shuffleinplace)
- [sleep](Utils.md#sleep)

## Variables

### DEG\_TO\_RAD

• `Const` **DEG\_TO\_RAD**: `number`

#### Defined in

[utils/index.ts:2](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/index.ts#L2)

___

### RAD\_TO\_DEG

• `Const` **RAD\_TO\_DEG**: `number`

#### Defined in

[utils/index.ts:1](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/index.ts#L1)

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

[utils/index.ts:82](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/index.ts#L82)

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

[utils/index.ts:50](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/index.ts#L50)

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

[utils/index.ts:184](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/index.ts#L184)

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

[utils/index.ts:61](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/index.ts#L61)

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

[utils/index.ts:72](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/index.ts#L72)

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

[utils/index.ts:93](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/index.ts#L93)

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

[utils/index.ts:23](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/index.ts#L23)

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

[utils/index.ts:103](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/index.ts#L103)

___

### randomBool

▸ **randomBool**(): `boolean`

Generates a random boolean value.

#### Returns

`boolean`

The randomly generated boolean value.

#### Defined in

[utils/index.ts:131](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/index.ts#L131)

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

[utils/index.ts:123](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/index.ts#L123)

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

[utils/index.ts:113](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/index.ts#L113)

___

### randomSign

▸ **randomSign**(): `number`

Generates a random sign, either 1 or -1.

#### Returns

`number`

The randomly generated sign.

#### Defined in

[utils/index.ts:140](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/index.ts#L140)

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

[utils/index.ts:150](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/index.ts#L150)

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

[utils/index.ts:166](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/index.ts#L166)

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

[utils/index.ts:179](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/index.ts#L179)
