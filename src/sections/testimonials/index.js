import React, { useEffect } from "react";
import { title, body, testimonialsText, testimonialsName,
  position, viewProfile, github } from "./helper";
import { Container, Image, TextContainer,
  ButtonContainer, Section, SectionContainer, Content } from "./styles";
import Title from "../../components/texts/title";
import Body from "../../components/texts/body";
import Button from "../../components/buttons/index";
import Picture from "../../assets/leandro.png";
import Icon from "../../components/icon/index";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";


const Testimonials = ({ setScroll }) => {
  const divRef = React.createRef();

  useEffect(() => {
    if (divRef && divRef.current) {
      setScroll(divRef.current.offsetTop);
    }
  }, [divRef, setScroll]);

  return (
    <Container ref={divRef}>
      <Content>
        <Title size="large" text={title} color="primary" />
        <Body text={body} color="primary" />
      </Content>
      <Section>
        <SectionContainer>
          <Image src={Picture} alt="Leandro Machado" />
          <TextContainer>
            <Body text={testimonialsText} color="primary" />
            <Body text={testimonialsName} color="primary" weight="bold" />
            <Body text={position} color="primary" />
            <ButtonContainer>
              <Icon icon={faLinkedinIn} type="brands" />
              <Button
                size="small"
                text={viewProfile}
                onClick={() => window.open(github, "_blank")}
              />
            </ButtonContainer>
          </TextContainer>
        </SectionContainer>
      </Section>
    </Container>
  );
};

export default Testimonials;
