import styled, { css } from 'styled-components'
import { colors } from '../../../global/colors'

export const StyledTitle = styled.p`
  font-size: 3em;
  font-weight: 400;
  margin-bottom: 0em;
  font-family: 'Russo One', sans-serif;
  color: ${({ color }) => {
    switch (color) {
      case 'primary': return colors.primary
      default: return colors.buttons.white
    }
  }};
`