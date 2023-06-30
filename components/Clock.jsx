'use-client';
import '@styles/status.css';
import { useState, useEffect } from "react";
import { shift } from '@utils/shift';


const Clock = (props) => {

    const [time, setTime] = useState(new Date());
    const shiftCheck = shift();

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

        {/*return `${hours12} : ${minutes} : ${seconds}`*/ }
        return {
            hours12,
            minutes,
            seconds
        }
    }




    return (
        <div
            className={`clockwise ${props.className}`}>
            <span suppressHydrationWarning={true} className="clock hours">{formatTime(time).hours12}</span>
            <span className="clock-colon-1">:</span>
            <span suppressHydrationWarning={true} className="clock minutes">{formatTime(time).minutes}</span>
            <span className="clock-colon-2">:</span>
            <span suppressHydrationWarning={true} className="clock seconds">{formatTime(time).seconds}</span>
            <span suppressHydrationWarning={true} className="clock-period">{shiftCheck.period}</span>
            {/*<h1 suppressHydrationWarning={true}>{formatTime(time)}</h1>*/}
        </div>
    )
}

export default Clock;