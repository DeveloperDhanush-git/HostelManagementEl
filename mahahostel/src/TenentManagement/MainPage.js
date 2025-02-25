import PropertyCard from "./PropertyCard";
import TenantDetails from "./TenantDetails";
import Header from "./Header";
import Button from "./Button";

const MainPage = () => {

    return (
        <div className="bg-white font-[Montserrat]">

            {/* Header */}
            <Header title="Add Property" />

            <PropertyCard />

            <p className="text-[#0012B9] mt-2 ml-11">STEP 2 of 6</p>

            <TenantDetails />

            {/* Next Button */}
            <Button button="NEXT" width="full" defaultColor="#69205D"/>

        </div>
    );
};

export default MainPage;
