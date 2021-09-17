import styled from "styled-components";
import { colors } from "../../../global/colors";

export const StyledBody = styled.p`
  margin-top: 0.5em;
  font-size: 1.4em;
  font-family: "Russo One", sans-serif;

  font-weight: ${({ weight }) => {
    switch (weight) {
      case "light":
        return 200;
      case "bold":
        return 800;
      default:
        return 500;
    }
  }};

  font-size: ${({ size }) => {
    switch (size) {
      case "small":
        return "1em";
      case "large":
        return "2em";
      default:
        return "1.4em";
    }
  }};

  color: ${({ color }) => {
    switch (color) {
      case "primary":
        return colors.primary;
      case "secondary":
        return colors.body;
      default:
        return colors.buttons.white;
    }
  }};
`;
