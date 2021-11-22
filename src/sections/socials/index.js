import React from "react";
import { data } from "./helper";
import Body from "../../components/texts/body";
import { Container, Content, Link, TextContainer } from "./styles";
import Icon from "../../components/icon/index";

const Socials = () => (
  <Container>
    {data.map((i) => {
      return (
        <Content key={i.id}>
          <Icon size="lg" icon={i.icon} color="secondary" />
          <TextContainer>
            {i.link && (
              <Link href={i.link}>
                <Body text={i.text} />
              </Link>
            )}
            {!i.link && <Body text={i.text} />}
          </TextContainer>
        </Content>
      );
    })}
  </Container>
);

export default Socials;
