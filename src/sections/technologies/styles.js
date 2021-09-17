import styled from "styled-components";
import { colors } from "../../global/colors";

export const CardContainer = styled.div`
  justify-content: center;
  margin-top: 5rem;

  @media only screen and (max-width: 2560px) {
    width: 95%;
    display: flex;
    flex-wrap: wrap;
  }

  @media (max-width: 950px) and (min-width: 320px) {
    display: flex;
    flex-flow: wrap;
    margin-top: 2rem;
  }
`;

export const Container = styled.div`
  position: absolute;
  width: 100%;
  text-align: -webkit-center;

  @media only screen and (max-width: 2560px) {
    margin-top: 47em !important;
  }

  @media only screen and (max-width: 1440px) {
    margin-top: 50em !important;
  }

  @media only screen and (max-width: 960px) {
    margin-top: 58em !important;
  }

  @media only screen and (max-width: 768px) {
    margin-top: 60em !important;
  }

  @media only screen and (max-width: 546px) {
    margin-top: 66em !important;
  }

  @media only screen and (max-width: 424px) {
    margin-top: 75em !important;
  }

  @media only screen and (max-width: 320px) {
    margin-top: 77em !important;
  }
`;

export const Card = styled.div`
  width: 100%;
  height: 30em;
  z-index: -1;
  margin-top: -26em;
  background-color: ${colors.primary};
  border-top-left-radius: 4em;
  border-top-right-radius: 4em;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  margin-left: 4em;
`;

export const ContainerTitle = styled.div`
  position: relative;
  text-align: center;
  margin-top: 2em;
  margin-bottom: 8em;
`;
