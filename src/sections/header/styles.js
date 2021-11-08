import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 12em;
`;

export const Image = styled.img`
  position: absolute;
  width: 100%;
  z-index: -1;
  margin-top: -1em;

  @media (max-width: 768px) and (min-width: 320px) {
    display: none;
  }
`;

export const Image2 = styled.img`
  height: 19em;
  width: 19em;
  margin-top: 21em;
  margin-left: 2em;
  margin-right: 2em;
  opacity: 1;
  transition: 0.5s ease;
  display: block;
  align-self: center;

  @media (max-width: 960px) and (min-width: 320px) {
    margin-top: 20em;
    height: inherit;
    width: 14em;
  }
`;

export const BodyContainer = styled.div`
  padding: 1em;

  @media (max-width: 960px) and (min-width: 320px) {
    text-align: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 2;
  text-align: inherit;
  margin-top: -18em;
  padding: 1em;

  @media (max-width: 960px) and (min-width: 320px) {
    flex-direction: column;
  }
`;

export const Section = styled.div`
  margin-top: 28em;

  @media (max-width: 960px) and (min-width: 320px) {
    text-align: -webkit-center;
    margin-top: 3em;
  }
`;
