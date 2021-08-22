import styled from 'styled-components'
import { createBreakpoint } from "styled-components-breakpoint";

const breakpoints = {
  xs: 960,
  sm: 576,
  md: 1478,
  lg: 2560,
};

const breakpoint = createBreakpoint(breakpoints);

export const Container = styled.div`
  align-self: center;
  margin-top: 5em;
  
  margin-bottom: 2em;


${breakpoint("2560")`
display: flex;
flex-direction: column;
`}
  ${breakpoint("xs")`
    flex-direction: row;
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1em;
  place-content: center;

 
`

export const Image = styled.img`
  width: 7%;
  margin-right: 1em;
`

export const Link = styled.a`
  text-decoration: none;
`