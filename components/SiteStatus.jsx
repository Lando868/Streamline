'use client';
import DetailStatus from "./DetailStatus";
import { useState } from "react";
import StatusUrea from "./StatusUrea";



const SiteStatus = (props) => {
    let kpi;
    const site = props.site;
    const [expand, setExpand] = useState(false);

    kpi = site === "product handling" ? "bulk" : site === "demin plant" ? "flow" : "rate";

    return (
        <div>
            <div
                className={`site-status ${props.siteClass}`}
                style={expand ? { width: "40rem", height: "40rem", flexBasis: "50%" } : {}}
                onClick={(e) => {
                    console.log(`${site} was clicked`);

                }}
            >
                <h1 className="status-title">{props.site}</h1>
                <DetailStatus
                    rate={props.rate}
                    title={kpi}
                    value={kpi}
                    className="rate-block"
                    titleClass={`${kpi}-title`}
                    detailClass={kpi}
                    unitClass={kpi === "rate" ? "unit-lg" : "unit-md"}
                />
                <div className="status-comment-block">
                    <h1 className="status-comment-word">
                        {props.comment && "Comment:"}
                    </h1>
                    <p className="status-comment">{props.comment}</p>
                </div>


            </div>

        </div>
    )
}

export default SiteStatus;