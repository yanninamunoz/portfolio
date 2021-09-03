import styled from "styled-components";
import { createBreakpoint } from "styled-components-breakpoint";

const breakpoints = {
  xs: 320,
  sm: 425,
  md: 768,
  xmd: 950,
  lg: 2560,
};

const breakpoint = createBreakpoint(breakpoints);

export const Container = styled.div`
  position: absolute;
  width: 100%;
  margin-top: 192rem;
  text-align: -webkit-center;

  ${breakpoint("md")`
    margin-top: 188rem;
  `}

  ${breakpoint("949")`
    margin-top: 204rem;
  `}

  ${breakpoint("2560")`
    margin-top:231rem;
  `}
`;

export const Content = styled.div`
  background-color: white;
  width: 80%;
  border-radius: 3rem;
  align-self: center;
`;

export const SectionContainer = styled.div`
  margin-top: 4rem;
  place-self: center;
  display: flex;
  justify-content: center;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  align-items: 4rem;
  align-items: center;
`;

export const Section = styled.div`
  background-color: white;
  width: 80%;
  border-radius: 3rem;
  align-self: center;
`;
export const Image = styled.img`
  width: 12rem;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

export const Icon = styled.img`
  filter: invert(0.8);
  width: 2rem;
  margin-right: 1rem;
`;

export const ButtonContainer = styled.div``;
