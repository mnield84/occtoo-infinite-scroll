import styled from "@emotion/styled";
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  shadow,
  ShadowProps,
  typography,
  TypographyProps,
} from "styled-system";

export type BoxProps = ColorProps &
  BackgroundProps &
  BorderProps &
  PositionProps &
  LayoutProps &
  FlexboxProps &
  GridProps &
  ShadowProps &
  SpaceProps;

export const Box = styled.div<BoxProps>`
  ${compose(
    space,
    layout,
    color,
    border,
    position,
    background,
    flexbox,
    shadow
  )}
`;

Box.displayName = "Box";

export const Flex = styled(Box)`
  display: flex;
  ${compose(flexbox, grid, shadow)}
`;

Flex.displayName = "Flex";

export const Grid = styled(Box)`
  display: grid;
  ${compose(grid, flexbox, shadow)}
`;

Grid.displayName = "Grid";
