[christmas-tree](../README.md) / [Exports](../modules.md) / [Shapes](../modules/Shapes.md) / TriangularPyramid

# Class: TriangularPyramid

[Shapes](../modules/Shapes.md).TriangularPyramid

## Hierarchy

- [`Shape`](Shapes.Shape.md)

  ↳ **`TriangularPyramid`**

## Table of contents

### Constructors

- [constructor](Shapes.TriangularPyramid.md#constructor)

### Properties

- [baseLength](Shapes.TriangularPyramid.md#baselength)
- [center](Shapes.TriangularPyramid.md#center)
- [height](Shapes.TriangularPyramid.md#height)

### Methods

- [isPointInside](Shapes.TriangularPyramid.md#ispointinside)

## Constructors

### constructor

• **new TriangularPyramid**(`baseLength`, `height`, `center`): [`TriangularPyramid`](Shapes.TriangularPyramid.md)

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

[`TriangularPyramid`](Shapes.TriangularPyramid.md)

#### Overrides

[Shape](Shapes.Shape.md).[constructor](Shapes.Shape.md#constructor)

#### Defined in

[utils/Shapes/TriangularPyramid.ts:4](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/TriangularPyramid.ts#L4)

## Properties

### baseLength

• `Private` **baseLength**: `number`

#### Defined in

[utils/Shapes/TriangularPyramid.ts:5](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/TriangularPyramid.ts#L5)

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

[utils/Shapes/TriangularPyramid.ts:7](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/TriangularPyramid.ts#L7)

___

### height

• `Private` **height**: `number`

#### Defined in

[utils/Shapes/TriangularPyramid.ts:6](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/TriangularPyramid.ts#L6)

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

[utils/Shapes/TriangularPyramid.ts:12](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/TriangularPyramid.ts#L12)
