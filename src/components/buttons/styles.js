import styled from "styled-components";
import { colors } from "../../global/colors";

export const StyledButton = styled.button`
  margin-top: 0.5em;
  justify-content: center;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  transition: ease background-color 250ms;
  border-style: none;
  border-radius: 5px;
  height: 3em;
  width: 15em;
  cursor: pointer;

  color: ${({ color }) => {
    switch (color) {
      case "secondary":
        return colors.primary;
      default:
        return colors.buttons.white;
    }
  }};

  background-color: ${({ color }) => {
    switch (color) {
      case "secondary":
        return colors.buttons.white;
      default:
        return colors.primary;
    }
  }};

  ${({ size }) => {
    switch (size) {
      case "small":
        return "font-size: 0.8em";
      case "large":
        return "font-size: 2em";
      default:
        return "font-size: 1.em";
    }
  }};

  :hover {
    background-color: ${({ color }) => {
      switch (color) {
        case "secondary":
          return colors.primary;
        default:
          return colors.buttons.white;
      }
    }};

    color: ${({ color }) => {
      switch (color) {
        case "secondary":
          return colors.buttons.white;
        default:
          return colors.primary;
      }
    }};

    border: 1px solid
      ${({ color }) => {
        switch (color) {
          case "secondary":
            return colors.buttons.white;
          default:
            return colors.primary;
        }
      }};
  }
`;

export const Line = styled.div`
  width: 0.5em;
`

export const Text = styled.p`
  font-family: "Russo One", sans-serif;
  font-size: 1.2em;
  margin-bottom: 0;
`;
