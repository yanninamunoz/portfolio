import React from "react";
import PropTypes from "prop-types";
import { Container, Content, CustomImage, MediaContent, Text } from "./styles";

const Card = ({ src, alt, title, body, color }) => (
  <Container>
    <MediaContent>
      {(src || alt) && <CustomImage src={src} alt={alt} />}
    </MediaContent>
    <Content>
      <Text>{title}</Text>
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
