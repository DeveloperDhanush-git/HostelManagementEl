import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ManageStaff from "./Component/ManageStaff";
import AddStaff from "./Component/AddStaff";
import SelectRole from "./Component/SelectRole";
import SelectProperty from "./Component/SelectProperty";
// import { StaffProvider } from "./Component/StaffContext";

function App() {
  return (
    // <StaffProvider>
    <div className="space-y-4 max-w-4xl mx-auto p-6 bg-[#F7F7F7] rounded-lg mt-1" style={{ fontFamily: "Montserrat" }}>

      <Router>
        <Routes>
          <Route path="/" element={<ManageStaff />} />
          <Route path="/add-staff" element={<AddStaff />} />
          <Route path="/select-role" element={<SelectRole />} />
          <Route path="/select-property" element={<SelectProperty />} />
        </Routes>
      </Router>

    </div>
    // </StaffProvider>
  );
}

export default App;