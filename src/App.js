import { BrowserRouter, Routes, Route } from "react-router-dom";
import SettingScreen from "./Components/SettingScreen";
import Report from "./Components/Report";
import InventoryReport from "./Components/InventoryReport";
import TransactionReport from "./Components/TransactionReport";
import Complaint from "./Components/Complaint";
import Collection from "./Components/Collection";
import Reconciliation from "./Components/Reconciliation";
import Movein from "./Components/Movein";
import Moveout from "./Components/Moveout"; 
import TenantDetail from "./Components/TenantDetail";
import Expenses from "./Components/Expenses";
import MoveoutTenant from "./Components/MoveoutTenant";
// import EKYC from "./Components/EKYC"; 
import MoveInChecklist from "./Components/MoveInChecklist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Settings Screen */}
        <Route path="/" element={<SettingScreen />} />

        {/* Reports Section */}
        <Route path="/report" element={<Report />} />
        <Route path="/report/inventory" element={<InventoryReport />} />
        <Route path="/report/transaction" element={<TransactionReport />} />
        <Route path="/report/complaint" element={<Complaint />} />
        <Route path="/report/collection" element={<Collection />} />
        <Route path="/report/reconciliation" element={<Reconciliation />} />
        <Route path="/report/move-in" element={<Movein />} />
        <Route path="/report/move-out" element={<Moveout />} />
        <Route path="/report/tenant-detail" element={<TenantDetail />} />
        <Route path="/report/expenses" element={<Expenses />} />

        {/* Tenant Settings Routes */}
        <Route path="/move-out" element={<MoveoutTenant />} /> {/* ✅ Fixed */}
        {/* <Route path="/e-kyc-agreement" element={<EKYC />} /> */}
        <Route path="/track-move-ins" element={<MoveInChecklist />} /> {/* ✅ Fixed */}
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
