[christmas-tree](../README.md) / [Exports](../modules.md) / [Shapes](../modules/Shapes.md) / Octahedron

# Class: Octahedron

[Shapes](../modules/Shapes.md).Octahedron

## Hierarchy

- [`Shape`](Shapes.Shape.md)

  ↳ **`Octahedron`**

## Table of contents

### Constructors

- [constructor](Shapes.Octahedron.md#constructor)

### Properties

- [center](Shapes.Octahedron.md#center)
- [edgeLength](Shapes.Octahedron.md#edgelength)

### Methods

- [isPointInside](Shapes.Octahedron.md#ispointinside)

## Constructors

### constructor

• **new Octahedron**(`edgeLength`, `center`): [`Octahedron`](Shapes.Octahedron.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `edgeLength` | `number` |
| `center` | `Object` |
| `center.x` | `number` |
| `center.y` | `number` |
| `center.z` | `number` |

#### Returns

[`Octahedron`](Shapes.Octahedron.md)

#### Overrides

[Shape](Shapes.Shape.md).[constructor](Shapes.Shape.md#constructor)

#### Defined in

[utils/Shapes/Octohedron.ts:4](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/Octohedron.ts#L4)

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

[utils/Shapes/Octohedron.ts:6](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/Octohedron.ts#L6)

___

### edgeLength

• `Private` **edgeLength**: `number`

#### Defined in

[utils/Shapes/Octohedron.ts:5](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/Octohedron.ts#L5)

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

[utils/Shapes/Octohedron.ts:11](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Shapes/Octohedron.ts#L11)
