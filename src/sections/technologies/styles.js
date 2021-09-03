import styled from "styled-components";
import { colors } from "../../global/colors";
import { createBreakpoint } from "styled-components-breakpoint";

const breakpoints = {
  xs: 0,
  sm: 576,
  md: 1478,
  lg: 2560,
};

const breakpoint = createBreakpoint(breakpoints);

export const CardContainer = styled.div`
  justify-content: center;
  margin-top: 5rem;

  ${breakpoint("950")`
    display: grid;
    grid-template-columns: repeat(1, 1fr 2fr);
  `}

  ${breakpoint("1478")`
    display: flex;
    flex-flow: wrap;
    margin-top: 2rem;
  `}
`;

export const Container = styled.div`
  position: absolute;
  margin-top: 60em;
  width: 100%;
  text-align: -webkit-center;
`;

export const Card = styled.div`
  width: 100%;
  height: 30em;
  z-index: -1;
  margin-top: -26em;
  background-color: ${colors.primary};
  border-top-left-radius: 4em;
  border-top-right-radius: 4em;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  margin-left: 4em;
`;

export const ContainerTitle = styled.div`
  position: relative;
  text-align: center;
  margin-top: 2em;
  margin-bottom: 8em;
`;
