import React, { useState } from "react";
import Body from "../texts/body";
import Title from "../texts/title";
import SolidButton from "../buttons";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import { Background, Container, Card, ContainerTitle } from "./styles";

import blob from "../../assets/content.png";
import js from "../../assets/js.png";
import reactjs from "../../assets/REACT.png";
import css from "../../assets/css.png";
import html from "../../assets/html.png";
import java from "../../assets/JAVA.png";

const About = ({}) => {
  const data = [
    { image: js, caption: "Caption" },
    { image: reactjs, caption: "Caption" },
    { image: css, caption: "Caption" },
    { image: html, caption: "Caption" },
    { image: java, caption: "Caption" },
  ];

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const title = "Technologies"

  return (
    <Container>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        prevLabel=""
        nextLabel=""
      >
        {data.map((slide, i) => {
          return (
            <Carousel.Item>
              <img
                className="d-block w-14"
                src={slide.image}
                alt="slider image"
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
      <ContainerTitle>
        <Title text={title} />
      </ContainerTitle>
      <Card />
      <Background src={blob} alt="blob" />
    </Container>
  );
};

export default About;
