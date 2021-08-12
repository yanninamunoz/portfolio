import React, { useState } from "react";
import Body from "../../components/texts/body";
import Card3 from "../../components/card";
import Title from "../../components/texts/title";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { data, data2 } from "./helper";
import { Container, Card, ContainerTitle, CardContainer } from "./styles";

const About = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const title = "Technologies";
  const body = "Main technologies I work with";

  return (
    <Container>
      <ContainerTitle>
        <Title size="large" text={title} />
        <Body text={body} />
      </ContainerTitle>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        prevLabel=""
        nextLabel=""
      >
        {data.map((slide) => {
          return (
            <Carousel.Item key={slide.id}>
              <img
                className="d-block w-20"
                src={slide.image}
                alt="slider image"
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
      <Card />
      <CardContainer>
        {data2.map((i) => {
          return (
            <div key={i.id}>
              <Card3
                color="primary"
                title={i.title}
                src={i.image}
                alt="image_default"
              />
            </div>
          );
        })}
      </CardContainer>
    </Container>
  );
};

export default About;
