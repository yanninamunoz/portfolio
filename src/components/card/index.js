import React from "react";
import PropTypes from "prop-types";
import { Container, CustomImage, Text } from "./styles";

const Card = ({ src, alt, title, body, color }) => (
  <Container>
      {src && <CustomImage src={src} alt={alt} />}
      <Text>{title}</Text>
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
