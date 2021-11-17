import styled from "styled-components";
import { colors } from "../../../global/colors";

export const StyledTitle = styled.p`
  font-size: 3em;
  font-weight: 400;
  margin-bottom: 0em;
  font-family: "Russo One", sans-serif;

  color: ${({ color }) => {
    switch (color) {
      case "primary":
        return colors.primary;
      default:
        return colors.buttons.white;
    }
  }};

  font-weight: ${({ weight }) => {
    switch (weight) {
      case "light":
        return 200;
      case "bold":
        return 800;
      default:
        return 600;
    }
  }};

   font-size: ${({ size }) => {
     switch (size) {
       case "small":
         return '1em';
       case "large":
         return '3em';
       default:
         return '2em';
     }
   }};

   @media (max-width: 960px) and (min-width: 320px) {
    font-size: 1.4em;
  }
`;
