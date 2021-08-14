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
