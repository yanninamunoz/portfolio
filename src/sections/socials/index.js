import React from "react";
import { data } from "./helper";
import Body from "../../components/texts/body";
import { Container, Image, Content, Link } from "./styles";

const Socials = () => (
  <Container>
    {data.map((i) => {
      return (
        <Content key={i.id}>
          <Image src={i.image} alt={i.text} />
          {i.link && (
            <Link href={i.link}>
              <Body text={i.text} />
            </Link>
          )}
          {!i.link && <Body text={i.text} />}
        </Content>
      );
    })}
  </Container>
);

export default Socials;
