import styled from "styled-components";
import { colors } from "../../global/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.primary};
  place-content: center;
  margin-bottom: 31em;
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
  background-color: ${colors.background};
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
