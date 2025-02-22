import { useState } from "react"; // ✅ Import only once
import PropertyCard from "./PropertyCard";
import TenantDetails from "./TenantDetails";
import Header from "./Header";
import NextButton from "./NextButton";
import RoomOption from "./RoomOption";
import { useNavigate } from "react-router-dom";

const MainPage = () => {

    const navigate = useNavigate();
    const [step, setStep] = useState(1);

    const nextStep = () => {
        if (step < 6) setStep((prevStep) => prevStep + 1);
    };

    return (
        <div className="bg-white font-[Montserrat]">
            
            <Header onBack={() => navigate(-1)} />
            
            {step === 1 && (
                <>
                    <PropertyCard />
                    <p className="text-[#0012B9] mt-2">STEP {step} of 6</p>

                    <TenantDetails />
                </>
            )}
          

            {step === 2 && <RoomOption step={step} nextStep={nextStep} />}

            {step === 1 && <NextButton nextStep={nextStep} />}
        </div>
    );
};

export default MainPage;
