import { units } from "@utils/units";

const Detail = ({ details, title, value, className }) => {

    return (
        <div className={className}>
            <p className="detail-title">{title}</p>
            <p className="detail-value">
                {details?.[value] !== "" ? details[value] : "-"}
                <span className="detail-unit">
                    {units.map(({ type, unit }) => value.includes(type) && unit)}
                </span>
            </p>
        </div>
    )
}

export default Detail;