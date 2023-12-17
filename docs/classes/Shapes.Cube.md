[christmas-tree](../README.md) / [Exports](../modules.md) / [Shapes](../modules/Shapes.md) / Cube

# Class: Cube

[Shapes](../modules/Shapes.md).Cube

## Hierarchy

- [`Shape`](Shapes.Shape.md)

  ↳ **`Cube`**

## Table of contents

### Constructors

- [constructor](Shapes.Cube.md#constructor)

### Properties

- [center](Shapes.Cube.md#center)
- [sideLength](Shapes.Cube.md#sidelength)

### Methods

- [isPointInside](Shapes.Cube.md#ispointinside)

## Constructors

### constructor

• **new Cube**(`sideLength`, `center`): [`Cube`](Shapes.Cube.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sideLength` | `number` |
| `center` | `Object` |
| `center.x` | `number` |
| `center.y` | `number` |
| `center.z` | `number` |

#### Returns

[`Cube`](Shapes.Cube.md)

#### Overrides

[Shape](Shapes.Shape.md).[constructor](Shapes.Shape.md#constructor)

#### Defined in

[utils/Shapes/Cube.ts:4](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/Cube.ts#L4)

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

[utils/Shapes/Cube.ts:6](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/Cube.ts#L6)

___

### sideLength

• `Private` **sideLength**: `number`

#### Defined in

[utils/Shapes/Cube.ts:5](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/Cube.ts#L5)

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

[utils/Shapes/Cube.ts:11](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/Cube.ts#L11)
