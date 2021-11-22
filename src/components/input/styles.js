import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: white;
  flex: 1;
  flex-direction: row;
  align-items: center;
  border: 1px solid #ccc;
  text-indent: 5px;
  border-radius: 5px;
  resize: none;
  width: 35vw;

  @media (max-width: 960px) and (min-width: 320px) {
    width: 65vw;
  }
`;

export const Text = styled.input`
  border-style: none;
  height: 2.5em;
  width: 35vw;

  :focus {
    outline: none;
  }

  @media (max-width: 960px) and (min-width: 320px) {
    width: 50vw;
  }
`;

export const IconContainer = styled.div`
  padding: 5;
`;
