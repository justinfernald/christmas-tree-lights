[christmas-tree](../README.md) / [Exports](../modules.md) / [Shapes](../modules/Shapes.md) / Cylinder

# Class: Cylinder

[Shapes](../modules/Shapes.md).Cylinder

## Hierarchy

- [`Shape`](Shapes.Shape.md)

  ↳ **`Cylinder`**

## Table of contents

### Constructors

- [constructor](Shapes.Cylinder.md#constructor)

### Properties

- [center](Shapes.Cylinder.md#center)
- [height](Shapes.Cylinder.md#height)
- [radius](Shapes.Cylinder.md#radius)

### Methods

- [isPointInside](Shapes.Cylinder.md#ispointinside)

## Constructors

### constructor

• **new Cylinder**(`radius`, `height`, `center`): [`Cylinder`](Shapes.Cylinder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `radius` | `number` |
| `height` | `number` |
| `center` | `Object` |
| `center.x` | `number` |
| `center.y` | `number` |
| `center.z` | `number` |

#### Returns

[`Cylinder`](Shapes.Cylinder.md)

#### Overrides

[Shape](Shapes.Shape.md).[constructor](Shapes.Shape.md#constructor)

#### Defined in

[utils/Shapes/Cylinder.ts:4](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/Shapes/Cylinder.ts#L4)

## Properties

### center

• `Private` **center**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

#### Defined in

[utils/Shapes/Cylinder.ts:7](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/Shapes/Cylinder.ts#L7)

___

### height

• `Private` **height**: `number`

#### Defined in

[utils/Shapes/Cylinder.ts:6](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/Shapes/Cylinder.ts#L6)

___

### radius

• `Private` **radius**: `number`

#### Defined in

[utils/Shapes/Cylinder.ts:5](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/Shapes/Cylinder.ts#L5)

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

[utils/Shapes/Cylinder.ts:12](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/Shapes/Cylinder.ts#L12)
