import React from 'react';
import { useNavigate } from "react-router-dom";

const Button = ({ button, route }) => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        className="bg-[#69205D] text-white py-2 mt-3 rounded-md w-full text-sm md:text-base cursor-pointer"
        onClick={() => navigate(route)} 
      >
        {button}
      </button>
    </div>
  );
};

export default Button;
