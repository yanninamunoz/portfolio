import styled from "styled-components";
import { colors } from "../../global/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3em;
  text-align: center;
  background-color: ${colors.primary};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Content2 = styled.div`
  text-align: center;
`;
