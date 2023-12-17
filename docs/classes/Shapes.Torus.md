[christmas-tree](../README.md) / [Exports](../modules.md) / [Shapes](../modules/Shapes.md) / Torus

# Class: Torus

[Shapes](../modules/Shapes.md).Torus

## Hierarchy

- [`Shape`](Shapes.Shape.md)

  ↳ **`Torus`**

## Table of contents

### Constructors

- [constructor](Shapes.Torus.md#constructor)

### Properties

- [center](Shapes.Torus.md#center)
- [majorRadius](Shapes.Torus.md#majorradius)
- [minorRadius](Shapes.Torus.md#minorradius)

### Methods

- [isPointInside](Shapes.Torus.md#ispointinside)

## Constructors

### constructor

• **new Torus**(`majorRadius`, `minorRadius`, `center`): [`Torus`](Shapes.Torus.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `majorRadius` | `number` |
| `minorRadius` | `number` |
| `center` | `Object` |
| `center.x` | `number` |
| `center.y` | `number` |
| `center.z` | `number` |

#### Returns

[`Torus`](Shapes.Torus.md)

#### Overrides

[Shape](Shapes.Shape.md).[constructor](Shapes.Shape.md#constructor)

#### Defined in

[utils/Shapes/Torus.ts:4](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/Torus.ts#L4)

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

[utils/Shapes/Torus.ts:7](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/Torus.ts#L7)

___

### majorRadius

• `Private` **majorRadius**: `number`

#### Defined in

[utils/Shapes/Torus.ts:5](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/Torus.ts#L5)

___

### minorRadius

• `Private` **minorRadius**: `number`

#### Defined in

[utils/Shapes/Torus.ts:6](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/Torus.ts#L6)

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

[utils/Shapes/Torus.ts:12](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/Torus.ts#L12)
