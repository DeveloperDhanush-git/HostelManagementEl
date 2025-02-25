import './App.css';
import Screen_10 from './Pages/Screen_10';
import Screen_9 from './Pages/Screen_9';
import SuccessScreen from './Pages/SuccessScreen';


function App() {
  return (
    <div className="space-y-4 max-w-4xl mx-auto p-6 bg-[#F7F7F7] shadow-xl 
    rounded-lg mt-1 ">
     <Screen_9 buttonName="Add Property" nextButton="Next" step1={5} />
     <Screen_10 buttonName="Add Property" nextButton="Submit" step2={6} />
     <SuccessScreen name="Property"/>
     
    </div>
  );
}

export default App;
