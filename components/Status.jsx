"use client";
import { siteStatus } from "@utils/siteStatus";
import Header from "./Header";
import SiteStatus from "./SiteStatus";
import ProfileMenu from "./Profile";

const Status = () => {


    const status_01 = siteStatus.find((details) => details.site === "01 Unit");
    const status_02 = siteStatus.find((details) => details.site === "02 Unit");
    const status_03 = siteStatus.find((details) => details.site === "03 Unit");
    const status_04 = siteStatus.find((details) => details.site === "04 Unit");
    const status_urea = siteStatus.find((details) => details.site === "urea plant");
    const status_demin = siteStatus.find((details) => details.site === "demin plant");
    const status_ufc = siteStatus.find((details) => details.site === "UFC-85");
    const status_ph = siteStatus.find((details) => details.site === "product handling");


    return (
        <div className="dash-status">
            <Header
                page="status"
                profile={<ProfileMenu />}
            />

            <div className="sites">
                <SiteStatus details={status_01} />
                <SiteStatus details={status_02} />
                <SiteStatus details={status_03} />
                <SiteStatus details={status_04} />
                <SiteStatus details={status_urea} />
                <SiteStatus details={status_demin} />
                <SiteStatus details={status_ufc} />
                <SiteStatus details={status_ph} />

            </div>
        </div>
    )
}

export default Status;