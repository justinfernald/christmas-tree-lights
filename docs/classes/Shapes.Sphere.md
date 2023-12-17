[christmas-tree](../README.md) / [Exports](../modules.md) / [Shapes](../modules/Shapes.md) / Sphere

# Class: Sphere

[Shapes](../modules/Shapes.md).Sphere

## Hierarchy

- [`Shape`](Shapes.Shape.md)

  ↳ **`Sphere`**

## Table of contents

### Constructors

- [constructor](Shapes.Sphere.md#constructor)

### Properties

- [center](Shapes.Sphere.md#center)
- [radius](Shapes.Sphere.md#radius)

### Methods

- [isPointInside](Shapes.Sphere.md#ispointinside)

## Constructors

### constructor

• **new Sphere**(`radius`, `center`): [`Sphere`](Shapes.Sphere.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `radius` | `number` |
| `center` | `Object` |
| `center.x` | `number` |
| `center.y` | `number` |
| `center.z` | `number` |

#### Returns

[`Sphere`](Shapes.Sphere.md)

#### Overrides

[Shape](Shapes.Shape.md).[constructor](Shapes.Shape.md#constructor)

#### Defined in

[utils/Shapes/Sphere.ts:4](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/Sphere.ts#L4)

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

[utils/Shapes/Sphere.ts:6](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/Sphere.ts#L6)

___

### radius

• `Private` **radius**: `number`

#### Defined in

[utils/Shapes/Sphere.ts:5](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/Sphere.ts#L5)

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

[utils/Shapes/Sphere.ts:11](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/Sphere.ts#L11)
