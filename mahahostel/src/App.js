import MainPage from "./TenentManagement/MainPage";
import RoomOption from "./TenentManagement/RoomOption";
import SelectOption from "./TenentManagement/SelectOption";
import SingleRoomOption from "./TenentManagement/SingleRoomOption"; // Create this component
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="space-y-4 max-w-4xl mx-auto p-6 bg-[#F7F7F7] rounded-lg mt-1" style={{ fontFamily: "Montserrat" }}>
      <BrowserRouter>
        <MainPage />
        <RoomOption />
        <SingleRoomOption />
        <SelectOption />
      </BrowserRouter>


    </div>

  );
}

export default App;