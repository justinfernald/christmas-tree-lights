[christmas-tree](../README.md) / [Exports](../modules.md) / Vector3

# Class: Vector3

Represents a 3-dimensional vector in Euclidean space.

## Table of contents

### Constructors

- [constructor](Vector3.md#constructor)

### Properties

- [x](Vector3.md#x)
- [y](Vector3.md#y)
- [z](Vector3.md#z)

### Accessors

- [asObject](Vector3.md#asobject)
- [asTuple](Vector3.md#astuple)
- [length](Vector3.md#length)
- [normalized](Vector3.md#normalized)
- [squaredMagnitude](Vector3.md#squaredmagnitude)

### Methods

- [add](Vector3.md#add)
- [angleBetween](Vector3.md#anglebetween)
- [asLength](Vector3.md#aslength)
- [clone](Vector3.md#clone)
- [cross](Vector3.md#cross)
- [distanceTo](Vector3.md#distanceto)
- [dot](Vector3.md#dot)
- [limitLength](Vector3.md#limitlength)
- [midpoint](Vector3.md#midpoint)
- [mult](Vector3.md#mult)
- [negate](Vector3.md#negate)
- [projectOnto](Vector3.md#projectonto)
- [rotateAroundAxis](Vector3.md#rotatearoundaxis)
- [rotateXY](Vector3.md#rotatexy)
- [rotateXYZ](Vector3.md#rotatexyz)
- [rotateYZ](Vector3.md#rotateyz)
- [rotateZX](Vector3.md#rotatezx)
- [scale](Vector3.md#scale)
- [sub](Vector3.md#sub)
- [backward](Vector3.md#backward)
- [down](Vector3.md#down)
- [forward](Vector3.md#forward)
- [fromObject](Vector3.md#fromobject)
- [fromTuple](Vector3.md#fromtuple)
- [left](Vector3.md#left)
- [randomInSphere](Vector3.md#randominsphere)
- [randomOnSphere](Vector3.md#randomonsphere)
- [right](Vector3.md#right)
- [up](Vector3.md#up)
- [zero](Vector3.md#zero)

## Constructors

### constructor

• **new Vector3**(`x`, `y`, `z`): [`Vector3`](Vector3.md)

Creates a new Vector3 instance with the specified `x`, `y`, and `z` values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The x component of the vector. |
| `y` | `number` | The y component of the vector. |
| `z` | `number` | The z component of the vector. |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[utils/Vector3.ts:120](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Vector3.ts#L120)

## Properties

### x

• **x**: `number`

The x component of the vector.

#### Defined in

[utils/Vector3.ts:121](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Vector3.ts#L121)

___

### y

• **y**: `number`

The y component of the vector.

#### Defined in

[utils/Vector3.ts:122](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Vector3.ts#L122)

___

### z

• **z**: `number`

The z component of the vector.

#### Defined in

[utils/Vector3.ts:123](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Vector3.ts#L123)

## Accessors

### asObject

• `get` **asObject**(): `Object`

Returns the components of this vector as an object with `x`, `y`, and `z` properties.

#### Returns

`Object`

An object containing the `x`, `y`, and `z` values of this vector.

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

#### Defined in

[utils/Vector3.ts:258](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Vector3.ts#L258)

___

### asTuple

• `get` **asTuple**(): [x: number, y: number, z: number]

Returns the components of this vector as a tuple of numbers.

#### Returns

[x: number, y: number, z: number]

A tuple containing the `x`, `y`, and `z` values of this vector.

#### Defined in

[utils/Vector3.ts:250](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Vector3.ts#L250)

___

### length

• `get` **length**(): `number`

Returns the length (magnitude) of this vector.

#### Returns

`number`

The length of this vector.

#### Defined in

[utils/Vector3.ts:233](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Vector3.ts#L233)

___

### normalized

• `get` **normalized**(): [`Vector3`](Vector3.md)

Returns a new vector with the same direction as this vector but with a length of 1.

#### Returns

[`Vector3`](Vector3.md)

A new Vector3 instance representing the normalized vector.

#### Defined in

[utils/Vector3.ts:241](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Vector3.ts#L241)

___

### squaredMagnitude

• `get` **squaredMagnitude**(): `number`

Returns the squared magnitude of this vector.

#### Returns

`number`

The squared magnitude of this vector.

#### Defined in

[utils/Vector3.ts:225](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Vector3.ts#L225)

## Methods

### add

▸ **add**(`v`): [`Vector3`](Vector3.md)

Adds another vector to this vector and returns the result.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector3`](Vector3.md) | The vector to add. |

#### Returns

[`Vector3`](Vector3.md)

A new Vector3 instance representing the sum of this vector and the given vector.

#### Defined in

[utils/Vector3.ts:139](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Vector3.ts#L139)

___

### angleBetween

▸ **angleBetween**(`v`): `number`

Calculates the angle between this vector and another vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector3`](Vector3.md) | The vector to calculate the angle to. |

#### Returns

`number`

The angle between this vector and the given vector in radians.

#### Defined in

[utils/Vector3.ts:370](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Vector3.ts#L370)

___

### asLength

▸ **asLength**(`length`): [`Vector3`](Vector3.md)

Returns a new vector with the same direction as this vector but with the specified length.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `length` | `number` | The desired length of the vector. |

#### Returns

[`Vector3`](Vector3.md)

A new Vector3 instance with the same direction as this vector but with the specified length.

#### Defined in

[utils/Vector3.ts:208](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Vector3.ts#L208)

___

### clone

▸ **clone**(): [`Vector3`](Vector3.md)

Creates a copy of this Vector3 instance.

#### Returns

[`Vector3`](Vector3.md)

A new Vector3 instance with the same `x`, `y`, and `z` values as this vector.

#### Defined in

[utils/Vector3.ts:130](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Vector3.ts#L130)

___

### cross

▸ **cross**(`v`): [`Vector3`](Vector3.md)

Calculates the cross product of this vector and another vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector3`](Vector3.md) | The vector to calculate the cross product with. |

#### Returns

[`Vector3`](Vector3.md)

A new Vector3 instance representing the cross product of this vector and the given vector.

#### Defined in

[utils/Vector3.ts:175](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Vector3.ts#L175)

___

### distanceTo

▸ **distanceTo**(`v`): `number`

Calculates the distance between this vector and another vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector3`](Vector3.md) | The vector to calculate the distance to. |

#### Returns

`number`

The distance between this vector and the given vector.

#### Defined in

[utils/Vector3.ts:217](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Vector3.ts#L217)

___

### dot

▸ **dot**(`v`): `number`

Calculates the dot product of this vector and another vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector3`](Vector3.md) | The vector to calculate the dot product with. |

#### Returns

`number`

The dot product of this vector and the given vector.

#### Defined in

[utils/Vector3.ts:166](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Vector3.ts#L166)

___

### limitLength

▸ **limitLength**(`length?`): [`Vector3`](Vector3.md)

Limits the length of this vector to the specified value.
If the length of the vector is less than or equal to the specified length, the vector is returned unchanged.
If the length of the vector is greater than the specified length, a new vector with the same direction but the specified length is returned.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `length` | `number` | `1` | The maximum length of the vector. |

#### Returns

[`Vector3`](Vector3.md)

A new Vector3 instance with the same direction as this vector but with a length no greater than the specified length.

#### Defined in

[utils/Vector3.ts:199](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Vector3.ts#L199)

___

### midpoint

▸ **midpoint**(`v`): [`Vector3`](Vector3.md)

Calculates the midpoint between this vector and another vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector3`](Vector3.md) | The vector to calculate the midpoint with. |

#### Returns

[`Vector3`](Vector3.md)

A new Vector3 instance representing the midpoint between this vector and the given vector.

#### Defined in

[utils/Vector3.ts:399](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Vector3.ts#L399)

___

### mult

▸ **mult**(`v`): [`Vector3`](Vector3.md)

Multiplies this vector by another vector component-wise and returns the result.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector3`](Vector3.md) | The vector to multiply by. |

#### Returns

[`Vector3`](Vector3.md)

A new Vector3 instance representing the component-wise product of this vector and the given vector.

#### Defined in

[utils/Vector3.ts:157](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Vector3.ts#L157)

___

### negate

▸ **negate**(): [`Vector3`](Vector3.md)

Returns the negation of this vector.

#### Returns

[`Vector3`](Vector3.md)

A new Vector3 instance representing the negation of this vector.

#### Defined in

[utils/Vector3.ts:266](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Vector3.ts#L266)

___

### projectOnto

▸ **projectOnto**(`v`): [`Vector3`](Vector3.md)

Projects this vector onto another vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector3`](Vector3.md) | The vector to project onto. |

#### Returns

[`Vector3`](Vector3.md)

A new Vector3 instance representing the projection of this vector onto the given vector.

**`Throws`**

An error if the given vector has zero length.

#### Defined in

[utils/Vector3.ts:382](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Vector3.ts#L382)

___

### rotateAroundAxis

▸ **rotateAroundAxis**(`axis`, `angle`): [`Vector3`](Vector3.md)

Rotates this vector around the specified axis by the specified angle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `axis` | [`Vector3`](Vector3.md) | The axis to rotate around. |
| `angle` | `number` | The rotation angle in radians. |

#### Returns

[`Vector3`](Vector3.md)

A new Vector3 instance representing the rotated vector.

#### Defined in

[utils/Vector3.ts:346](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Vector3.ts#L346)

___

### rotateXY

▸ **rotateXY**(`angle`): [`Vector3`](Vector3.md)

Rotates this vector around the x and y axes by the specified angle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `angle` | `number` | The rotation angle in radians. |

#### Returns

[`Vector3`](Vector3.md)

A new Vector3 instance representing the rotated vector.

#### Defined in

[utils/Vector3.ts:303](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Vector3.ts#L303)

___

### rotateXYZ

▸ **rotateXYZ**(`angles`): [`Vector3`](Vector3.md)

Rotates this vector around the x, y, and z axes by the specified angles.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `angles` | `Object` | An object containing the rotation angles in radians for the x, y, and z axes. |
| `angles.x` | `number` | - |
| `angles.y` | `number` | - |
| `angles.z` | `number` | - |

#### Returns

[`Vector3`](Vector3.md)

A new Vector3 instance representing the rotated vector.

#### Defined in

[utils/Vector3.ts:275](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Vector3.ts#L275)

___

### rotateYZ

▸ **rotateYZ**(`angle`): [`Vector3`](Vector3.md)

Rotates this vector around the y and z axes by the specified angle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `angle` | `number` | The rotation angle in radians. |

#### Returns

[`Vector3`](Vector3.md)

A new Vector3 instance representing the rotated vector.

#### Defined in

[utils/Vector3.ts:317](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Vector3.ts#L317)

___

### rotateZX

▸ **rotateZX**(`angle`): [`Vector3`](Vector3.md)

Rotates this vector around the z and x axes by the specified angle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `angle` | `number` | The rotation angle in radians. |

#### Returns

[`Vector3`](Vector3.md)

A new Vector3 instance representing the rotated vector.

#### Defined in

[utils/Vector3.ts:331](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Vector3.ts#L331)

___

### scale

▸ **scale**(`scaler`): [`Vector3`](Vector3.md)

Scales this vector by a scalar value and returns the result.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scaler` | `number` | The scalar value to scale by. |

#### Returns

[`Vector3`](Vector3.md)

A new Vector3 instance representing the scaled vector.

#### Defined in

[utils/Vector3.ts:188](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Vector3.ts#L188)

___

### sub

▸ **sub**(`v`): [`Vector3`](Vector3.md)

Subtracts another vector from this vector and returns the result.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector3`](Vector3.md) | The vector to subtract. |

#### Returns

[`Vector3`](Vector3.md)

A new Vector3 instance representing the difference between this vector and the given vector.

#### Defined in

[utils/Vector3.ts:148](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Vector3.ts#L148)

___

### backward

▸ **backward**(): [`Vector3`](Vector3.md)

Creates a Vector3 representing the backward direction.

#### Returns

[`Vector3`](Vector3.md)

A new Vector3 instance representing the backward direction.

#### Defined in

[utils/Vector3.ts:43](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Vector3.ts#L43)

___

### down

▸ **down**(): [`Vector3`](Vector3.md)

Creates a Vector3 representing the down direction.

#### Returns

[`Vector3`](Vector3.md)

A new Vector3 instance representing the down direction.

#### Defined in

[utils/Vector3.ts:59](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Vector3.ts#L59)

___

### forward

▸ **forward**(): [`Vector3`](Vector3.md)

Creates a Vector3 representing the forward direction.

#### Returns

[`Vector3`](Vector3.md)

A new Vector3 instance representing the forward direction.

#### Defined in

[utils/Vector3.ts:35](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Vector3.ts#L35)

___

### fromObject

▸ **fromObject**(`obj`): [`Vector3`](Vector3.md)

Creates a Vector3 from an object with `x`, `y`, and `z` properties.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `Object` | The object containing the `x`, `y`, and `z` properties. |
| `obj.x` | `number` | - |
| `obj.y` | `number` | - |
| `obj.z` | `number` | - |

#### Returns

[`Vector3`](Vector3.md)

A new Vector3 instance.

#### Defined in

[utils/Vector3.ts:10](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Vector3.ts#L10)

___

### fromTuple

▸ **fromTuple**(`tuple`): [`Vector3`](Vector3.md)

Creates a Vector3 from a tuple of numbers representing the `x`, `y`, and `z` values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tuple` | [x: number, y: number, z: number] | The tuple containing the `x`, `y`, and `z` values. |

#### Returns

[`Vector3`](Vector3.md)

A new Vector3 instance.

#### Defined in

[utils/Vector3.ts:19](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Vector3.ts#L19)

___

### left

▸ **left**(): [`Vector3`](Vector3.md)

Creates a Vector3 representing the left direction.

#### Returns

[`Vector3`](Vector3.md)

A new Vector3 instance representing the left direction.

#### Defined in

[utils/Vector3.ts:67](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Vector3.ts#L67)

___

### randomInSphere

▸ **randomInSphere**(`radius`): [`Vector3`](Vector3.md)

Creates a random Vector3 inside a sphere with the given radius.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `radius` | `number` | The radius of the sphere. |

#### Returns

[`Vector3`](Vector3.md)

A new Vector3 instance representing a random point inside the sphere.

#### Defined in

[utils/Vector3.ts:101](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Vector3.ts#L101)

___

### randomOnSphere

▸ **randomOnSphere**(`radius`): [`Vector3`](Vector3.md)

Creates a random Vector3 on the surface of a sphere with the given radius.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `radius` | `number` | The radius of the sphere. |

#### Returns

[`Vector3`](Vector3.md)

A new Vector3 instance representing a random point on the sphere's surface.

#### Defined in

[utils/Vector3.ts:84](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Vector3.ts#L84)

___

### right

▸ **right**(): [`Vector3`](Vector3.md)

Creates a Vector3 representing the right direction.

#### Returns

[`Vector3`](Vector3.md)

A new Vector3 instance representing the right direction.

#### Defined in

[utils/Vector3.ts:75](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Vector3.ts#L75)

___

### up

▸ **up**(): [`Vector3`](Vector3.md)

Creates a Vector3 representing the up direction.

#### Returns

[`Vector3`](Vector3.md)

A new Vector3 instance representing the up direction.

#### Defined in

[utils/Vector3.ts:51](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Vector3.ts#L51)

___

### zero

▸ **zero**(): [`Vector3`](Vector3.md)

Creates a Vector3 with all components set to zero.

#### Returns

[`Vector3`](Vector3.md)

A new Vector3 instance with all components set to zero.

#### Defined in

[utils/Vector3.ts:27](https://github.com/justinfernald/christmas-tree-lights/blob/6ac5881/src/utils/Vector3.ts#L27)
