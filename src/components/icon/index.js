import React from "react";
import PropTypes from "prop-types";
import { StyledIcon } from "./styles";

const Icon = ({ icon, size, color }) => {
  return <StyledIcon color={color} size={size} icon={icon} />;
};

Icon.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary"]),
  icon: PropTypes.string,
  size: PropTypes.string,
};

export default Icon;
