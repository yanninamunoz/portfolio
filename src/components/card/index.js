import React from "react";
import PropTypes from "prop-types";
import Body from "../texts/body";
import Title from "../texts/title";
import { Container, Content, CustomImage, MediaContent, Line } from "./styles";

const Card = ({ src, alt, title, body, color }) => (
  <Container>
    <MediaContent>
      {(src || alt) && <CustomImage src={src} alt={alt} />}
    </MediaContent>
    <Content>
      <Title color={color} size="small" text={title} />
      <Body color={color} text={body} />
    </Content>
  </Container>
);

Card.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  color: PropTypes.string,
};

export default Card;
