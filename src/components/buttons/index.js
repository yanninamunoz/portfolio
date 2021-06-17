import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./styles";
import Text from "../texts/body";
import Icon from "../icon";

const Button = ({ text, onClick, size, icon }) => (
  <StyledButton onClick={onClick} size={size}>
    {text && <Text text={text} />}
    {icon && <Icon icon={icon} />}
  </StyledButton>
);

Button.propTypes = {
  download: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
