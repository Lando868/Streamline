'use client';
import { createContext, useState } from "react";

const StatusContext = createContext();


export const StatusLayoutProvider = ({ children }) => {
    const [expanded, setExpanded] = useState(true);
    const [site, setSite] = useState("");


    const toggleView = (toggled) => {
        setExpanded(toggled);
    }



    return (
        <StatusContext.Provider value={{ expanded, toggleView, site, setSite }}>
            {children}
        </StatusContext.Provider>
    )


}

export default StatusContext;