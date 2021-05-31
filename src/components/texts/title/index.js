import React from 'react'
import PropTypes from 'prop-types'
import { StyledTitle } from './styles'

const Title = ({ text, color }) => (
  <StyledTitle color={color}>
    {text}
  </StyledTitle>
)

Title.propTypes = {
  color: PropTypes.any,
  text: PropTypes.string
}

export default Title
