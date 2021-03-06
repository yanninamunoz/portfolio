import React from "react";
import PropTypes from "prop-types";
import Icon from "../icon";
import { Container, Text, IconContainer } from "./styles";

const Input = ({ color, icon, size, name, placeholder, type, onChange }) => {
  return (
    <Container>
      <IconContainer>
        <Icon size={size} icon={icon} color={color} />
      </IconContainer>
      <Text
        name={name}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      />
    </Container>
  );
};

Input.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary"]),
  icon: PropTypes.node,
  size: PropTypes.string,
  type: PropTypes.oneOf(["email", "number", "textArea", "text"]),
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
};

export default Input;
