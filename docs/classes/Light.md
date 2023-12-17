[christmas-tree](../README.md) / [Exports](../modules.md) / Light

# Class: Light

Represents a light source.

## Table of contents

### Constructors

- [constructor](Light.md#constructor)

### Properties

- [\_location](Light.md#_location)
- [color](Light.md#color)
- [update](Light.md#update)

### Accessors

- [location](Light.md#location)
- [locationOriginCenter](Light.md#locationorigincenter)
- [locationOriginCenterBottom](Light.md#locationorigincenterbottom)
- [locationOriginCenterBottomScaled](Light.md#locationorigincenterbottomscaled)
- [locationOriginCenterScaled](Light.md#locationorigincenterscaled)
- [locationScaled](Light.md#locationscaled)

### Methods

- [toDto](Light.md#todto)
- [fromDto](Light.md#fromdto)

## Constructors

### constructor

• **new Light**(`location`, `color`): [`Light`](Light.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | [`Vector3`](Vector3.md) |
| `color` | [`Color`](Color.md) |

#### Returns

[`Light`](Light.md)

#### Defined in

[utils/Light.ts:86](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Light.ts#L86)

## Properties

### \_location

• **\_location**: [`Vector3`](Vector3.md)

#### Defined in

[utils/Light.ts:13](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Light.ts#L13)

___

### color

• **color**: [`Color`](Color.md)

#### Defined in

[utils/Light.ts:14](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Light.ts#L14)

___

### update

• `Optional` **update**: (`timeMs`: `number`, `deltaMs`: ``null`` \| `number`, `iteration`: `number`) => `void` \| [`Color`](Color.md)

#### Type declaration

▸ (`timeMs`, `deltaMs`, `iteration`): `void` \| [`Color`](Color.md)

Updates the light's color based on the specified parameters.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `timeMs` | `number` | The current time in milliseconds. |
| `deltaMs` | ``null`` \| `number` | The time difference in milliseconds since the last update. |
| `iteration` | `number` | The current iteration count. |

##### Returns

`void` \| [`Color`](Color.md)

The updated color of the light, or void if no color update is needed.

#### Defined in

[utils/Light.ts:84](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Light.ts#L84)

## Accessors

### location

• `get` **location**(): [`Vector3`](Vector3.md)

Location of the light.
x: 0 to 1
y: 0 to 1
z: 0 to 1 (0 is bottom of tree, 1 is top of tree)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[utils/Light.ts:22](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Light.ts#L22)

___

### locationOriginCenter

• `get` **locationOriginCenter**(): [`Vector3`](Vector3.md)

Location of the light with origin at the center of the tree.
x: -0.5 to 0.5
y: -0.5 to 0.5
z: -0.5 to 0.5 (-0.5 is bottom of tree, 0.5 is top of tree)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[utils/Light.ts:42](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Light.ts#L42)

___

### locationOriginCenterBottom

• `get` **locationOriginCenterBottom**(): [`Vector3`](Vector3.md)

Location of the light with origin at the center of the tree for x and y, and bottom of the tree.
x: -0.5 to 0.5
y: -0.5 to 0.5
z: 0 to 1 (0 is bottom of tree, 1 is top of tree)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[utils/Light.ts:62](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Light.ts#L62)

___

### locationOriginCenterBottomScaled

• `get` **locationOriginCenterBottomScaled**(): [`Vector3`](Vector3.md)

Location of the light with origin at the center of the tree for x and y, and bottom of the tree.
x: -0.5 to 0.5
y: -0.5 to 0.5
z: 0 to 1.74 (0 is bottom of tree, 1.74 is top of tree)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[utils/Light.ts:72](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Light.ts#L72)

___

### locationOriginCenterScaled

• `get` **locationOriginCenterScaled**(): [`Vector3`](Vector3.md)

Location of the light with origin at the center of the tree and z scaled by 1.74.
x: -0.5 to 0.5
y: -0.5 to 0.5
z: -0.87 to 0.87 (-0.87 is bottom of tree, 0.87 is top of tree)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[utils/Light.ts:52](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Light.ts#L52)

___

### locationScaled

• `get` **locationScaled**(): [`Vector3`](Vector3.md)

Location of the light with z scaled by 1.74.
x: 0 to 1
y: 0 to 1
z: 0 to 1.74 (0 is bottom of tree, 1.74 is top of tree)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[utils/Light.ts:32](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Light.ts#L32)

## Methods

### toDto

▸ **toDto**(): [`LightDTO`](../interfaces/LightDTO.md)

Converts the Light object to a Data Transfer Object (DTO).

#### Returns

[`LightDTO`](../interfaces/LightDTO.md)

The DTO representation of the Light object.

#### Defined in

[utils/Light.ts:95](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Light.ts#L95)

___

### fromDto

▸ **fromDto**(`dto`): [`Light`](Light.md)

Creates a Light instance from a data transfer object (DTO).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dto` | [`LightDTO`](../interfaces/LightDTO.md) | The DTO containing the location and color information. |

#### Returns

[`Light`](Light.md)

A new Light instance.

#### Defined in

[utils/Light.ts:107](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Light.ts#L107)
