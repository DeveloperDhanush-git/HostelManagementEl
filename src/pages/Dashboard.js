import ProfileComponent from "../components/ProfileComponent";
import CardsComponent from "../components/CardsComponent";
import RectangleCard from "../components/RectangleCard";
import SquareCard from "../components/SquareCard";
import RectangleMeter from "../components/RectangleMeter";
// import BedsComponent from "../components/BedsComponent";
// import BusinessExpensesCard from "../components/BusinessExpensesCard";
import TenantManagement from "../components/TenantManagement";

const Dashboard = () => {
  return (
    <div className="space-y-4 max-w-4xl mx-auto p-6 bg-[#F7F7F7]  rounded-lg mt-1">
    
      <ProfileComponent />

   
      <div className="flex gap-4">
        <CardsComponent imageSrc="/assets/image.png" title="Properties" count={1} />
        <CardsComponent imageSrc="/assets/image (1).png" title="Beds" count={12} />
        <CardsComponent imageSrc="/assets/avatar-male__8_-removebg-preview 1.png" title="Tenants" count={0} />
        <CardsComponent imageSrc="/assets/bb-removebg-preview 2.png" title="Staffs" count={0} />
      </div>

      <div className="flex gap-4">
  <RectangleCard 
    imageSrc="/assets/image (2).png"
    title="Profile Completed"
    description="Add tenant to start your business"
    buttonText="75%"
    color="bg-[#69205D]"
    textcolor={"text-black-500"}
  />
  
  <RectangleCard 
    imageSrc="/assets/image (3).png"
    title="Reminder!"
    description="Bank account not linked for this property"
    buttonText="Link"
    color="bg-[#69205D]"
    textcolor={"text-red-500"}
  />
</div>


      <SquareCard />

      <RectangleMeter 
  title="INVENTORY"
  occupied="3"
  vacant="9"
  meterImage="/assets/Untitled_design__2___1_-removebg-preview 1.png" // Change this path based on your image location
/>

      {/* <BedsComponent imageSrc="/assets/bed.png"/>

      <div className="p-5 flex justify-center">
      <BusinessExpensesCard iconSrc="/assets/shopping_bag.png" title="Business Expenses" />
    </div> */}
    <TenantManagement/>

    </div>
  );
};

export default Dashboard;
