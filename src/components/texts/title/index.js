import React from 'react'
import PropTypes from 'prop-types'
import { StyledTitle } from './styles'

const Title = ({ text, color, size }) => (
  <StyledTitle color={color} size={size}>
    {text}
  </StyledTitle>
)

Title.propTypes = {
  size: PropTypes.oneOf([
    'small',
    'medium',
    'large'
  ]),
  color: PropTypes.string,
  text: PropTypes.string
}

export default Title
