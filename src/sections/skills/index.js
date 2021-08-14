import React, { useEffect } from "react";
import Title from "../../components/texts/title";
import Body from "../../components/texts/body";
import { body, title, data } from "./helper";
import { Container, Column, Content, Section,
  Image, SectionContainer } from "./styles";

const Skills = ({ setScroll }) => {
  const divRef = React.createRef();

  useEffect(() => {
    if (divRef && divRef.current) {
      setScroll(divRef.current.offsetTop);
    }
  }, [divRef, setScroll]);

  return (
    <Container ref={divRef}>
      <Content>
        <Title text={title} size="large" />
        <Body text={body} />
      </Content>
      <Section>
        <SectionContainer>
          {data.map((i) => {
            return (
              <Column key={i.id}>
                <Image src={i.src} alt={i.text} />
                <Body text={i.text} color="primary" weight="bold" />
                {i.body.map((j) => {
                  return <Body text={j} color="primary" />;
                })}
              </Column>
            );
          })}
        </SectionContainer>
      </Section>
    </Container>
  );
};

export default Skills;
