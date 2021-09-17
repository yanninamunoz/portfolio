import styled from "styled-components";
import { colors } from "../../global/colors";

export const Container = styled.div`
  position: absolute;
  width: 100%;
  margin-top: 192rem;
  text-align: -webkit-center;

  @media only screen and (max-width: 2560px) {
    margin-top: 174em !important;
  }

  @media only screen and (max-width: 1024px) {
    margin-top: 175em !important;
  }

  @media only screen and (max-width: 1003px) {
    margin-top: 175em !important;
  }

  @media only screen and (max-width: 1002px) {
    margin-top: 196em !important;
  }

  @media only screen and (max-width: 960px) {
    margin-top: 212em !important;
  }

  @media only screen and (max-width: 949px) {
    margin-top: 243em !important;
  }

  @media only screen and (max-width: 769px) {
    margin-top: 247em !important;
  }

  @media only screen and (max-width: 663px) {
    margin-top: 300em !important;
  }

  @media (max-width: 375px) and (min-width: 320px) {
    margin-top: 312em !important;
  }
`;

export const Content = styled.div`
  width: 80%;
  border-radius: 3rem;
  align-self: center;
`;

export const SectionContainer = styled.div`
  margin-top: 4rem;
  place-self: center;
  display: flex;
  justify-content: center;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  align-items: 4rem;
  align-items: center;
`;

export const Section = styled.div`
  width: 80%;
  border-radius: 3rem;
  align-self: center;
`;
export const Image = styled.img`
  width: 12rem;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

export const Icon = styled.img`
  filter: invert(0.8);
  width: 2rem;
  margin-right: 1rem;
`;

export const ButtonContainer = styled.div``;
