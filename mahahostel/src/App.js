import { Routes, Route } from "react-router-dom";
import TenantPage from "./Components/TenantPage";
import TenantDetails from "./Components/TenantDetails";
import ShiftPage from "./Components/ShiftPage";
import SelectUnit from "./Components/SelectUnit";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TenantPage />} />
      <Route path="/tenant-details" element={<TenantDetails />} />
      <Route path="/shift" element={<ShiftPage />} />
      <Route path="/select-unit" element={<SelectUnit />} />
    </Routes>
  );
}

export default App;
