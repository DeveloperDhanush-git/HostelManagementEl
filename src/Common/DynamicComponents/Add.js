import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 max-w-4xl mx-auto p-6 bg-white rounded-lg mt-1 h-auto flex flex-col md:p-6" style={{ fontFamily: "Montserrat" }}>
      
      <div className="flex items-center mt-6">
        <button onClick={() => navigate(-1)} className="text-lg font-semibold text-[#69205D] mr-2">&#x2190;</button>
        <div className="bg-[#69205D] p-3 rounded-md text-white w-full">
          <h2 className="text-lg font-semibold text-center">Add Tenant</h2>
        </div>
      </div>

      
      <div className="bg-gray-200 p-3 rounded-md flex justify-between items-center mt-4">
        <h3 className="text-gray-700 text-sm md:text-base">Maha Hostel 01</h3>
        <img src="" alt="Hostel Icon" className="w-6 h-6" />
      </div>

      
      <p className="text-xs text-blue-500 mt-3">STEP 1 OF 3</p>
      <h3 className="text-lg font-semibold mt-1">Personal details</h3>
      
      
      <input type="text" placeholder="Full name" className="border p-2 w-full rounded mt-2 text-sm md:text-base" />
      <div className="flex gap-2 mt-2">
        <input type="text" value="+91" disabled className="border p-2 w-16 rounded bg-gray-100 text-sm md:text-base" />
        <input type="text" placeholder="Mobile number" className="border p-2 w-full rounded text-sm md:text-base" />
      </div>
      
      
      <h3 className="text-lg font-semibold mt-4">Gender</h3>
      <div className="grid grid-cols-3 gap-3 mt-2">
        <button className="bg-gray-300 text-black px-4 py-2 rounded-md text-sm md:text-base">Male</button>
        <button className="bg-gray-300 text-black px-4 py-2 rounded-md text-sm md:text-base">Female</button>
        <button className="bg-gray-300 text-black px-4 py-2 rounded-md text-sm md:text-base">Others</button>
      </div>
      
      
      <h3 className="text-lg font-semibold mt-4">Select Occupation</h3>
      <div className="grid grid-cols-2 gap-3 mt-2">
        <button className="bg-gray-300 text-black px-4 py-2 rounded-md text-sm md:text-base">Student</button>
        <button className="bg-gray-300 text-black px-4 py-2 rounded-md text-sm md:text-base">Working Professional</button>
      </div>
      
     
      <button className="border border-[#69205D] text-[#69205D] py-2 mt-6 rounded-md w-full text-sm md:text-base">
        Add from contacts
      </button>
      <button className="bg-[#69205D] text-white py-2 mt-3 rounded-md w-full text-sm md:text-base">
        Continue
      </button>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Add />} />
      </Routes>
    </Router>
  );
};

export default Add;
