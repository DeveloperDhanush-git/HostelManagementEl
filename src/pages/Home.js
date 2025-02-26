import Card from "../components/Card";
import Header from "../components/Header";
import calendarImage from "../Assets/calendar_17645758-removebg-preview 1.png";
import outpassImage from "../Assets/vecteezy_delete-man-user-business-flat-line-filled-icon-vector_13326565-removebg-preview 1.png";

const Home = () => {
  return (
    <div className="">
      <Header title="Outpass & Attendance" icons={["cog"]} />

      <div className="max-w-4xl mx-auto space-y-4 p-2 sm:p-4">
        <div className="grid grid-cols-1 gap-4">
          <Card 
            title="Attendance" 
            image={calendarImage} 
            link="/attendance" 
            className="cursor-pointer"
          />
          <Card 
            title="Outpass" 
            image={outpassImage} 
            link="/outpass" 
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
