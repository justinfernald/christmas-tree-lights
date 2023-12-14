[christmas-tree](../README.md) / [Exports](../modules.md) / [Shapes](../modules/Shapes.md) / Pyramid

# Class: Pyramid

[Shapes](../modules/Shapes.md).Pyramid

## Hierarchy

- [`Shape`](Shapes.Shape.md)

  ↳ **`Pyramid`**

## Table of contents

### Constructors

- [constructor](Shapes.Pyramid.md#constructor)

### Properties

- [baseLength](Shapes.Pyramid.md#baselength)
- [center](Shapes.Pyramid.md#center)
- [height](Shapes.Pyramid.md#height)

### Methods

- [isPointInside](Shapes.Pyramid.md#ispointinside)

## Constructors

### constructor

• **new Pyramid**(`baseLength`, `height`, `center`): [`Pyramid`](Shapes.Pyramid.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseLength` | `number` |
| `height` | `number` |
| `center` | `Object` |
| `center.x` | `number` |
| `center.y` | `number` |
| `center.z` | `number` |

#### Returns

[`Pyramid`](Shapes.Pyramid.md)

#### Overrides

[Shape](Shapes.Shape.md).[constructor](Shapes.Shape.md#constructor)

#### Defined in

[utils/Shapes/Pyramid.ts:4](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/Shapes/Pyramid.ts#L4)

## Properties

### baseLength

• `Private` **baseLength**: `number`

#### Defined in

[utils/Shapes/Pyramid.ts:5](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/Shapes/Pyramid.ts#L5)

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

[utils/Shapes/Pyramid.ts:7](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/Shapes/Pyramid.ts#L7)

___

### height

• `Private` **height**: `number`

#### Defined in

[utils/Shapes/Pyramid.ts:6](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/Shapes/Pyramid.ts#L6)

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

[utils/Shapes/Pyramid.ts:12](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/Shapes/Pyramid.ts#L12)
