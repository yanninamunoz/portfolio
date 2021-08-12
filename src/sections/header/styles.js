import styled, {keyframes} from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: absolute;
`;

export const Image = styled.img`
  position: absolute;
  width: 100%;
  z-index: -1;
  margin-top: -1em;
`;

export const Image2 = styled.img`
  position: absolute;
  width: 20%;
  margin-top: 9em;
  margin-left: 70em;
  opacity: 1;
  transition: 0.5s ease;
  display: block;

`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  margin-top: 20em;
  margin-left: 4em;
`;

export const Styless = keyframes`
color: white;
0% {

text-shadow:
0 0 4px #fff,
0 0 11px #fff,
0 0 19px #fff,
0 0 40px #0fa,
0 0 80px #0fa,
0 0 90px #0fa,
0 0 100px #0fa,
0 0 150px #0fa;

}
`