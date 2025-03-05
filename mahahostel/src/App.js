import { Routes, Route } from "react-router-dom";
import TenantPage from "./Components/TenantPage";
import TenantDetails from "./Components/TenantDetails";
import ShiftPage from "./Components/ShiftPage";
import SelectUnit from "./Components/SelectUnit";
import AddTenant from "./Components/AddTenant";
import MoveTenant from "./Components/MoveTenant";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TenantPage />} />
      <Route path="/tenant-details" element={<TenantDetails />} />
      <Route path="/shift" element={<ShiftPage />} />
      <Route path="/select-unit" element={<SelectUnit />} />
      <Route path="/add-tenant" element={<AddTenant />} />
      <Route path="/move-tenant" element={<MoveTenant />} />
    </Routes>
  );
}

export default App;
