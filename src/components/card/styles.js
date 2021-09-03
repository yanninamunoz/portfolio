import styled from "styled-components";
import { colors } from "../../global/colors";
import { createBreakpoint } from "styled-components-breakpoint";

const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 960,
};

const breakpoint = createBreakpoint(breakpoints);

export const Container = styled.div`
  z-index: 0;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  width: 285px;
  background-color: ${colors.buttons.white};
  margin: 1em 1em 1em 1em;
  transition: transform 0.2s;

  :hover {
    filter: inherit;
    transform: scale(1.4);
    transition: transform 0.7s;
  }

  ${breakpoint("lg")`
     filter: grayscale(100%); 
  `}
`;

export const Content = styled.div`
  margin: 15.58px 22px 2.25px 10px;
`;

export const CustomImage = styled.img`
  z-index: 1;
  width: 3rem;
  padding: 0.5em;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  object-fit: cover;
  object-position: center center;
  cursor: pointer;
`;

export const MediaContent = styled.div`
  justify-content: center;
  border-radius: 5px;
  background-color: ${colors.buttons.hover};
`;

export const Text = styled.div`
  font-size: 1rem;
  font-weight: 700;
  font-family: "Russo One", sans-serif;
`;
