'use client';
import { useState, useContext, useEffect } from "react";
import { siteStatus } from "@utils/siteStatus";
import { ureaCalc } from "@utils/ureaCalc";
import Header from "./Header";
import SiteStatus from "./SiteStatus";
import ProfileMenu from "./Profile";
import StatusUrea from "./StatusUrea";
import HistorianContext from "@context/HistorianContext";
import StatusContext from "@context/StatusLayoutContext";


const Status = () => {

    const { phdData, phdDataSite, ureaSampleData } = useContext(HistorianContext);
    const { expanded, toggleView, site, setSite } = useContext(StatusContext);

    const sitesTNO = ["01 Plant", "02 Plant", "OSBL", "03 Plant", "04 Plant", "Urea Plant", "Demin Plant", "UFC-85", "Product Handling"];

    console.log("phdDataSet:", phdData);

    const ureaSamples = (query) => {
        const tag = ureaSampleData.find((ureaSample) => ureaSample.TagName === query);
        const name = tag?.TagName;
        const value = tag?.DoubleValue;
        return { name, value }
    }

    const phdSite = (query) => {
        const tag = phdDataSite.find((phd) => phd.TagName === query);
        const name = tag?.TagName;
        const value = tag?.DoubleValue;
        return { name, value }
    }


    const phdUrea = (query) => {
        const tag = phdData.find((phd) => phd.TagName === query);
        const name = tag?.TagName;
        const value = tag?.DoubleValue;
        return { name, value }
    }





    const jsonStatus_01 = siteStatus.find((details) => details.site === "01 Unit");
    const jsonStatus_02 = siteStatus.find((details) => details.site === "02 Unit");
    const jsonStatus_03 = siteStatus.find((details) => details.site === "03 Unit");
    const jsonStatus_04 = siteStatus.find((details) => details.site === "04 Unit");
    const jsonStatus_urea = siteStatus.find((details) => details.site === "urea plant");
    const jsonStatus_demin = siteStatus.find((details) => details.site === "demin plant");
    const jsonStatus_ufc = siteStatus.find((details) => details.site === "UFC-85");
    const jsonStatus_ph = siteStatus.find((details) => details.site === "product handling");


    const status_01 = phdSite("P_RATE_1.PV").value?.toFixed(1);
    const status_02 = phdSite("P_RATE_2.PV").value?.toFixed(1);
    const status_03 = phdSite("PRATE_3.PV").value?.toFixed(1);
    const status_04 = phdSite("O4_HIC1001").value?.toFixed(1);;
    const status_urea = ureaCalc(phdUrea("01_FI_104.DACA.PV").value).currentRate.toFixed(1);

    //Demin
    const MBed_050A = Number(phdUrea("D5-FIT-3007.PV").value?.toFixed(0));
    const MBed_050B = Number(phdUrea("D5-FIT-3008.PV").value?.toFixed(0));
    const MBed_04A = Number(phdUrea("FIT-44-4020A.PV").value?.toFixed(0));
    const MBed_04B = Number(phdUrea("FIT-44-4020B.PV").value?.toFixed(0));
    const MBed_04C = Number(phdUrea("FIT-44-4020C.PV").value?.toFixed(0));
    const MBed_03A = Number(phdUrea("FV-2331A.PV").value?.toFixed(0));
    const MBed_03B = Number(phdUrea("FV-2331B.PV").value?.toFixed(0));

    const totalDemin = MBed_050A + MBed_050B + MBed_04A + MBed_04B + MBed_04C + MBed_03A + MBed_03B;

    const sitesLayout1 = { gridColumn: "1 / -1" }
    const sitesLayout2 = { gridColumn: "1 / 2", display: "none" }
    const highlightedSite = {
        background: "var(--dark-2)",
        color: "var(--green-1)",
        fontWeight: "700",
        fontSize: "2rem",
        transition: "all ease 200ms",
    }
    const siteIndicator = {
        borderRight: "30px solid var(--green-1)",
        color: "var(--dark-1)",
        animationPlayState: "running",
        transition: "all ease-in-out 300ms",
    }

    return (
        <div className="dash-status">

            <Header
                page="status"
                profile={<ProfileMenu />}
            />

            <div
                className="sites"
                style={expanded ? sitesLayout1 : sitesLayout2}
            >
                <SiteStatus
                    rate={status_01}
                    site="01 Plant"
                    comment={jsonStatus_01.comment}
                />
                <SiteStatus
                    rate={status_02}
                    site="02 Plant"
                    comment={jsonStatus_02.comment} />
                <SiteStatus
                    rate={status_03}
                    site="03 Plant"
                    comment={jsonStatus_03.comment} />
                <SiteStatus
                    rate={status_04}
                    site="04 Plant"
                    comment={jsonStatus_04.comment} />
                <SiteStatus
                    rate={status_urea}
                    site="Urea Plant"
                    comment={jsonStatus_urea.comment} />
                <SiteStatus
                    rate={totalDemin}
                    site="demin plant"
                    comment={jsonStatus_demin.comment} />
                <SiteStatus
                    rate={jsonStatus_ufc.rate}
                    site="UFC-85"
                    comment={jsonStatus_ufc.comment} />
                <SiteStatus
                    rate={jsonStatus_ph.bulk}
                    site="product handling"
                    comment={jsonStatus_ph.comment} />

            </div>
            <div
                className="sites-detailed"
                style={expanded ? { display: "none" } : { display: "flex" }}
            >
                {sitesTNO.map((selectedSite, index) => (
                    <div
                        key={index}
                        className="sites-detailed-choices"
                        onClick={(e) => setSite(selectedSite)}
                        style={selectedSite == site ? highlightedSite : {}}
                    >
                        <h1>{selectedSite}</h1>
                        <div className={selectedSite == site ? "site-indicator blink" : "site-indicator"}
                            style={selectedSite == site ? siteIndicator : { animationPlayState: "running" }}
                        >

                        </div>
                    </div>

                ))}

            </div>
            <div className="detailed-status"
                style={expanded ? { display: "none" } : { opacity: "1" }}
            >
                <StatusUrea
                    expand={expanded}
                    data={phdData}
                    samples={ureaSampleData}
                    site={site} />
            </div>
        </div>
    )
}

export default Status;