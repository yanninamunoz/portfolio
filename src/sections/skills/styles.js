import styled from "styled-components";
import { colors } from "../../global/colors";
import { createBreakpoint } from "styled-components-breakpoint";

const breakpoints = {
  xs: 320,
  sm: 425,
  md: 768,
  lg: 950,
};

const breakpoint = createBreakpoint(breakpoints);

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  width: 100%;
  background-color: ${colors.primary};
  height: 34rem;
  place-content: center;

  ${breakpoint("lg")`
    margin-top: 127em;
  `}

  ${breakpoint("2560")`
    margin-top: 143rem;
  `}
`;

export const Content = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
`;

export const Image = styled.img`
  ${breakpoint("sm")`
    width: 9rem;
    padding: 2rem;
 `}
  ${breakpoint("2560")`
    width: 6rem;
    padding: 1rem;
 `}
`;

export const SectionContainer = styled.div`
  margin-top: 4rem;
  place-self: center;
  display: flex;
  justify-content: center;
  justify-content: space-around;

  ${breakpoint("md")`
    flex-direction: row;
 `}

  ${breakpoint("2560")`
    flex-direction:column;
 `}
`;

export const Section = styled.div`
  background-color: white;
  width: 80%;
  border-radius: 3rem;
  margin-top: 3rem;
  height: 50rem;
  margin-bottom: -29rem;
  align-self: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
