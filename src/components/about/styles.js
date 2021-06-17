import styled from 'styled-components'
import { colors } from '../../global/colors'

export const Container = styled.div`
  position: absolute;
  margin-top: 40em;
  width: 100%;
  text-align: -webkit-center;
`

export const Background = styled.img`
  width: 100%;
  height: 50em;
  z-index: -1;
  margin-top: -11em;
`

export const Card = styled.img`
  width: 100%;
  height: 25em;
  z-index: -1;
  margin-top: -8em;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2);
  background-color: ${colors.primary};
  border-top-left-radius: 4em;
  border-top-right-radius: 4em;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  margin-top: 8em;
  margin-left: 4em;
`

export const ContainerTitle = styled.div`
  position: relative;
  text-align: center;
  margin-top: 6em;
  margin-bottom: -10em;
`