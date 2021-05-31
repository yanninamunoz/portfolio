import React from 'react'
import PropTypes from 'prop-types'
import { StyledBody } from './styles'

const Body = ({ text, color }) => (
  <StyledBody color={color}>
    {text}
  </StyledBody>
)

Body.propTypes = {
  color: PropTypes.any,
  text: PropTypes.string
}

export default Body