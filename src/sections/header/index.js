import React, {useEffect} from "react";
import Body from "../../components/texts/body";
import Title from "../../components/texts/title";
import Button from "../../components/buttons";
import head from "../../assets/head.png";
import me from "../../assets/me2.png";
import CV from "../../assets/YanninaMunoz_Developer.pdf";
import { title, body, contact, resume, launch } from "./helper";
import { Image, Image2, Content, Container, BodyContainer } from "./styles";

const Header = ({executeScrollForm, setScroll}) => {

  const divRef = React.createRef();

  useEffect(() => {
    if (divRef && divRef.current) {
      setScroll(divRef.current.offsetTop);
    }
  }, [divRef, setScroll]);

  return (
    <Container ref={divRef}>
      <Image src={head} alt="head" />
      <Image2 src={me} alt="head" />
      <Content>
        <Title text={title} size="large" color="primary" />
        <BodyContainer>
          <Body text={body} color="secondary" />
        </BodyContainer>
        <Button
          size="small"
          onClick={executeScrollForm}
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
