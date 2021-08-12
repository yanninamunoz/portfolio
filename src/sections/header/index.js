import React from "react";
import Body from "../../components/texts/body";
import Title from "../../components/texts/title";
import Button from "../../components/buttons";
import head from "../../assets/head.png";
import me from "../../assets/me.png";
import CV from "../../assets/YanninaMunoz_Developer.pdf";
import { title, body, contact, resume, launch } from "./helper";
import { Image, Image2, Content, Container } from "./styles";

const Header = () => {
  return (
    <Container>
      <Image src={head} alt="head" />
      <Image2 src={me} alt="head" />
      <Content>
        <Title text={title} size="large" color="primary" />
        <div style={{width: "60rem"}}>   <Body text={body} color="secondary" /></div>
     
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
