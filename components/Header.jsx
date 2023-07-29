'use client';

import { useState, useContext, useEffect } from "react";
import { sites } from "@utils/sites";
import Dropdown from "./Dropdown";
import ProfileMenu from "./Profile";
import Shift from './Shift';
import Date from './Date';
import Clock from "./Clock";

import { shift } from "@utils/shift";
import { date } from "@utils/date";

import { FontAwesomeIcon } from "fontAwesome";
import { faCalendarDays, faGrip, faTableList } from "@fortawesome/free-solid-svg-icons";

import StatusContext from "@context/StatusLayoutContext";



const Header = (props) => {

    const { expanded, toggleView, site, setSite } = useContext(StatusContext);

    const streamDate = date();
    const shiftCheck = shift();

    // const [site, setSite] = useState("");

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

                    <div className="date-and-calendar">
                        <FontAwesomeIcon
                            className="status-calendar"
                            icon={faCalendarDays}
                        />
                        <div className="status-date-block">
                            <span className="status-weekday"> {streamDate.day}</span>
                            <div className="ordinal-date">
                                <span className="status-date"> {streamDate.date}</span>
                                <span className="status-nth"> {streamDate.nth}</span>
                                <span className="status-month"> {streamDate.month}</span>
                                <span className="status-year"> {streamDate.year}</span>
                            </div>
                        </div>
                    </div>

                    <div className="status-time-block">
                        <Clock className="status-time" />
                    </div>

                    <div className="status-shift-block">
                        <span className="status-shift">{shiftCheck.shift}</span>
                        <span className="status-shift-word">Shift</span>
                        <span className="status-rotation">{shiftCheck.rotation}</span>
                    </div>
                    <div className="toggles">
                        <p>Toggle View :</p>
                        <FontAwesomeIcon
                            className="toggle-icon-simple"
                            // icon={expanded ? faTableList : faGrip}
                            icon={faGrip}
                            onClick={() => toggleView(true)}
                            style={expanded ? { color: "var(--green-1)" } : { color: "var(--light-grey)" }}

                        />
                        <FontAwesomeIcon
                            className="toggle-icon-detailed"
                            icon={faTableList}
                            onClick={() => toggleView(false)}
                            style={expanded ? { color: "var(--light-grey)" } : { color: "var(--green-1)" }}


                        />
                    </div>

                    <ProfileMenu />
                </div>
            </>
        )
    }
}


export default Header;