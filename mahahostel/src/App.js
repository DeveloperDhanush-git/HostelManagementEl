import { Routes, Route } from "react-router-dom";
import TenantPage from "./Components/TenantPage";
import TenantDetails from "./Components/TenantDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TenantPage />} />
      <Route path="/tenant-details" element={<TenantDetails />} />
    </Routes>
  );
}

export default App;
