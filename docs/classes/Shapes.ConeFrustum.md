[christmas-tree](../README.md) / [Exports](../modules.md) / [Shapes](../modules/Shapes.md) / ConeFrustum

# Class: ConeFrustum

[Shapes](../modules/Shapes.md).ConeFrustum

## Hierarchy

- [`Shape`](Shapes.Shape.md)

  ↳ **`ConeFrustum`**

## Table of contents

### Constructors

- [constructor](Shapes.ConeFrustum.md#constructor)

### Properties

- [center](Shapes.ConeFrustum.md#center)
- [farRadius](Shapes.ConeFrustum.md#farradius)
- [height](Shapes.ConeFrustum.md#height)
- [nearRadius](Shapes.ConeFrustum.md#nearradius)

### Methods

- [isPointInside](Shapes.ConeFrustum.md#ispointinside)

## Constructors

### constructor

• **new ConeFrustum**(`nearRadius`, `farRadius`, `height`, `center`): [`ConeFrustum`](Shapes.ConeFrustum.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nearRadius` | `number` |
| `farRadius` | `number` |
| `height` | `number` |
| `center` | `Object` |
| `center.x` | `number` |
| `center.y` | `number` |
| `center.z` | `number` |

#### Returns

[`ConeFrustum`](Shapes.ConeFrustum.md)

#### Overrides

[Shape](Shapes.Shape.md).[constructor](Shapes.Shape.md#constructor)

#### Defined in

[utils/Shapes/ConeFrustum.ts:4](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/Shapes/ConeFrustum.ts#L4)

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

[utils/Shapes/ConeFrustum.ts:8](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/Shapes/ConeFrustum.ts#L8)

___

### farRadius

• `Private` **farRadius**: `number`

#### Defined in

[utils/Shapes/ConeFrustum.ts:6](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/Shapes/ConeFrustum.ts#L6)

___

### height

• `Private` **height**: `number`

#### Defined in

[utils/Shapes/ConeFrustum.ts:7](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/Shapes/ConeFrustum.ts#L7)

___

### nearRadius

• `Private` **nearRadius**: `number`

#### Defined in

[utils/Shapes/ConeFrustum.ts:5](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/Shapes/ConeFrustum.ts#L5)

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

[utils/Shapes/ConeFrustum.ts:13](https://github.com/justinfernald/christmas-tree-lights/blob/49c38ff/src/utils/Shapes/ConeFrustum.ts#L13)
