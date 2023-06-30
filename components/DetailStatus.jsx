import { units } from "@utils/units";

const DetailStatus = (props) => {
    const { details, title, value, className, titleClass, detailClass, unitClass } = props;
    return (
        <div className={className}>
            <p className={`status detail-title ${titleClass}`}>{title}</p>
            <p className={`status detail-value ${detailClass}`}>
                {details?.[value] !== "" ? details[value].toLocaleString('en-US') : "-"}
                <span className={`status detail-unit ${unitClass}`}>
                    {units.map(({ type, unit }) => value.includes(type) && unit)}
                </span>
            </p>
        </div>
    )
}

export default DetailStatus;