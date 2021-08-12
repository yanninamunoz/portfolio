import styled from "styled-components";
import { colors } from "../../global/colors";

export const Container = styled.div`
  display: flex;
  margin-top: 127em;
  position: absolute;
  width: 100%;
  background-color: ${colors.primary};
  height: 20em;
`;

export const Image = styled.img`
  width: 40%;
  height: 40%;
`;

export const Content = styled.div`
  display: flex;
  align-self: center;
`;

export const ContentText = styled.div`
  align-self: center;
`