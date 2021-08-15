import React, { useEffect } from "react";
import { Container, Image, TextContainer, Icon, ButtonContainer } from "./styles";
import Title from "../../components/texts/title";
import Body from "../../components/texts/body";
import Button from "../../components/buttons/index";
import Picture from "../../assets/leandro.png";
import Linkedin from "../../assets/linkedin.png";

const Testimonials = ({ setScroll }) => {
  const title = "Testimonials";
  const body = "People I've worked with have said some nice things...";
  const testimonialsText = "Yannina is a hard working person, she catches up to speed easily and can achieve any task within the given amount of time. She has good debugging skills and great analytical/logical skills.";
  const testimonialsName = "Leandro Machado"
  const position = "ReactJS Developer & Unity Developer & VR/AR/MR Developer"
  const viewProfile = "View Profile"
  const github = "https://www.linkedin.com/in/leamachado/"
  const divRef = React.createRef();

  useEffect(() => {
    if (divRef && divRef.current) {
      setScroll(divRef.current.offsetTop);
    }
  }, [divRef, setScroll]);

  return (
    <Container ref={divRef}>
      <Title text={title} color="primary" />
      <Body text={body} color="primary" />
      <Image src={Picture} alt="Leandro Machado" />
      <TextContainer>
        <Body text={testimonialsText} color="primary" />
        <Body text={testimonialsName} color="primary" weight="bold" />
        <Body text={position} color="primary" />
        <ButtonContainer>
        <Icon src={Linkedin} alt="github" />
        <Button size="small" text={viewProfile} onClick={() => window.open(github, "_blank")} />
        </ButtonContainer>
      </TextContainer>
    </Container>
  );
};

export default Testimonials;
