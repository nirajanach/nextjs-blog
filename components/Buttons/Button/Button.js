//Button.js
import React from "react";

const Button = ({ label, buttonId }) => (
  <button className="button" typeof="button" id={buttonId}>
    {label}
  </button>
);

export default Button;
