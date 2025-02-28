import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Add from "./Common/DynamicComponents/Test";
import PropertyList from "./Common/DynamicComponents/PropertyCard";
import BedInventory from "./Common/DynamicComponents/PropertySelect";
import AddTenant from "./Common/DynamicComponents/AddTenant";
import Amount from "./Common/DynamicComponents/Amount";
import SuccessScreen from "./Common/DynamicComponents/Success";

function App() {
  return (
    <Router>
      <div style={{ fontFamily: "Montserrat" }}>
        <Routes>
          <Route path="/" element={<Add />} />
          <Route path="/propertylist" element={<PropertyList />} />
          <Route path="/bedinventory/:id" element={<BedInventory />} /> 
          <Route path="/addtenant" element={<AddTenant />} />
          <Route path="/amount" element={<Amount />} />
          <Route path="/success" element={<SuccessScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
