import MainPage from "./TenentManagement/MainPage";
import RoomOption from "./TenentManagement/RoomOption";
import SelectOption from "./TenentManagement/SelectOption";
import SingleRoomOption from "./TenentManagement/SingleRoomOption"; // Create this component

function App() {
  return (
    <div className="space-y-4 max-w-4xl mx-auto p-6 bg-[#F7F7F7] rounded-lg mt-1"  style={{ fontFamily: "Montserrat" }}>
      {/* <Header /> */}
         <MainPage buttonName="Add property" nextButton="Next"/>
         <RoomOption buttonName="Add property" nextButton="Next"/>
         <SingleRoomOption buttonName="Single room option" nextButton="Next"/>
         <SelectOption buttonName="Add Property" nextButton="Next" />
         
    </div>
  
  );
}

export default App;