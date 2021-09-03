import styled from "styled-components";
import { createBreakpoint } from "styled-components-breakpoint";

const breakpoints = {
  xs: 425,
  sm: 960,
  md: 1478,
  lg: 2560,
};

const breakpoint = createBreakpoint(breakpoints);

export const Container = styled.div`
  width: 100%;
  position: absolute;
`;

export const Image = styled.img`
  position: absolute;
  width: 100%;
  z-index: -1;
  margin-top: -1em;
`;

export const Image2 = styled.img`
  width: 20%;
  margin-top: 20em;
  margin-left: 3em;
  opacity: 1;
  transition: 0.5s ease;
  display: block;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  text-align: inherit;
  margin-left: 26vw;
  margin-top: -18rem

  ${breakpoint("2560")`

  `}

${breakpoint("")`
    text-align: inherit;
    margin-left: 26vw;
    margin-top: -18rem
  `}
`;

export const BodyContainer = styled.div`
  padding: 1rem;
`;
