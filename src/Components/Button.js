import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Button = ({
  text = "Button",
  route,
  size = "md",
  width = "full",
  height = "auto",
  defaultColor = "#69205D",
  textColor = "white",  // ✅ New prop for text color
  className = "",
}) => {
  const navigate = useNavigate();
  const [color, setColor] = useState(defaultColor);

  const sizeClasses = {
    sm: "py-1 px-3 text-xs",
    md: "py-2 px-4 text-sm",
    lg: "py-3 px-6 text-base",
    xl: "py-4 px-8 text-lg",
  };

  const widthClasses = {
    auto: "w-auto",
    full: "w-full",
    medium: "w-40",
    large: "w-60",
  };

  const handleClick = () => {
    if (route) {
      navigate(route);
    }
  };

  return (
    <button
      className={`rounded-md cursor-pointer justify-center text-xl ${sizeClasses[size]} ${
        widthClasses[width]
      } ${className}`}
      style={{ backgroundColor: color, color: textColor, height }}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
