'use client';

import { useState, useEffect } from "react";
import { tungsten } from "@utils/tungsten";
import { phd } from "@utils/phd";

const TungstenTest = () => {
    const [phd_urea, setPHD_urea] = useState([]);

    useEffect(() => {
        const phd = async (setter) => {

            try {
                // const res = await fetch(`../api/tungsten?tag=${tag}`, {
                const res = await fetch(`../api/tungsten/tags`, {
                    method: 'GET',
                })

                if (res.ok) {
                    console.log("response received successfully!!!");
                    const data = await res.json();
                    console.log("Tungsten data: ", data)
                    setter(data);
                }

            } catch (error) {
                console.log("phd: ", error);
            }

        }

        phd(setPHD_urea);
    }, [])


    return (
        <div className="tungsten">
            {phd_urea.map((tag, index) => (
                <p
                    key={index}
                    className="tag-test"
                >
                    {`${tag.TagName}: ${tag.StringValue}`}
                </p>
            ))}

        </div>
    )
}

export default TungstenTest;