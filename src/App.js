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
import OnlinePayment from "./Components/OnlinePayment";
import PaymentVerification from "./Components/PaymentVerification";
import Attendance from "./Components/Attendance";
import Property1 from "./Components/Property1";
import Property2 from "./Components/Property2";
import Property3 from "./Components/Property3";
import Property4 from "./Components/Property4";
import Property5 from "./Components/Property5";
import Property6 from "./Components/Property6";
import Academicsession from "./Components/Academicsession";
import SalesSettings from "./Components/SalesSettings";
import Salesproperty1 from "./Components/Salesproperty1";
import Salesproperty2 from "./Components/Salesproperty2";
import Salesproperty3 from "./Components/Salesproperty3";
import Salesproperty4 from "./Components/Salesproperty4";
import Salesproperty5 from "./Components/Salesproperty5";
import Salesproperty6 from "./Components/Salesproperty6";
import CustomerSupport from "./Components/CustomerSupport";
import BankAccount from "./Components/BankAccount";
import BankDetails from "./Components/BankDetails";
import Success from "./Components/Success";
import Agreement1 from "./Components/Agreement1";
import Agreement2 from "./Components/Agreement2";
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
        <Route path="agreement1" element={< Agreement1/>} />
        <Route path="agreement2" element={< Agreement2/>} />
        <Route path="/track-move-ins" element={<MoveInChecklist />} />
        <Route path="/guardian" element={<GuardianParent />} />
       
        <Route path="/guardian/edit-parent-details" element={<EditParentDetails />} />
        <Route path="/guardian/rent-reminder" element={<RentReminders />} />
        <Route path="/rent-reminder" element={<RentReminders />} />
        <Route path="/rent-receipts" element={<RentRecipts />} />
        <Route path="/online-payment" element={<OnlinePayment />} />
        <Route path="/payment-verification" element={<PaymentVerification />} />
        <Route path="/attendance-outpass" element={<Attendance />} />
        <Route path="property/property1" element={<Property1 />} />
        <Route path="property/property2" element={<Property2 />} />
        <Route path="property/property3" element={<Property3 />} />
        <Route path="property/property4" element={<Property4 />} />
        <Route path="property/property5" element={<Property5 />} />
        <Route path="property/property6" element={<Property6 />} />
        <Route path="/academic-session" element={<Academicsession />} />
        <Route path="/market-place-listing" element={<SalesSettings />} />
        <Route path="/customer-support" element={<CustomerSupport />} />
        <Route path="property/CRIB005679" element={<Salesproperty1 />} />
        <Route path="property/CRIB008123" element={<Salesproperty2 />} />
        <Route path="property/CRIB005678" element={<Salesproperty3 />} />
        <Route path="property/CRIB008122" element={<Salesproperty4 />} />
        <Route path="property/CRIB005677" element={<Salesproperty5 />} />
        <Route path="property/CRIB008121" element={<Salesproperty6 />} />
        <Route path="bank-account" element={<BankAccount />} />
        <Route path="add-bank-account" element={<BankDetails />} />
        <Route path="success" element={<Success />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
