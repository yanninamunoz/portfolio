import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  position: absolute;
`

export const Image = styled.img`
  position: absolute;
  width: 100%;
  z-index: -1;
  margin-top: -1em;
`

export const Image2 = styled.img`
  position: absolute;
  width: 18%;
  margin-top: 9em;
  margin-left: 49em;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  margin-top: 10em;
  margin-left: 4em;
`

export const Body = styled.p`
  font-size: 1.4em;
  margin-bottom: 3em;
`

export const Button = styled.button`
  justify-content: space-evenly;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  transition: ease background-color 250ms;
  border-style: none;
  font-size: 1.3em;
  color: #fafafa;
  background-color: #0033ff;
  border-radius: 30px;
  height: 2em;
  width: 20%;
  cursor: pointer;

  :active:enabled {
    background-color: #fafafa;
  }

  :hover:enabled {
    background-color: #0026bc;
  }
`