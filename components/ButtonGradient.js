"use client";

const ButtonGradient = ({ title = "Gradient Button", onClick = () => {} }) => {
  return (
    <button className="btn btn-gradient animate-shimmer" onClick={onClick}>
      {title}
    </button>
  );
};

export default ButtonGradient;
