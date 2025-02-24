import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaArrowLeft } from "react-icons/fa";
import PropertyCard from "./PropertyCard";

const SelectOption = ({ buttonName, nextButton }) => {
    const [selectedValues, setSelectedValues] = useState({});
    const [openIndex, setOpenIndex] = useState(null);

    const options = [
        { label: "Security deposit", choices: ["0.5 Month", "1 Month", "1.5 Month", "2 Month", "2.5 Month", "3 Month", "3.5 Month", "4 Month", "4.5 Month", "5 Month", "5.5 Month", "6 Month", "6.5 Month", "7 Month", "7.5 Month", "8 Month", "8.5 Month", "9 Month", "9.5 Month", "10 Month", "10.5 Month", "11 Month", "11.5 Month", "12 Month", "Above",] },
        { label: "Agreement duration", choices: ["0.5 Month", "1 Month", "1.5 Month", "2 Month", "2.5 Month", "3 Month", "3.5 Month", "4 Month", "4.5 Month", "5 Month", "5.5 Month", "6 Month", "6.5 Month", "7 Month", "7.5 Month", "8 Month", "8.5 Month", "9 Month", "9.5 Month", "10 Month", "10.5 Month", "11 Month", "11.5 Month", "12 Month", "Above",] },
        { label: "Lock-in period", choices: ["0.5 Month", "1 Month", "1.5 Month", "2 Month", "2.5 Month", "3 Month", "3.5 Month", "4 Month", "4.5 Month", "5 Month", "5.5 Month", "6 Month", "6.5 Month", "7 Month", "7.5 Month", "8 Month", "8.5 Month", "9 Month", "9.5 Month", "10 Month", "10.5 Month", "11 Month", "11.5 Month", "12 Month", "Above",] },
        { label: "Notice period", choices: ["0.5 Month", "1 Month", "1.5 Month", "2 Month", "2.5 Month", "3 Month", "3.5 Month", "4 Month", "4.5 Month", "5 Month", "5.5 Month", "6 Month", "6.5 Month", "7 Month", "7.5 Month", "8 Month", "8.5 Month", "9 Month", "9.5 Month", "10 Month", "10.5 Month", "11 Month", "11.5 Month", "12 Month", "Above",] }
    ];

    const toggleDropdown = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const handleSelect = (index, choice) => {
        setSelectedValues({ ...selectedValues, [index]: choice });
        setOpenIndex(null); // Close dropdown after selecting
    };

    return (
        <div className="bg-white">
            {/* Header */}
            <div className="p-4 max-w-4xl mx-auto bg-white rounded-lg mt-1" style={{ fontFamily: 'Montserrat' }}>
                <div className="flex items-center space-x-2 py-4">
                    <FaArrowLeft className="text-xl cursor-pointer text-black hover:text-gray-700 transition duration-200" />
                    <div className="flex-grow bg-[#69205D] text-white p-4 flex justify-between items-center rounded-lg h-16">
                        <span className="text-2xl font-semibold">{buttonName}</span>
                    </div>
                </div>
            </div>

            <PropertyCard />

            <p className="text-[#0012B9] mt-2 ml-15">STEP 4 of 6</p>

            <div className="p-4 ml-11">
                <h2 className="font-bold text-lg mb-3">Room Options</h2>
                <div className="space-y-3 mb-3 mt-2 mr-1">
                    {options.map((option, index) => (
                        <div key={index} className="relative border border-gray-300 rounded-md">
                            <button
                                onClick={() => toggleDropdown(index)}
                                className="w-full flex justify-between items-center p-3 text-left bg-white rounded-lg cursor-pointer"
                            >
                                <span>{selectedValues[index] || option.label}</span>
                                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                            </button>

                            {openIndex === index && (
                                <div
                                    className="absolute left-0 right-0 bg-white border border-gray-300 rounded-md mt-1 shadow-lg z-10"
                                    style={{ maxHeight: "200px", overflowY: "auto" }} // Enable Scroll
                                >
                                    {option.choices.map((choice, i) => (
                                        <div
                                            key={i}
                                            onClick={() => handleSelect(index, choice)}
                                            className="p-2 hover:bg-blue-500 hover:text-white cursor-pointer"
                                        >
                                            {choice}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Next Button */}
            <div>
                <button className="ml-14 bg-[#69205D] text-white py-2 mt-3 rounded-md w-194 text-sm md:text-base">
                    {nextButton}
                </button>
            </div>
        </div>
    );
};

export default SelectOption;
