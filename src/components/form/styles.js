import styled, {css} from "styled-components";

export const Line = styled.div`
  height: 1em;
`;

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 4em;
`;

export const disabled = css`

 display: none;`

 export const errorMessage = css`
  color: red;
  margin: -1.5em 0em 0.5em 0;
 `