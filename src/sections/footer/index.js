import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Title from "../../components/texts/title";
import Body from "../../components/texts/body";
import Form from "../../components/form";
import Socials from "../../content/socials";
import { Container, Content } from "./styles";

const Footer = ({}) => {
  const title = "Contact me";
  const body = "You can send me a message or contact me through my social networks";
  const copyright = "© 2021 - Yannina Munoz"

  return (
    <Container>
      <Title text={title} />
      <Body text={body} />
      <div style={{textAlign: "center"}}>
      <Content>
        <Form />
        <Socials />
      </Content>
      <Body text={copyright} />
      </div>
  
    </Container>
  );
};

export default Footer;
