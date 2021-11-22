import styled from "styled-components";

export const Container = styled.div`
  align-self: center;
  margin-top: 5em;
  margin-bottom: 2em;
  display: flex;
  flex-direction: row;

  @media (max-width: 960px) and (min-width: 320px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1em;
  place-content: center;

  @media (max-width: 425px) and (min-width: 320px) {
    white-space: pre;
  }
`;

export const Image = styled.img`
  width: 1.5rem;
  margin-right: 1rem;
  margin-left: 1rem;
`;

export const Link = styled.a`
  text-decoration: none;
`;

export const TextContainer = styled.div`
  margin-left: 1em;
  margin-right: 1em;
`;
