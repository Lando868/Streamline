// 'use client';

import { createContext, useState, useEffect } from "react";
import { phd_urea, phd_site } from "@utils/phd";

const HistorianContext = createContext();

export const HistorianProvider = ({ children }) => {

    const [phdData, setPhdData] = useState([]);
    const [phdDataSite, setPhdDataSite] = useState([]);

    const phd = async (req) => {
        try {
            const res = await fetch(`../api/tungsten/tags`,
                {
                    method: 'GET',
                })

            if (!res.ok) {
                throw new Error("Tungsten context query failed!")
            }

            const data = await res.json();
            console.log("TUNGSTEN SERVER (context call): ", data);
            setPhdData(data);


        } catch (error) {
            console.log("TUNGSTEN SERVER ERROR (context call): ", error);
            return new Response("Failed to fetch tag via context call", { status: 500 });

        }

    };

    const phdSite = async (req) => {
        try {
            const res = await fetch(`../api/tungsten/site-tags`, {
                method: 'GET',
            })

            if (!res.ok) {
                throw new Error("Tungsten context site query failed!")
            }

            const data = await res.json();
            console.log("TUNGSTEN SERVER (site context call): ", data);
            setPhdDataSite(data);


        } catch (error) {
            console.log("TUNGSTEN SERVER ERROR (site context call): ", error);
            return new Response("Failed to fetch site tag via context call", { status: 500 });

        }

    };


    useEffect(() => {



        phd();
        phdSite();

        setInterval(() => {
            phd();
            phdSite();
        }, 300000);
    }, []);



    return (
        <HistorianContext.Provider value={{ phdData, phdDataSite }}>
            {children}
        </HistorianContext.Provider>
    )
}

export default HistorianContext;