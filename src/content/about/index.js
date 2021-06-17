import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Technologies from "../technologies/index"
import { Background } from "./styles";
import blob from "../../assets/content.png";

const About = ({}) => {

  return (
    <>
      <Technologies/>
      <Background src={blob} alt="blob" />
    </>
  );
};

export default About;
