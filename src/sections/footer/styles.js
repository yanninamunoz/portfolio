import styled from "styled-components";
import { colors } from "../../global/colors";

export const Container = styled.div`
  position: absolute;
  width: 100%;
  margin-top: 240em;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3em;
  height: 49em;
  background-color: ${colors.primary};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Content2 = styled.div`
  text-align: center;
`;
