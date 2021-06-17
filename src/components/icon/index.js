import React from "react";
import PropTypes from "prop-types";
import { StyledSpan } from "./styles";

const Icon = ({ icon }) => (
  <StyledSpan className="material-icons">{icon}</StyledSpan>
);

Icon.propTypes = {
  icon: PropTypes.string,
};

export default Icon;
