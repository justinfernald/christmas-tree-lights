[christmas-tree](../README.md) / [Exports](../modules.md) / [Shapes](../modules/Shapes.md) / HexagonalPrism

# Class: HexagonalPrism

[Shapes](../modules/Shapes.md).HexagonalPrism

## Hierarchy

- [`Shape`](Shapes.Shape.md)

  ↳ **`HexagonalPrism`**

## Table of contents

### Constructors

- [constructor](Shapes.HexagonalPrism.md#constructor)

### Properties

- [center](Shapes.HexagonalPrism.md#center)
- [height](Shapes.HexagonalPrism.md#height)
- [sideLength](Shapes.HexagonalPrism.md#sidelength)

### Methods

- [isPointInside](Shapes.HexagonalPrism.md#ispointinside)

## Constructors

### constructor

• **new HexagonalPrism**(`sideLength`, `height`, `center`): [`HexagonalPrism`](Shapes.HexagonalPrism.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sideLength` | `number` |
| `height` | `number` |
| `center` | `Object` |
| `center.x` | `number` |
| `center.y` | `number` |
| `center.z` | `number` |

#### Returns

[`HexagonalPrism`](Shapes.HexagonalPrism.md)

#### Overrides

[Shape](Shapes.Shape.md).[constructor](Shapes.Shape.md#constructor)

#### Defined in

[utils/Shapes/HexagonalPrism.ts:4](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/Shapes/HexagonalPrism.ts#L4)

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

[utils/Shapes/HexagonalPrism.ts:7](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/Shapes/HexagonalPrism.ts#L7)

___

### height

• `Private` **height**: `number`

#### Defined in

[utils/Shapes/HexagonalPrism.ts:6](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/Shapes/HexagonalPrism.ts#L6)

___

### sideLength

• `Private` **sideLength**: `number`

#### Defined in

[utils/Shapes/HexagonalPrism.ts:5](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/Shapes/HexagonalPrism.ts#L5)

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

[utils/Shapes/HexagonalPrism.ts:12](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/Shapes/HexagonalPrism.ts#L12)
