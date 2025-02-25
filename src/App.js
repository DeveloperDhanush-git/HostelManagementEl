// src/App.js
import "./App.css";
import Singleroomchoosing from "./Components/Singleroomchoosing";
import Showingprice from "./Components/Showingprice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Addrooms from "./Components/Addrooms";
import SingleRoomOption from "./Components/SingleRoomoption";
import Detailsfilling from "./Components/Detailsfilling";
import Details2page from "./Components/Details2page";
import { FormDataProvider } from "./Components/PropertyContext";

function App() {
  return (
    <FormDataProvider>
      <div className="space-y-4 max-w-4xl mx-auto p-6 rounded-lg mt-1 font-[Montserrat]">
        <Router>
          <Routes>
            <Route path="/" element={<Detailsfilling />} />
            <Route path="/Details2page" element={<Details2page />} />
            <Route path="/Add" element={<Addrooms />} />
            <Route path="/SingleRoomchoosing" element={<Singleroomchoosing />} />
            <Route path="/single-room" element={<Showingprice />} />
            <Route path="/options" element={<SingleRoomOption />} />
          </Routes>
        </Router>
      </div>
    </FormDataProvider>
  );
}

export default App;
