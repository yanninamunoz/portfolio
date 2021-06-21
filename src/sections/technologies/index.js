import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TechnologiesContent from "../../content/technologies"
import { Background, Container } from "./styles";
import blob from "../../assets/content.png";

const Technologies = ({}) => {

  return (
    <Container>
      <TechnologiesContent/>
      <Background src={blob} alt="blob" />
    </Container>
  );
};

export default Technologies;
