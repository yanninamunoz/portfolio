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
  width: 25%;
  margin-top: 9em;
  margin-left: 60em;
  opacity: 1;
  transition: 0.5s ease;
  display: block;
  border-radius: 150px;

  :hover {
    border: 2px solid ${colors.buttons.white};
    background-size: contain;
    background-position: right;
    transform: rotateX(-4) rotateY(20);
    border-radius: 190px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  margin-top: 8em;
  margin-left: 4em;
`;
