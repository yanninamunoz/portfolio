import styled from 'styled-components'
import { colors } from '../../global/colors'

export const Container = styled.div`
  position: absolute;
  margin-top: 48em;
  width: 100%;
  text-align: -webkit-center;
`

export const Card = styled.div`
  width: 100%;
  height: 30em;
  z-index: -1;
  margin-top: -26em;
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

export const ContainerTitle2 = styled.div`
  position: relative;
  text-align: center;
  margin-top: 6em;
  margin-bottom: -10em;
`

export const Card2 = styled.div`
  position: absolute;
  z-index: 2 !important;
  width: 100%;
  height: 10em;
  z-index: -1;
  margin-top: -43em;
  background-color: ${colors.primary};
`