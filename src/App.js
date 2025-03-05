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
import EKYC from "./Components/EKYC"; 
import MoveInChecklist from "./Components/MoveInChecklist";
import GuardianParent from "./Components/GuardianParent";
import EditParentDetails from "./Components/EditParentDetails";
import RentReminders from "./Components/RentReminders";
import RentRecipts from "./Components/RentRecipts";
import OnlinepPayment from "./Components/OnlinePayment";
import PaymentVerification from "./Components/PaymentVerification";
import Attendance from "./Components/Attendance";
import Property1 from "./Components/Property1";
import Property2 from "./Components/Property2";
import Property3 from "./Components/Property3";
import Property4 from "./Components/Property4";
import Property5 from "./Components/Property5";
import Property6 from "./Components/Property6";


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
        <Route path="/move-out" element={<MoveoutTenant />} /> 
        <Route path="/e-kyc-agreement" element={<EKYC />} />
        <Route path="/track-move-ins" element={<MoveInChecklist />} /> 
        <Route path="/guardian" element={<GuardianParent />} /> 
        <Route path="/guardian/edit-parent-details" element={<EditParentDetails />} /> 
        <Route path="/guardian/rent-reminder" element={<RentReminders />} /> 
        <Route path="/rent-reminder" element={<RentReminders />} /> 
        <Route path="/rent-receipts" element={<RentRecipts />} /> 
        <Route path="/online-payment" element={<OnlinepPayment />} /> 
        <Route path="/payment-verification" element={< PaymentVerification />} /> 
        <Route path="/attendance-outpass" element={<Attendance />} /> 
        <Route path="/property1" element={<Property1/>} /> 
        <Route path="/property2" element={<Property2/>} /> 
        <Route path="/property3" element={<Property3/>} /> 
        <Route path="/property4" element={<Property4/>} /> 
        <Route path="/property5" element={<Property5/>} /> 
        <Route path="/property6" element={<Property6/>} /> 
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
