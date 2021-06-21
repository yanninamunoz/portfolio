import React from "react";
import PropTypes from "prop-types";
import { StyledButton, Text } from "./styles";
import Icon from "../icon";

const Button = ({ value, type, text, onClick, size, icon, color }) => (
  <StyledButton value={value} type={type} onClick={onClick} size={size} color={color}>
    {text && <Text>{text}</Text>}
    {icon && <Icon icon={icon} color={color} size="small" />}
  </StyledButton>
);

Button.propTypes = {
  download: PropTypes.string,
  value: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  color: PropTypes.oneOf(["primary", "secondary"]),
};

export default Button;
