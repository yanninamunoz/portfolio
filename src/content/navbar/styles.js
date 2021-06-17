import styled, { css } from 'styled-components'
import { colors } from '../../global/colors'

export const Nav = styled.div`
  overflow: hidden;
  background-color: ${colors.primary};
  position: fixed;
  top: 0;
  z-index: 4;
  width: 100%;
`

export const Link = styled.a`
  float: left;
  display: block;
  color: ${colors.buttons.link};
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;

  :hover {
    background: ${colors.buttons.hover};
    color: black;
  }
`