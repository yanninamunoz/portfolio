import styled from 'styled-components'
import { colors } from '../../../global/colors'
import { createBreakpoint } from "styled-components-breakpoint";

const breakpoints = {
  xs: 425,
  sm: 960,
  md: 1478,
  lg: 2560,
};

const breakpoint = createBreakpoint(breakpoints);

export const StyledTitle = styled.p`
  font-size: 3em;
  font-weight: 400;
  margin-bottom: 0em;
  font-family: 'Russo One', sans-serif;

  color: ${({ color }) => {
    switch (color) {
      case 'primary': return colors.primary
      default: return colors.buttons.white
    }
  }};

  font-weight: ${({ weight }) => {
    switch (weight) {
      case 'light': return 200;
      case 'bold': return 800;
      default: return 600
    }
  }};

  ${breakpoint("2560")`
   font-size: ${({ size }) => {
    switch (size) {
      case 'small': return `1em`;
      case 'large': return `4em`;
      default: return `3em`
    }
  }};
`}
 
  ${breakpoint("450")`
   font-size: 2.5rem;
  `}
`