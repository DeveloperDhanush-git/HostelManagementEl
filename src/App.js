import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ComplaintPage from "./Components/MyComplaints";
import ElectricalComplaintPage from "./pages/ElectricalComplaintPage";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ComplaintPage />} />
                <Route path="/complaints/electrical" element={<ElectricalComplaintPage />} />
                
            </Routes>
        </Router>
    );
}

export default App;
