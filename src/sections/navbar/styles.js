import styled from "styled-components";
import { colors } from "../../global/colors";

export const Nav = styled.div`
  overflow: hidden;
  background-color: ${colors.primary};
  position: fixed;
  top: 0;
  z-index: 4;
  width: 100%;
  filter: opacity(96%);
`;

export const Link = styled.button`
  float: right;
  display: block;
  color: ${colors.buttons.white};
  text-align: center;
  margin-left: 1rem;
  margin-right: 2rem;
  border: none;
  background-color: transparent;
`;

export const HeaderWrapper = styled.header`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.primary};
`

export const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: ${colors.primary};
  position: fixed;
  top: 10vh;
  right: ${props => (props.open ? "0" : "-100%")};
  width: 100%;
  height: 90vh;
  transition: right 0.3s linear;
  z-index: 4;

  @media only screen and (min-width: 624px) {
    flex-direction: row;
    position: initial;
    height: auto;
    justify-content: center;
    background: ${colors.primary};
    
  }
`