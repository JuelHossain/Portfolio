import { useContext } from "react";
import { createContext } from "react";

export const AdminContext = createContext();

export const AdminProvider=({ value, children })=> {
    return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>;
}

export const useAdmin = () => {
    return useContext(AdminContext);
}