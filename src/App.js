import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ComplaintPage from "./Components/MyComplaints";
import ComplaintCategoryPage from "./Components/ComplaintCategoryPage";
import ComplaintDetailsPage from "./Components/ComplaintDetailsPage"

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ComplaintPage />} />
                <Route path="/complaints/:category" element={<ComplaintCategoryPage />} />
                <Route path="/complaints/:category/:subcategory" element={<ComplaintDetailsPage />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
