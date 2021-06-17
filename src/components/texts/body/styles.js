import styled, { css } from 'styled-components'
import { colors } from '../../../global/colors'

export const StyledBody = styled.p`
  margin-top: 0.5em;
  font-size: 1.4em;
  font-family: 'Russo One', sans-serif;
  color: ${({ color }) => {
    switch (color) {
      case 'primary': return colors.primary
      case 'secondary': return colors.body
      default: return colors.buttons.white
    }
  }};
`