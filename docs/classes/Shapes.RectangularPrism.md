[christmas-tree](../README.md) / [Exports](../modules.md) / [Shapes](../modules/Shapes.md) / RectangularPrism

# Class: RectangularPrism

[Shapes](../modules/Shapes.md).RectangularPrism

## Hierarchy

- [`Shape`](Shapes.Shape.md)

  ↳ **`RectangularPrism`**

## Table of contents

### Constructors

- [constructor](Shapes.RectangularPrism.md#constructor)

### Properties

- [center](Shapes.RectangularPrism.md#center)
- [lengthX](Shapes.RectangularPrism.md#lengthx)
- [lengthY](Shapes.RectangularPrism.md#lengthy)
- [lengthZ](Shapes.RectangularPrism.md#lengthz)

### Methods

- [isPointInside](Shapes.RectangularPrism.md#ispointinside)

## Constructors

### constructor

• **new RectangularPrism**(`lengthX`, `lengthY`, `lengthZ`, `center`): [`RectangularPrism`](Shapes.RectangularPrism.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `lengthX` | `number` |
| `lengthY` | `number` |
| `lengthZ` | `number` |
| `center` | `Object` |
| `center.x` | `number` |
| `center.y` | `number` |
| `center.z` | `number` |

#### Returns

[`RectangularPrism`](Shapes.RectangularPrism.md)

#### Overrides

[Shape](Shapes.Shape.md).[constructor](Shapes.Shape.md#constructor)

#### Defined in

[utils/Shapes/RectangularPrism.ts:4](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/RectangularPrism.ts#L4)

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

[utils/Shapes/RectangularPrism.ts:8](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/RectangularPrism.ts#L8)

___

### lengthX

• `Private` **lengthX**: `number`

#### Defined in

[utils/Shapes/RectangularPrism.ts:5](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/RectangularPrism.ts#L5)

___

### lengthY

• `Private` **lengthY**: `number`

#### Defined in

[utils/Shapes/RectangularPrism.ts:6](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/RectangularPrism.ts#L6)

___

### lengthZ

• `Private` **lengthZ**: `number`

#### Defined in

[utils/Shapes/RectangularPrism.ts:7](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/RectangularPrism.ts#L7)

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

[utils/Shapes/RectangularPrism.ts:13](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/RectangularPrism.ts#L13)
