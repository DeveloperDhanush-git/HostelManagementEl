import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import meterImage from "./DynamicCalender/meter.png";

const Inventory = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="p-4 max-w-4xl mx-auto p-6 bg-white rounded-lg mt-1 h-auto flex flex-col" 
      style={{ fontFamily: "Montserrat" }}
    >
      
      <div className="flex items-center mt-6 sm:mt-8">
        <button onClick={() => navigate("/different-page")} className="text-lg font-semibold text-[#69205D] mr-2">
          &#x2190;
        </button>
        <div className="bg-[#69205D] p-3 rounded-md text-white w-full h-16">
          <h2 className="text-lg font-semibold">Inventory</h2>
        </div>
      </div>

      
      <div className="bg-[#69205D] p-2 rounded-md text-white w-[15%] mt-3 text-center">
  <h2 className="text-sm font-semibold">1 Properties</h2>
</div>




      
      <div className="mt-4 p-6 bg-[#D8E0E6] shadow-lg rounded-lg flex flex-col lg:flex-row justify-between items-center w-full">
        
        <div className="w-full lg:w-1/2 flex flex-col justify-center ">
          
          <div className="mb-4">
            <h3 className="text-lg md:text-xl font-semibold ">Maha Hostel</h3>
            <p className="text-gray-600 text-sm md:text-base">9 Beds</p>
          </div>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button className="bg-[#69205D] text-white px-6 py-3 rounded-md text-lg font-semibold w-full flex flex-col items-start relative">
  Occupied
  <span className="text-2xl font-bold mt-1 ml-1">3</span>
  <span 
    onClick={() => navigate("/occupied-details")} 
    className="absolute right-3 bottom-3 cursor-pointer text-white text-2xl"
  >
    &gt;
  </span>
</button>


<button className="bg-[#69205D] text-white px-6 py-3 rounded-md text-lg font-semibold w-full flex flex-col items-start relative">
  Vacant
  <span className="text-2xl font-bold mt-1 ml-1">9</span>
  <span 
    onClick={() => navigate("/vacant-details")} 
    className="absolute right-3 bottom-3 cursor-pointer text-white text-2xl"
  >
    &gt;
  </span>
</button>
          </div>
        </div>

        
        <div className="flex flex-col items-center w-full lg:w-1/2 mt-8 lg:mt-2 relative">
  
  <button 
    onClick={() => navigate("/property-details")} 
    className="text-[#69205D] font-semibold text-lg mt-0 mb-30 "
  >
    View &gt;
  </button>

  
  <img 
    src={meterImage} 
    alt="Meter Indicator" 
    className="w-40 md:w-50 lg:w-56 h-auto absolute -top-2 mt-10"
  />
</div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inventory />} />
        <Route path="/property-details" element={<div>Property Details Page</div>} />
        <Route path="/different-page" element={<div>Different Page</div>} />
        <Route path="/occupied-details" element={<div>Occupied Details Page</div>} />
        <Route path="/vacant-details" element={<div>Vacant Details Page</div>} />
      </Routes>
    </Router>
  );
};

export default Inventory;
