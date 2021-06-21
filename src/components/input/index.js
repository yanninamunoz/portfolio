import React from "react";
import PropTypes from "prop-types";
import { Email, Number, Text, TextArea } from "./styles";

const Input = ({ name, placeholder, type, onChange }) => {
  switch (type) {
    case "email":
      return <Email name={name} onChange={onChange} type="email" placeholder={placeholder} />;
    case "number":
      return <Number name={name} onChange={onChange} type="number" placeholder={placeholder} />;
    case "textArea":
      return <TextArea name={name} onChange={onChange} placeholder={placeholder} />;
    default:
      return <Text name={name} onChange={onChange} placeholder={placeholder} />;
  }
};

Input.propTypes = {
  type: PropTypes.oneOf(["email", "number", "textArea", "text"]),
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string
};

export default Input;
