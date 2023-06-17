'use client';

import NavLink from './NavLink';
import Logo from './Logo';
import { faLock, faFlaskVial, faDatabase, faCircleInfo, faChartArea, faGears, faDashboard, faInfo, faCodePullRequest } from "@fortawesome/free-solid-svg-icons";
import { usePathname, useRouter } from "next/navigation";


export default function Navigation(props) {

    let navToggle = props.collapse ? { opacity: '0', transition: 'opacity  ease 300ms' } : { opacity: '1', transition: 'opacity ease-in-out 450ms 200ms' };
    let iToggle = props.collapse ? { opacity: '0', transform: 'translateX(1rem)' } : {};
    let iOToggle = props.collapse ? { opacity: '1', transition: 'opacity ease 100ms 450ms, all cubic-bezier(0.215, 0.61, 0.355, 1) 1200ms' } : { opacity: '0' };
    let toggle_tag = props.collapse ? "link-label-sm" : "link-label-sm toggled";

    let navData = { name: 'ASSET LOG', icon: faDatabase };
    let navProd = { name: 'PRODUCTION', icon: faDashboard };
    let navLTT = { name: 'LTT TRACKER', icon: faLock };
    let navReports = { name: 'REPORTS', icon: faChartArea };
    let navChemInv = { name: 'INVENTORY', icon: faGears };
    let navSample = { name: 'SAMPLE DATA', icon: faFlaskVial };
    let navStatus = { name: 'SITE STATUS', icon: faCircleInfo };
    let navTest = { name: 'TESTING', icon: faCodePullRequest };

    const linkArr = [navData, navProd, navLTT, navReports, navChemInv, navSample, navStatus, navTest]

    return (
        <nav className="navbar" style={{ width: props.collapse ? props.clspWidth : props.nrmWidth }}>
            <div
                className="nav-backing"
                style={{ width: props.collapse ? props.clspWidth : props.nrmWidth }}>
                <Logo />
            </div>
            <h1 className="nav-title" style={props.collapse ? { transform: 'translateX(-10vw)', opacity: '0' } : { transform: '', opacity: '1' }}>STREAMLINE</h1>
            <div className="nav-links">
                {linkArr.map((link, index) => (
                    <NavLink
                        key={index}
                        toggle={navToggle}
                        label={link.name}
                        icon={link.icon}
                        iconToggle={iToggle}
                        iconOnlyToggle={iOToggle}
                        tag={toggle_tag}
                    />
                ))}
            </div>
        </nav>
    )
}