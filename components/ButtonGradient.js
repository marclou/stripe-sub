import React from "react";

const ButtonGradient = ({ title = "Gradient Button" }) => {
  return <button className="btn btn-gradient animate-shimmer">{title}</button>;
};

export default ButtonGradient;
