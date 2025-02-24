import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ button, route, size = "md", defaultColor = "#D8E0E6" }) => {
  const navigate = useNavigate();
  const [color, setColor] = useState(defaultColor);

  const sizeClasses = {
    sm: "py-1 px-3 text-xs",
    md: "py-2 px-4 text-sm",
    lg: "py-3 px-5 text-base",
  };

  const isComment = button.includes("/*");

  const handleClick = () => {
    if (!isComment) {
      setColor("#69205D");
    }
    navigate(route);
  };

  return (
    <button
      className={`mt-3 rounded-md w-full md:w-auto cursor-pointer ${sizeClasses[size]} ${
        isComment
          ? "border border-[#69205D] text-[#69205D] bg-transparent"
          : "text-white"
      }`}
      style={!isComment ? { backgroundColor: color } : {}}
      onClick={handleClick}
    >
      {button.replace("/*", "").trim()} {/* Remove comment indicator */}
    </button>
  );
};

export default Button;
