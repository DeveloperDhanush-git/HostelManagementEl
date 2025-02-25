import Card from "../components/Card";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="">
      <Header title="Outpass & Attendance" icons={["cog"]} />

      {/* Responsive Wrapper */}
      <div className="max-w-4xl mx-auto space-y-4 p-2 sm:p-4">
        <div className="grid grid-cols-1 gap-4">
          <Card 
            title="Attendance" 
            image="/assets/calendar_17645758-removebg-preview 1.png" 
            link="/attendance" 
            className="cursor-pointer"
          />
          <Card 
            title="Outpass" 
            image="/assets/vecteezy_delete-man-user-business-flat-line-filled-icon-vector_13326565-removebg-preview 1.png" 
            link="/outpass" 
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
