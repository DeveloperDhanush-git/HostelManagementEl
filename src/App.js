import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CollectionHome from "./pages/CollectionHome";
import AddDue from "./pages/AddDue";
import FilterPage from "./components/FilterPage";

// Import Dynamic Form and Specific Forms
import DynamicForm from "./components/DynamicForm";
import AdvanceRent from "./components/dueforms/AdvanceRent";
import SecurityDeposit from "./components/dueforms/SecurityDeposit";
import MaintenanceCharge from "./components/dueforms/MaintenanceCharge";
import ElectricityBill from "./components/dueforms/ElectricityBill";
import FoodCharge from "./components/dueforms/FoodCharge";
import RegistrationCharge from "./components/dueforms/RegistrationCharge";
import OtherCharge from "./components/dueforms/OtherCharge";

const App = () => {
  return (
    <Router>
      <div className="bg-white min-h-screen rounded-lg flex flex-col" style={{fontFamily: "montserrat"}}>
        <Routes>
          <Route path="/" element={<CollectionHome />} />
          <Route path="/adddue" element={<AddDue />} />
          <Route path="/filter" element={<FilterPage />} />

          {/* Dynamic Form Route */}
          <Route path="/adddue/:formType" element={<DynamicForm />} />

          {/* Individual Form Routes */}
          <Route path="/adddue/advance-rent" element={<AdvanceRent />} />
          <Route path="/adddue/security-deposit" element={<SecurityDeposit />} />
          <Route path="/adddue/maintenance" element={<MaintenanceCharge />} />
          <Route path="/adddue/electricity" element={<ElectricityBill />} />
          <Route path="/adddue/food" element={<FoodCharge />} />
          <Route path="/adddue/registration" element={<RegistrationCharge />} />
          <Route path="/adddue/other" element={<OtherCharge />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
