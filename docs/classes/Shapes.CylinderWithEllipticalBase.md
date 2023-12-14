[christmas-tree](../README.md) / [Exports](../modules.md) / [Shapes](../modules/Shapes.md) / CylinderWithEllipticalBase

# Class: CylinderWithEllipticalBase

[Shapes](../modules/Shapes.md).CylinderWithEllipticalBase

## Hierarchy

- [`Shape`](Shapes.Shape.md)

  ↳ **`CylinderWithEllipticalBase`**

## Table of contents

### Constructors

- [constructor](Shapes.CylinderWithEllipticalBase.md#constructor)

### Properties

- [center](Shapes.CylinderWithEllipticalBase.md#center)
- [height](Shapes.CylinderWithEllipticalBase.md#height)
- [majorRadius](Shapes.CylinderWithEllipticalBase.md#majorradius)
- [minorRadius](Shapes.CylinderWithEllipticalBase.md#minorradius)

### Methods

- [isPointInside](Shapes.CylinderWithEllipticalBase.md#ispointinside)

## Constructors

### constructor

• **new CylinderWithEllipticalBase**(`majorRadius`, `minorRadius`, `height`, `center`): [`CylinderWithEllipticalBase`](Shapes.CylinderWithEllipticalBase.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `majorRadius` | `number` |
| `minorRadius` | `number` |
| `height` | `number` |
| `center` | `Object` |
| `center.x` | `number` |
| `center.y` | `number` |
| `center.z` | `number` |

#### Returns

[`CylinderWithEllipticalBase`](Shapes.CylinderWithEllipticalBase.md)

#### Overrides

[Shape](Shapes.Shape.md).[constructor](Shapes.Shape.md#constructor)

#### Defined in

[utils/Shapes/CylinderWithEllipticalBase.ts:4](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/Shapes/CylinderWithEllipticalBase.ts#L4)

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

[utils/Shapes/CylinderWithEllipticalBase.ts:8](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/Shapes/CylinderWithEllipticalBase.ts#L8)

___

### height

• `Private` **height**: `number`

#### Defined in

[utils/Shapes/CylinderWithEllipticalBase.ts:7](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/Shapes/CylinderWithEllipticalBase.ts#L7)

___

### majorRadius

• `Private` **majorRadius**: `number`

#### Defined in

[utils/Shapes/CylinderWithEllipticalBase.ts:5](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/Shapes/CylinderWithEllipticalBase.ts#L5)

___

### minorRadius

• `Private` **minorRadius**: `number`

#### Defined in

[utils/Shapes/CylinderWithEllipticalBase.ts:6](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/Shapes/CylinderWithEllipticalBase.ts#L6)

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

[utils/Shapes/CylinderWithEllipticalBase.ts:13](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/Shapes/CylinderWithEllipticalBase.ts#L13)
