import React from "react";
import PropTypes from "prop-types";
import { StyledIcon } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ icon, size, color, type }) => {
  switch (type) {
    case "brands":
      return <FontAwesomeIcon icon={icon} size="lg" color={color} />;
    default:
      return <StyledIcon color={color} size={size} icon={icon} />;
  }
};

Icon.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary"]),
  type: PropTypes.oneOf(["brands"]),
  icon: PropTypes.string,
  size: PropTypes.string,
};

export default Icon;
