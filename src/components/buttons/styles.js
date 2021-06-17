import styled from 'styled-components'
import { colors } from '../../global/colors'

export const StyledButton = styled.button`
  justify-content: center;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  transition: ease background-color 250ms;
  border-style: none;
  color: ${colors.buttons.white};
  background-color: ${colors.primary};
  border-radius: 30px;
  height: 3em;
  width: 12%;
  cursor: pointer;

  ${({ size }) => {
    switch (size) {
      case 'small':
        return 'font-size: 0.8em'
      case 'large':
        return 'font-size: 2em'
      default:
        return 'font-size: 1.em'
    }
  }};

  :active:enabled {
    background-color: ${colors.buttons.white};
  }

  :hover:enabled {
    background-color: ${colors.buttons.hover};
  }
`