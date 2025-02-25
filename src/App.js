import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Attendance from "./pages/Attendance";
import Outpass from "./pages/Outpass";
import SaveAttendance from "./pages/SaveAttendance";

function App() {
  return (
    <Router>
      <div className="space-y-4 max-w-4xl mx-auto p-6 rounded-lg mt-1" style={{ fontFamily: "Montserrat" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/outpass" element={<Outpass />} />
          <Route path="/save-attendance" element={<SaveAttendance />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
