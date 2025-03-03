import { Routes, Route } from "react-router-dom";
import Bank from "./Pages/Bank";
import Unlink from "./Pages/Unlink";
import SuccessScreen from "./Pages/SuccessScreen"; // Import Success Screen

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Unlink />} />
      <Route path="/bank" element={<Bank />} />
      <Route path="/success" element={<SuccessScreen />}/> {/* ✅ Added */}
    </Routes>
  );
};

export default App;
