import styled from "styled-components";
import { colors } from "../../global/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledIcon = styled(FontAwesomeIcon)`
  color: ${({ color }) => {
    switch (color) {
      case "primary":
        return colors.primary;
      default:
        return colors.background;
    }
  }};
`;
