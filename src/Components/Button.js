import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Button = ({
  button,
  route,
  size = "md",
  width = "full",
  defaultColor = "#69205D",
  onClick, // Accept a custom click handler
}) => {
  const navigate = useNavigate();
  const [color, setColor] = useState(defaultColor);
  const sizeClasses = {
    sm: "py-1 px-3 text-xs",
    md: "py-2 px-4 text-sm",
    lg: "py-3 px-5 text-base",
  };
  const widthClasses = {
    full: "w-full",
    half: "w-1/2",
  };
  const isComment = button.includes("/*");
  const handleClick = (e) => {
    if (onClick) {
      onClick(e); 
    } else if (route) {
      setColor("#69205D");
      navigate(route);
    }
  };
  return (
    <button
      className={`mt-3 rounded-md ml-7 mr-4 cursor-pointer justify-center text-xl ${sizeClasses[size]} ${widthClasses[width]} ${
        isComment
          ? "border border-[#69205D] text-[#69205D] bg-transparent"
          : "text-white"
      }`}
      style={!isComment ? { backgroundColor: color } : {}}
      onClick={handleClick}
    >
      {button.replace("/*", "").trim()} 
    </button>
  );
};
export default Button;