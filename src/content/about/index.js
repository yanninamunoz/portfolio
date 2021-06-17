import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Technologies from "../technologies/index"
import { Background, Container } from "./styles";
import blob from "../../assets/content.png";

const About = ({}) => {

  return (
    <Container>
      <Technologies/>
      <Background src={blob} alt="blob" />
    </Container>
  );
};

export default About;
