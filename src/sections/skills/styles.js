import styled from "styled-components";
import { colors } from "../../global/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  background-color: ${colors.primary};
  place-content: center;

  @media only screen and (max-width: 2560px) {
    margin-top: 105em !important;
  }

  @media only screen and (max-width: 1440px) {
    margin-top: 115em !important;
  }

  @media (max-width: 1200px) and (min-width: 1024px) {
    margin-top: 117em !important;
  }

  @media only screen and (max-width: 1002px) {
    margin-top: 219vw !important;
  }

  @media only screen and (max-width: 960px) {
    margin-top: 142em !important;
  }

  @media only screen and (max-width: 667px) {
    margin-top: 196em !important;
  }

  @media only screen and (max-width: 375px) {
    margin-top: 206em !important;
  }
`;

export const Content = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3em;
  padding: 1em;
`;

export const Image = styled.img`
  width: 7rem;
  padding: 1rem;
`;

export const SectionContainer = styled.div`
  margin-top: 4rem;
  place-self: center;
  display: flex;
  justify-content: center;
  justify-content: space-around;
  flex-direction: column;

  @media only screen and (min-width: 950px) {
    flex-direction: row;
  }
`;

export const Section = styled.div`
  background-color: ${colors.backgorund};
  width: 80%;
  border-radius: 3rem;
  margin-top: 3rem;
  margin-bottom: -29rem;
  align-self: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
