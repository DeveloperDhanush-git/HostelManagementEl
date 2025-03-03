import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ button, route, size = "md", width = "full", defaultColor = "#69205D", onClick }) => {  
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

  const handleClick = () => {
    if (!isComment) {
      setColor("#69205D");
      if (onClick) onClick();  // ✅ Call custom onClick function if provided
      if (route) navigate(route);
    }
  };

  return (
    <button
      className={`mt-3 rounded-md cursor-pointer justify-center text-xl font-semibold ${sizeClasses[size]} ${widthClasses[width]} ${
        isComment
          ? "border border-[#69205D] text-[#69205D] bg-transparent"
          : "text-white"
      }`}
      style={{ backgroundColor: isComment ? "transparent" : color }}
      onClick={handleClick}
    >
      {button.replace("/*", "").trim()} {/* Remove comment indicator */}
    </button>
  );
};

export default Button;
