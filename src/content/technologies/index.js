import React, { useState } from "react";
import Body from "../../components/texts/body";
import Title from "../../components/texts/title";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Card, Card2, ContainerTitle, ContainerTitle2 } from "./styles";

import blob from "../../assets/content.png";
import js from "../../assets/js.png";
import reactjs from "../../assets/REACT.png";
import css from "../../assets/css.png";
import html from "../../assets/html.png";
import java from "../../assets/JAVA.png";
import android from "../../assets/android.png"
import sql from "../../assets/sql.png"

const About = ({}) => {
  const data = [
    { image: js, caption: "Caption" },
    { image: reactjs, caption: "Caption" },
    { image: css, caption: "Caption" },
    { image: html, caption: "Caption" },
    { image: java, caption: "Caption" },
    { image: android, caption: "Caption" },
    { image: sql, caption: "Caption" },
  ];

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const title = "Technologies"
  const body = "Main technologies I work with"

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
                className="d-block w-20"
                src={slide.image}
                alt="slider image"
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
      <ContainerTitle>
        <Title text={title} />
        <Body text={body} />
      </ContainerTitle>
      <Card />
    </Container>
  );
};

export default About;
