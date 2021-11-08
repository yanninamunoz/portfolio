import styled from "styled-components";
import { colors } from "../../global/colors";

export const Container = styled.div`
  z-index: 0;
  display: flex;
  flex-direction: column;
  height: 8em;
  width: 33vw;
  background-color: ${colors.buttons.white};
  justify-content: center;

  :hover {
    transform: scale(1.1);
    transition: transform 0.7s;
    filter: inherit;
  }

  @media (max-width: 2560px) and (min-width: 960px) {
    filter: grayscale(100%); 
  }
`;

export const CustomImage = styled.img`
  z-index: 1;
  width: 3rem;
  padding: 0.5em;
  object-fit: cover;
  align-self:center;
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
