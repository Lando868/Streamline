
const Detail = ({ details, title, value, className }) => {

    return (
        <div className={className}>
            <p className="detail-title">{title}</p>
            <p className="detail-value">
                {details?.[value] !== "" ? details[value] : "-"}
                <span className="detail-unit">
                    {value.includes("Temp") ? "°C" : ""}
                    {value.includes("Press") ? "kg/cm²" : ""}
                    {value.includes("Voltage") ? "V" : ""}
                    {value.includes("Cap") ? "m³" : ""}
                </span>
            </p>
        </div>
    )
}

export default Detail;