'use client';

import { useState, useEffect } from 'react';
import { sites } from "@utils/sites";
import Dropdown from "./Dropdown";
import ProfileMenu from "./Profile";
import Shift from './Shift';
import Date from './Date';
import Clock from "./Clock";

import { shift } from "@utils/shift";
import { date } from "@utils/date";

import { FontAwesomeIcon } from "fontAwesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";



const Header = (props) => {

    const streamDate = date();
    const shiftCheck = shift();

    const [site, setSite] = useState("");

    useEffect(() => {
        console.log("Site: ", site);
    }, [site]);

    const handleSelect = (selected) => {
        console.log(`${selected} was selected`)
        setSite(selected);
        props.handleSelect?.(selected);

    };

    const fullHeader = props.page == "status" ? false : true;

    if (fullHeader) {
        return (
            <div className="dash-header">
                <Dropdown
                    type="site-menu"
                    label="Select your site..."
                    items={sites}
                    selected={handleSelect}
                    site={site}
                />
                <Shift />
                {/* <div className="status-shift-block">
                    <span className="status-shift">{shiftCheck.shift}</span>
                    <span className="status-shift-word">Shift</span>
                    <span className="status-rotation">{shiftCheck.rotation}</span>
                </div> */}
                {/* <div className="date-block">
                    <Date
                        calendarStyle="calendar" />
                    <Clock className="time" />
                </div> */}
                <ProfileMenu />

            </div>
        )
    } else {
        return (
            <>
                <div className="status-header">
                    <div className="status-location">
                        <span className="site-code">TNO</span>
                    </div>



                    <FontAwesomeIcon
                        className="status-calendar"
                        icon={faCalendarDays}
                    />
                    <div className="status-date-block">
                        <span className="status-weekday"> {streamDate.day}</span>
                        <span className="status-date"> {streamDate.short}</span>
                    </div>
                    <div className="status-time-block">
                        <Clock className="status-time" />
                    </div>

                    <div className="status-shift-block">
                        <span className="status-shift">{shiftCheck.shift}</span>
                        <span className="status-shift-word">Shift</span>
                        <span className="status-rotation">{shiftCheck.rotation}</span>
                    </div>


                    <ProfileMenu />
                </div>
            </>
        )
    }
}


export default Header;