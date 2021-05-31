import React from "react";
import Body from "../texts/body"
import Title from "../texts/title"
import head from "../../assets/head.png";
import me from "../../assets/me.png";

import {
  Image,
  Image2,
  Content,
  Button,
  Container,
  ContentButton,
} from "./styles";

const Header = ({}) => {
    const title= "Hi, my name is Yannina."
    const body= "I'm a web developer & programmer living in Montevideo, Uruguay."
  return (
    <Container>
      <Image src={head} alt="head" />
      <Image2 src={me} alt="head" />
      <Content>
        <Title text={title} />
        <Body text={body} />
        <Button onClick={() => console.log("click")}>Contact me</Button>
      </Content>
    </Container>
  );
};

export default Header;
