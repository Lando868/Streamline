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

    const { phdData, phdDataSite } = useContext(HistorianContext);
    const { expanded, toggleView, site, setSite } = useContext(StatusContext);

    console.log("phdDataSet:", phdData);

    const sitesTNO = ["01 Plant", "02 Plant", "OSBL", "03 Plant", "04 Plant", "Urea Plant", "Demin Plant", "UFC-85", "Product Handling"];

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


    // const status_01 = siteStatus.find((details) => details.site === "01 Unit");
    // const status_02 = siteStatus.find((details) => details.site === "02 Unit");
    // const status_03 = siteStatus.find((details) => details.site === "03 Unit");
    // const status_04 = siteStatus.find((details) => details.site === "04 Unit");
    // const status_urea = siteStatus.find((details) => details.site === "urea plant");
    const status_demin = siteStatus.find((details) => details.site === "demin plant");
    const status_ufc = siteStatus.find((details) => details.site === "UFC-85");
    const status_ph = siteStatus.find((details) => details.site === "product handling");


    const status_01 = phdSite("P_RATE_1.PV").value?.toFixed(1);
    const status_02 = phdSite("P_RATE_2.PV").value?.toFixed(1);
    const status_03 = phdSite("PRATE_3.PV").value?.toFixed(1);
    const status_04 = 0.0;
    // const status_04 = phdSite("O4_FI8016B.PV").value?.toFixed(1);
    const status_urea = ureaCalc(phdUrea("01_FI_104.DACA.PV").value).currentRate.toFixed(1);


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
                    comment=""
                />
                <SiteStatus
                    rate={status_02}
                    site="02 Plant"
                    comment="" />
                <SiteStatus
                    rate={status_03}
                    site="03 Plant"
                    comment="" />
                <SiteStatus
                    rate={status_04}
                    site="04 Plant"
                    comment="" />
                <SiteStatus
                    rate={status_urea}
                    site="Urea Plant"
                    comment="" />
                {/* <SiteStatus rate={status_demin} />
                <SiteStatus rate={status_ufc} />
                <SiteStatus rate={status_ph} /> */}

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
                    site={site} />
            </div>
        </div>
    )
}

export default Status;