import React from "react";
import Body from "../../components/texts/body";
import Title from "../../components/texts/title";
import Button from "../../components/buttons";
import head from "../../assets/head.png";
import me from "../../assets/me.png";
import CV from "../../assets/YanninaMunoz_Developer.pdf"

import { Image, Image2, Content, Container } from "./styles";

const Header = ({}) => {
  const title = "Hi, my name is Yannina.";
  const body = "I'm a web developer & programmer living in Montevideo, Uruguay.";
  const contact = "Contact me";
  const resume = "My resume";
  const launch = "launch";

  return (
    <Container>
      <Image src={head} alt="head" />
      <Image2 src={me} alt="head" />
      <Content>
        <Title text={title} color="primary" />
        <Body text={body} color='secondary' />
        <Button
          size="small"
          onClick={() => console.log("click")}
          text={contact}
        />
        <br />
        <Button
          onClick={() => window.open(CV, "_blank")}
          size="small"
          text={resume}
          icon={launch}
        />
      </Content>
    </Container>
  );
};

export default Header;
