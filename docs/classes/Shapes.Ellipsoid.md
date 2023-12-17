[christmas-tree](../README.md) / [Exports](../modules.md) / [Shapes](../modules/Shapes.md) / Ellipsoid

# Class: Ellipsoid

[Shapes](../modules/Shapes.md).Ellipsoid

## Hierarchy

- [`Shape`](Shapes.Shape.md)

  ↳ **`Ellipsoid`**

## Table of contents

### Constructors

- [constructor](Shapes.Ellipsoid.md#constructor)

### Properties

- [center](Shapes.Ellipsoid.md#center)
- [semiAxisX](Shapes.Ellipsoid.md#semiaxisx)
- [semiAxisY](Shapes.Ellipsoid.md#semiaxisy)
- [semiAxisZ](Shapes.Ellipsoid.md#semiaxisz)

### Methods

- [isPointInside](Shapes.Ellipsoid.md#ispointinside)

## Constructors

### constructor

• **new Ellipsoid**(`semiAxisX`, `semiAxisY`, `semiAxisZ`, `center`): [`Ellipsoid`](Shapes.Ellipsoid.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `semiAxisX` | `number` |
| `semiAxisY` | `number` |
| `semiAxisZ` | `number` |
| `center` | `Object` |
| `center.x` | `number` |
| `center.y` | `number` |
| `center.z` | `number` |

#### Returns

[`Ellipsoid`](Shapes.Ellipsoid.md)

#### Overrides

[Shape](Shapes.Shape.md).[constructor](Shapes.Shape.md#constructor)

#### Defined in

[utils/Shapes/Ellipsoid.ts:4](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/Ellipsoid.ts#L4)

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

[utils/Shapes/Ellipsoid.ts:8](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/Ellipsoid.ts#L8)

___

### semiAxisX

• `Private` **semiAxisX**: `number`

#### Defined in

[utils/Shapes/Ellipsoid.ts:5](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/Ellipsoid.ts#L5)

___

### semiAxisY

• `Private` **semiAxisY**: `number`

#### Defined in

[utils/Shapes/Ellipsoid.ts:6](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/Ellipsoid.ts#L6)

___

### semiAxisZ

• `Private` **semiAxisZ**: `number`

#### Defined in

[utils/Shapes/Ellipsoid.ts:7](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/Ellipsoid.ts#L7)

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

[utils/Shapes/Ellipsoid.ts:13](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/Ellipsoid.ts#L13)
