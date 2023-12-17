[christmas-tree](../README.md) / [Exports](../modules.md) / [Shapes](../modules/Shapes.md) / Cuboid

# Class: Cuboid

[Shapes](../modules/Shapes.md).Cuboid

## Hierarchy

- [`Shape`](Shapes.Shape.md)

  ↳ **`Cuboid`**

## Table of contents

### Constructors

- [constructor](Shapes.Cuboid.md#constructor)

### Properties

- [center](Shapes.Cuboid.md#center)
- [lengthX](Shapes.Cuboid.md#lengthx)
- [lengthY](Shapes.Cuboid.md#lengthy)
- [lengthZ](Shapes.Cuboid.md#lengthz)

### Methods

- [isPointInside](Shapes.Cuboid.md#ispointinside)

## Constructors

### constructor

• **new Cuboid**(`lengthX`, `lengthY`, `lengthZ`, `center`): [`Cuboid`](Shapes.Cuboid.md)

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

[`Cuboid`](Shapes.Cuboid.md)

#### Overrides

[Shape](Shapes.Shape.md).[constructor](Shapes.Shape.md#constructor)

#### Defined in

[utils/Shapes/Cuboid.ts:4](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/Cuboid.ts#L4)

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

[utils/Shapes/Cuboid.ts:8](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/Cuboid.ts#L8)

___

### lengthX

• `Private` **lengthX**: `number`

#### Defined in

[utils/Shapes/Cuboid.ts:5](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/Cuboid.ts#L5)

___

### lengthY

• `Private` **lengthY**: `number`

#### Defined in

[utils/Shapes/Cuboid.ts:6](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/Cuboid.ts#L6)

___

### lengthZ

• `Private` **lengthZ**: `number`

#### Defined in

[utils/Shapes/Cuboid.ts:7](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/Cuboid.ts#L7)

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

[utils/Shapes/Cuboid.ts:13](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/Cuboid.ts#L13)
