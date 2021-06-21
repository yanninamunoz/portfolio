import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import message from "../../assets/message.png";
import Title from "../../components/texts/title";
import Body from "../../components/texts/body";
import Icon from "../../components/icon"
import Form from "../../components/form"
import { Container, Image } from "./styles";

const Footer = ({}) => {
  const title = "Contact me";
  const body = "You can send me a message or contact me through my social networks"
  return (
    <Container>
      <Title text={title} />
      <Body text={body} />
      <Form />
    </Container>
  );
};

export default Footer;
