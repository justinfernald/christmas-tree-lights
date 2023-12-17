[christmas-tree](../README.md) / [Exports](../modules.md) / [Shapes](../modules/Shapes.md) / Cone

# Class: Cone

[Shapes](../modules/Shapes.md).Cone

## Hierarchy

- [`Shape`](Shapes.Shape.md)

  ↳ **`Cone`**

## Table of contents

### Constructors

- [constructor](Shapes.Cone.md#constructor)

### Properties

- [center](Shapes.Cone.md#center)
- [height](Shapes.Cone.md#height)
- [radius](Shapes.Cone.md#radius)

### Methods

- [isPointInside](Shapes.Cone.md#ispointinside)

## Constructors

### constructor

• **new Cone**(`radius`, `height`, `center`): [`Cone`](Shapes.Cone.md)

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

[`Cone`](Shapes.Cone.md)

#### Overrides

[Shape](Shapes.Shape.md).[constructor](Shapes.Shape.md#constructor)

#### Defined in

[utils/Shapes/Cone.ts:4](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/Cone.ts#L4)

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

[utils/Shapes/Cone.ts:7](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/Cone.ts#L7)

___

### height

• `Private` **height**: `number`

#### Defined in

[utils/Shapes/Cone.ts:6](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/Cone.ts#L6)

___

### radius

• `Private` **radius**: `number`

#### Defined in

[utils/Shapes/Cone.ts:5](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/Cone.ts#L5)

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

[utils/Shapes/Cone.ts:12](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/Cone.ts#L12)
