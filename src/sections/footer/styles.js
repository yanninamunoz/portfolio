import styled from "styled-components"
import { colors } from "../../global/colors"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3em;
  height: 35em;
  background-color: ${colors.primary};
`

export const Image = styled.img`
  width: 15%;
`