import { createContext, useContext, useState } from "react";

const StaffContext = createContext();

export const StaffProvider = ({ children }) => {
    const [staffList, setStaffList] = useState([]);

    return (
        <StaffContext.Provider value={{ staffList, setStaffList }}>
            {children}
        </StaffContext.Provider>
    );
};

export const useStaff = () => useContext(StaffContext);
