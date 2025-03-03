import BedInventory from "./Common/DynamicComponents/BedInventory";
import Test from "./Common/DynamicComponents/Test";
import AddTenant from "./Common/DynamicComponents/AddTenant";
import ScreenTenTenant from "./Common/DynamicComponents/ScreenTenTenant";
import SuccessMsg from "./Common/DynamicComponents/SuccessMsg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditInventory from "./Common/DynamicComponents/EditInventory";
import RoomSelection from "./Common/DynamicComponents/RoomSelection";
import HostelBedSelection from "./Common/DynamicComponents/HostelBedSelection";
import Inventory from "./Common/DynamicComponents/Inventory"
import AddRoomType from "./Common/DynamicComponents/AddRoomType"


function App() {
  return (
    <div className="App" style={{ fontFamily: "Montserrat" }}>
      <Router>
      <Routes>
        <Route path="/" element={<Inventory />} />
        <Route path="/bedInventory" element={<BedInventory />} />
        <Route path="/test" element= {<Test />}/>
        <Route path="/addtenant" element= {<AddTenant />}/>
        <Route path="/addtenant2" element= {<ScreenTenTenant />}/>
        <Route path="/success" element= {<SuccessMsg />}/>
        <Route path="/edit" element= {<EditInventory />}/>
        <Route path="/roomselect" element= {<RoomSelection />}/>
        <Route path="/bedselect" element= {<HostelBedSelection />}/>
        <Route path="/addroom" element= {<AddRoomType />}/>
      </Routes>
    </Router>  
    
    
    </div>  
  );
}

export default App;
