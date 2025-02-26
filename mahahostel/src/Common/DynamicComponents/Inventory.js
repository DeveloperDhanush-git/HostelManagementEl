import { useNavigate } from "react-router-dom";
import Header from "./Header";
import meterImage from "./Assests/meters-removebg-preview.png"; 
import RectangleMeter from "./Components/Meter";

const Inventory = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen flex flex-col bg-white rounded-lg mt-1" 
      style={{ fontFamily: "Montserrat" }}>

      <div className="flex-grow p-4">
    
      <Header title="Inventory" />

      <div className="ml-6">

      <RectangleMeter
        title="Inventory"
        occupied="10"
        vacant="5"
        meterImage={meterImage}
      />
    </div>
    </div>
  </div>  
  );
};

export default Inventory;
