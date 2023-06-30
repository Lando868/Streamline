import { shift } from '@utils/shift';
import { date } from '@utils/date';
import { FontAwesomeIcon } from "fontAwesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import Clock from "./Clock";

const Date = (props) => {

    const shiftCheck = shift();
    const streamDate = date();

    return (

        <div >
            {/*   <FontAwesomeIcon
                className={props.calendarStyle}
                icon={faCalendarDays}
            />*/}
            <div className="date-and-time">
                <p className="date">{streamDate.header}</p>
                <Clock className="time" />
                {/* <span className="period">{shiftCheck.period}</span> */}
            </div>


        </div>
    )
}

export default Date