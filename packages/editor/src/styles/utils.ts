import { CSSObject, css } from '@emotion/react';
import { CSSProperties } from '@emotion/serialize/types';
import { Property } from 'csstype';

import { standardShadows, standardSizes, transitionTimes } from './theme';

export type StandardSizeNumber = keyof typeof standardSizes | number;

export const getStandardSizes = (size: StandardSizeNumber): number =>
  typeof size === 'number' ? size : standardSizes[size];

export const createStandardSizing =
  (cssProp: keyof CSSProperties) =>
  (size: StandardSizeNumber): CSSObject => ({
    [cssProp]: typeof size === 'number' ? size : standardSizes[size],
  });

export const absolute = (
  top?: number,
  right?: number,
  bottom?: number,
  left?: number,
): CSSObject => ({
  position: 'absolute',
  top,
  right,
  bottom,
  left,
});

export const relative = (
  top?: number,
  right?: number,
  bottom?: number,
  left?: number,
): CSSObject => ({
  position: 'relative',
  top,
  right,
  bottom,
  left,
});

export const borderRadius = createStandardSizing('borderRadius');

export const border = (color: string, size = '2px') => ({
  border: `${size} solid ${color}`,
});

export const padding = createStandardSizing('padding');

export const paddingHorizontal = (size: StandardSizeNumber): CSSObject => ({
  paddingLeft: getStandardSizes(size),
  paddingRight: getStandardSizes(size),
});

export const paddingVertical = (size: keyof typeof standardSizes): CSSObject => ({
  paddingTop: getStandardSizes(size),
  paddingBottom: getStandardSizes(size),
});

export const margin = createStandardSizing('margin');

export const marginHorizontalCenter: CSSObject = {
  marginLeft: 'auto',
  marginRight: 'auto',
};

export const marginHorizontal = (size: StandardSizeNumber): CSSObject => ({
  marginLeft: getStandardSizes(size),
  marginRight: getStandardSizes(size),
});

export const marginVertical = (size: keyof typeof standardSizes): CSSObject => ({
  marginTop: getStandardSizes(size),
  marginBottom: getStandardSizes(size),
});

export const flex = (direction: Property.FlexDirection = 'row'): CSSObject => ({
  display: 'flex',
  flexDirection: direction,
});

export const flexValue = (value = 1): CSSObject => ({
  flex: value,
});

export const font = (
  family?: Property.FontFamily,
  size?: Property.FontSize,
  weight?: Property.FontWeight,
): CSSObject => ({
  fontFamily: family,
  fontSize: size,
  fontWeight: weight,
});

export const flex1 = flexValue(1);
export const flex2 = flexValue(2);
export const flex3 = flexValue(3);
export const flex4 = flexValue(4);
export const flex5 = flexValue(5);

export const flexCenter: CSSObject = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const flexCenterVertical: CSSObject = {
  display: 'flex',
  alignItems: 'center',
};

export const flexCenterHorizontal: CSSObject = {
  display: 'flex',
  justifyContent: 'center',
};

export const flexBetween: CSSObject = {
  display: 'flex',
  justifyContent: 'space-between',
};

export const flexAround: CSSObject = {
  display: 'flex',
  justifyContent: 'space-around',
};

export const flexEvenly: CSSObject = {
  display: 'flex',
  justifyContent: 'space-evenly',
};

export const flexColumn = flex('column');

export const fullSize: CSSObject = {
  width: '100%',
  height: '100%',
};

export const fullWidth: CSSObject = {
  width: '100%',
};

export const fullHeight: CSSObject = {
  height: '100%',
};

export const imageCover: CSSObject = {
  objectFit: 'cover',
  ...fullSize,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} as any;

export const imageContain = css([
  {
    objectFit: 'contain',
  },
  fullSize,
]);

export const dropShadow = (
  size: keyof typeof standardShadows,
  inset?: boolean,
): CSSObject => ({
  boxShadow: inset
    ? 'inset ' + standardShadows[size].replace('),', '), inset ')
    : standardShadows[size],
});

export const textShadow = (size: keyof typeof standardShadows): CSSObject => ({
  textShadow: standardShadows[size],
});

export const center: CSSObject = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

export const centerHorizontal: CSSObject = {
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
};

export const centerVertical: CSSObject = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
};

export const transition = (time: keyof typeof transitionTimes): CSSObject => ({
  transition: `all ${transitionTimes[time]}`,
});

export const clearTextStyle: CSSObject = {
  textDecoration: 'none',
  color: 'inherit',
};

export const property =
  <T extends keyof CSSProperties>(prop: T) =>
  (value: CSSProperties[T]): CSSObject =>
    ({
      [prop]: value,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }) as any;
