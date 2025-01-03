import { forwardRef } from 'react';
import { Properties } from 'csstype';
import React from 'react';

export type JustifyContent = Properties['justifyContent'];
export type AlignItems = Properties['alignItems'];
export type Direction = Properties['flexDirection'];

type BasicFlexProps = {
  /**
   * The children elements to be rendered inside the Flex component.
   */
  children?: React.ReactNode;

  /**
   * Whether to center items both vertically and horizontally.
   */
  center?: true | false;

  /**
   * The value for the flex.
   */
  flex?: Properties['flex'];

  /**
   * Whether flex items should wrap or not if they exceed the container's width.
   */
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';

  /**
   * The gap between flex items.
   */
  gap?: number | string;

  /**
   * Additional CSS class names for the flex container.
   */
  className?: string;

  /**
   * Additional div props such as id, data attributes, or event handlers to pass down to the div.
   */
  divProps?: Omit<React.HTMLAttributes<HTMLDivElement>, 'css' | 'className'>;
};

interface RowJustifyAlign extends BasicFlexProps {
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  horizontalAxis?: never;
  verticalAxis?: never;
}

interface RowJustifyVertical extends BasicFlexProps {
  justifyContent?: JustifyContent;
  verticalAxis?: AlignItems;
  horizontalAxis?: never;
  alignItems?: never;
}

interface RowAlignHorizontal extends BasicFlexProps {
  alignItems?: AlignItems;
  horizontalAxis?: JustifyContent;
  justifyContent?: never;
  verticalAxis?: never;
}

interface RowHorizontalVertical extends BasicFlexProps {
  horizontalAxis?: JustifyContent;
  verticalAxis?: AlignItems;
  justifyContent?: never;
  alignItems?: never;
}

type FlexRowProps = (
  | RowJustifyAlign
  | RowJustifyVertical
  | RowAlignHorizontal
  | RowHorizontalVertical
) & { center?: false };

// Column Interfaces for strict type safety
interface ColumnJustifyAlign extends BasicFlexProps {
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  horizontalAxis?: never;
  verticalAxis?: never;
}

interface ColumnJustifyHorizontal extends BasicFlexProps {
  justifyContent?: JustifyContent;
  horizontalAxis?: AlignItems;
  verticalAxis?: never;
  alignItems?: never;
}

interface ColumnAlignVertical extends BasicFlexProps {
  alignItems?: AlignItems;
  verticalAxis?: JustifyContent;
  horizontalAxis?: never;
  justifyContent?: never;
}

interface ColumnVerticalHorizontal extends BasicFlexProps {
  verticalAxis?: JustifyContent;
  horizontalAxis?: AlignItems;
  justifyContent?: never;
  alignItems?: never;
}

type FlexColumnProps = (
  | ColumnJustifyAlign
  | ColumnJustifyHorizontal
  | ColumnAlignVertical
  | ColumnVerticalHorizontal
) & { center?: false };

interface CenterProps extends BasicFlexProps {
  center: true;
  justifyContent?: never;
  alignItems?: never;
  horizontalAxis?: never;
  verticalAxis?: never;
}

type FlexProps =
  | (FlexRowProps & { flexDirection: 'row' | 'row-reverse' })
  | (FlexColumnProps & { flexDirection: 'column' | 'column-reverse' })
  | (CenterProps & { flexDirection: Direction; center: true });

/**
 * Renders a flexible container component.
 *
 * @param props - The props for the Flex component.
 * @returns The rendered Flex component.
 */
export const Flex = forwardRef((props: FlexProps, ref: React.Ref<HTMLDivElement>) => {
  const {
    children,
    justifyContent,
    alignItems,
    flexDirection = 'row', // default to row
    flexWrap,
    gap,
    className,
    divProps,
    center = false,
    flex,
    horizontalAxis,
    verticalAxis,
  } = props;

  const columnDirections: Direction[] = ['column', 'column-reverse'];
  const isColumn = columnDirections.includes(flexDirection);

  // Determine final alignment properties based on center and axis overrides
  const finalAlignmentJustifyContent = center
    ? 'center'
    : isColumn
      ? verticalAxis || justifyContent
      : horizontalAxis || justifyContent;

  const finalAlignmentAlignItems = center
    ? 'center'
    : isColumn
      ? horizontalAxis || alignItems
      : verticalAxis || alignItems;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        display: 'flex',
        flexDirection,
        flexWrap,
        justifyContent: finalAlignmentJustifyContent,
        alignItems: finalAlignmentAlignItems,
        gap,
        flex,
      }}
      {...divProps}
    >
      {children}
    </div>
  );
});

/**
 * Renders a flex container with a row direction.
 * @param props - The props for the FlexRow component.
 * @returns The rendered FlexRow component.
 */
export const FlexRow = forwardRef(
  (
    props: (FlexRowProps | CenterProps) & {
      flexDirection?: 'row' | 'row-reverse';
    },
    ref: React.Ref<HTMLDivElement>,
  ) => {
    return <Flex ref={ref} flexDirection="row" {...props} />;
  },
);

/**
 * Renders a flex container with a column direction.
 * @param props - The props for the FlexColumn component.
 * @returns The rendered FlexColumn component.
 */
export const FlexColumn = forwardRef(
  (
    props: (FlexColumnProps | CenterProps) & {
      flexDirection?: 'column' | 'column-reverse';
    },
    ref: React.Ref<HTMLDivElement>,
  ) => {
    return <Flex ref={ref} flexDirection="column" {...props} />;
  },
);

export const Text = () => {
  return <FlexRow center></FlexRow>;
};
