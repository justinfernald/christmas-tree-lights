[christmas-tree](../README.md) / [Exports](../modules.md) / [Shapes](../modules/Shapes.md) / Frustum

# Class: Frustum

[Shapes](../modules/Shapes.md).Frustum

## Hierarchy

- [`Shape`](Shapes.Shape.md)

  ↳ **`Frustum`**

## Table of contents

### Constructors

- [constructor](Shapes.Frustum.md#constructor)

### Properties

- [bottom](Shapes.Frustum.md#bottom)
- [center](Shapes.Frustum.md#center)
- [far](Shapes.Frustum.md#far)
- [left](Shapes.Frustum.md#left)
- [near](Shapes.Frustum.md#near)
- [right](Shapes.Frustum.md#right)
- [top](Shapes.Frustum.md#top)

### Methods

- [isPointInside](Shapes.Frustum.md#ispointinside)

## Constructors

### constructor

• **new Frustum**(`near`, `far`, `left`, `right`, `top`, `bottom`, `center`): [`Frustum`](Shapes.Frustum.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `near` | `number` |
| `far` | `number` |
| `left` | `number` |
| `right` | `number` |
| `top` | `number` |
| `bottom` | `number` |
| `center` | `Object` |
| `center.x` | `number` |
| `center.y` | `number` |
| `center.z` | `number` |

#### Returns

[`Frustum`](Shapes.Frustum.md)

#### Overrides

[Shape](Shapes.Shape.md).[constructor](Shapes.Shape.md#constructor)

#### Defined in

[utils/Shapes/Frustum.ts:4](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/Frustum.ts#L4)

## Properties

### bottom

• `Private` **bottom**: `number`

#### Defined in

[utils/Shapes/Frustum.ts:10](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/Frustum.ts#L10)

___

### center

• `Private` **center**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

#### Defined in

[utils/Shapes/Frustum.ts:11](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/Frustum.ts#L11)

___

### far

• `Private` **far**: `number`

#### Defined in

[utils/Shapes/Frustum.ts:6](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/Frustum.ts#L6)

___

### left

• `Private` **left**: `number`

#### Defined in

[utils/Shapes/Frustum.ts:7](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/Frustum.ts#L7)

___

### near

• `Private` **near**: `number`

#### Defined in

[utils/Shapes/Frustum.ts:5](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/Frustum.ts#L5)

___

### right

• `Private` **right**: `number`

#### Defined in

[utils/Shapes/Frustum.ts:8](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/Frustum.ts#L8)

___

### top

• `Private` **top**: `number`

#### Defined in

[utils/Shapes/Frustum.ts:9](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/Frustum.ts#L9)

## Methods

### isPointInside

▸ **isPointInside**(`x`, `y`, `z`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

#### Returns

`boolean`

#### Overrides

[Shape](Shapes.Shape.md).[isPointInside](Shapes.Shape.md#ispointinside)

#### Defined in

[utils/Shapes/Frustum.ts:16](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/Frustum.ts#L16)
