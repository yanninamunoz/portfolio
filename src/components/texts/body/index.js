import React from 'react'
import PropTypes from 'prop-types'
import { StyledBody } from './styles'

const Body = ({ text, color, weight }) => (
  <StyledBody color={color} weight={weight} >
    {text}
  </StyledBody>
)

Body.propTypes = {
  color: PropTypes.any,
  text: PropTypes.string,
  weight: PropTypes.oneOf([
    'regular',
    'light',
    'bold'
  ])
}

export default Body