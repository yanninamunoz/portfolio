import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Title from "../../components/texts/title";
import Body from "../../components/texts/body";
import Form from "../../components/form";
import Socials from "../../content/socials";
import { title, body, copyright } from "./helper";
import { Container, Content, Content2 } from "./styles";

const Footer = () => (
  <Container>
    <Title text={title} />
    <Body text={body} />
    <Content2>
      <Content>
        <Form />
        <Socials />
      </Content>
      <Body text={copyright} />
    </Content2>
  </Container>
);

export default Footer;
