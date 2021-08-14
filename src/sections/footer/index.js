import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Title from "../../components/texts/title";
import Body from "../../components/texts/body";
import Form from "../../components/form";
import Socials from "../socials";
import { title, body, copyright } from "./helper";
import { Container, Content, Content2 } from "./styles";

const Footer = ({ setScroll }) => {
  const divRef = React.createRef();

  useEffect(() => {
    if (divRef && divRef.current) {
      setScroll(divRef.current.offsetTop);
    }
  }, [divRef, setScroll]);

  return (
    <Container ref={divRef}>
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
};

export default Footer;
