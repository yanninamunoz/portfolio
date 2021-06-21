import styled from "styled-components";
import { colors } from "../../global/colors";

export const StyledSpan = styled.span`
  font-size: 1.4em;
  color: ${({ color }) => (color ? colors.buttons.white : "none")};
  ${({ size }) => {
    switch (size) {
      case "small":
        return `font-size: 1.4em`;
      case "large":
        return `font-size: 4em`;
      default:
        return `font-size: 3em`;
    }
  }};
`;
