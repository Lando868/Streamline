'use-client';

import { useState, useEffect } from "react";


const Clock = (props) => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [])


    const formatTime = (date) => {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');

        const hours24 = date.getHours();
        const amPM = hours24 < 12 ? "AM" : "PM";
        const hoursConv = hours24 == 0 || hours24 == 12 ? 12 : hours24 > 0 && hours24 < 12 ? hours24 : hours24 - 12;
        const hours12 = hoursConv.toString();

        return `${hours12} : ${minutes} : ${seconds}`
    }




    return (
        <div className={props.className}>
            <h1>{formatTime(time)}</h1>
        </div>
    )
}

export default Clock;