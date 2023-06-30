import DetailStatus from "./DetailStatus";



const SiteStatus = (props) => {
    let kpi;
    const site = props.details.site;

    kpi = site === "product handling" ? "bulk" : site === "demin plant" ? "flow" : "rate";

    return (
        <div className={`site-status ${props.siteClass}`}>
            <h1 className="status-title">{props.details.site}</h1>
            <DetailStatus
                details={props.details}
                title={kpi}
                value={kpi}
                className="rate-block"
                titleClass={`${kpi}-title`}
                detailClass={kpi}
                unitClass={kpi === "rate" ? "unit-lg" : "unit-md"}
            />
            <div className="status-comment-block">
                <h1 className="status-comment-word">
                    {props.details.comment && "Comment:"}
                </h1>
                <p className="status-comment">{props.details.comment}</p>
            </div>

        </div>
    )
}

export default SiteStatus;