import { FaArrowLeft } from "react-icons/fa";

const Header = ({ onBack }) => {

  return (
    <div>
      <FaArrowLeft 
        className="text-xl cursor-pointer text-black" 
        onClick={onBack} // Call the function when clicked
      />
    <header className="bg-[#69205D] rounded-md text-white p-4 flex items-center justify-between mb-4 h-17">
       
      <button className="text-white text-lg font-semibold">
        <span className="text-lg font-semibold flex-1 text-left">Add Property</span>
      </button>

    </header>
    </div>
  );
};

export default Header;
