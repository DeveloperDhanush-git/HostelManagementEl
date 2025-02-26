import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ManageStaff from "./Component/ManageStaff";
import AddStaff from "./Component/AddStaff";
import SelectRole from "./Component/SelectRole";
import SelectProperty from "./Component/SelectProperty";
// import { StaffProvider } from "./Component/StaffContext";

function App() {
  return (
    
    <div className="container mx-auto bg-white min-h-screen rounded-lg max-w-4xl flex flex-col" style={{ fontFamily: "Montserrat" }}>

      <Router>
        <Routes>
          <Route path="/" element={<ManageStaff />} />
          <Route path="/add-staff" element={<AddStaff />} />
          <Route path="/select-role" element={<SelectRole />} />
          <Route path="/select-property" element={<SelectProperty />} />
        </Routes>
      </Router>

    </div>
  
  );
}

export default App;