import styled from "styled-components";
import { colors } from "../../global/colors";

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
    transform: scale(1.4);
    transition: transform 0.7s;
    border: 1px solid ${colors.primary};
  }
`;

export const Content = styled.div`
  margin: 15.58px 22px 2.25px 10px;
`;

export const CustomImage = styled.img`
  z-index: 1;
  width: 20%;
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
