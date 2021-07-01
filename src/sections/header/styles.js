import styled from "styled-components";
import { colors } from "../../global/colors"

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
  position: absolute;
  width: 20%;
  margin-top: 9em;
  margin-left: 70em;
  opacity: 1;
  transition: 0.5s ease;
  display: block;

`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  margin-top: 14em;
  margin-left: 4em;
`;
