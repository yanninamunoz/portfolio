import styled from 'styled-components'
import { colors } from '../../global/colors'

export const Container = styled.div`
  position: absolute;
  margin-top: 60em;
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
  margin-left: 4em;
`

export const ContainerTitle = styled.div`
  position: relative;
  text-align: center;
  margin-top: 2em;
  margin-bottom: 8em;
`

export const CardContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  margin-top: 5em;
  margin-bottom: 5em;
  width: 90%;
`