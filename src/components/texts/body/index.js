import React from 'react'
import PropTypes from 'prop-types'
import { StyledBody } from './styles'

const Body = ({ text, color, weight, size }) => (
  <StyledBody color={color} weight={weight} size={size} >
    {text}
  </StyledBody>
)

Body.propTypes = {
  color: PropTypes.any,
  text: PropTypes.string,
  size: PropTypes.oneOf([
    'small',
    'medium',
    'large'
  ]),
  weight: PropTypes.oneOf([
    'regular',
    'light',
    'bold'
  ])
}

export default Body