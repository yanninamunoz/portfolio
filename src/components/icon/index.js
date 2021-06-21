import React from "react";
import PropTypes from "prop-types";
import { StyledSpan } from "./styles";

const Icon = ({ icon, size }) => (
  <StyledSpan className="material-icons" size={size}>
    {icon}
  </StyledSpan>
);

Icon.propTypes = {
  icon: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default Icon;
