import styled from "styled-components";
import { colors } from "../../global/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 127em;
  position: absolute;
  width: 100%;
  background-color: ${colors.primary};
  height: 52rem;
  place-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -13rem;
`;

export const Image = styled.img`
  width: 13rem;
  padding: 2rem;
`;

export const SectionContainer = styled.div`
  margin-top: 4rem;
  place-self: center;
  display: flex;
  justify-content: center;
  justify-content: space-around;
`;

export const Section = styled.div`
  background-color: white;
  width: 80%;
  border-radius: 3rem;
  border: 1px solid #333333;
  margin-top: 3rem;
  height: 50rem;
  margin-bottom: -29rem;
  align-self: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
