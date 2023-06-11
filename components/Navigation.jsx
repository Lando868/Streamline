'use client';

import Image from 'next/image';
import Link from 'next/link';
import NavLink from './NavLink';
import { useState, useEffect } from 'react';
import { signIn, SignOut, useSession, getProviders } from 'next-auth/react';
import Logo from './Logo';
import { FontAwesomeIcon } from "fontAwesome";
import { faFlaskVial, faDatabase, faCircleInfo, faChartArea, faGears, faDashboard, faInfo } from "@fortawesome/free-solid-svg-icons";



export default function Navigation(props) {

    let navToggle = {};
    let iToggle = {};
    let iOToggle = {};
    let toggle_label = {};
    let toggle_tag = "link-label-sm";

    navToggle = props.collapse ? { opacity: '0', transition: 'opacity  ease 300ms 00ms' } : { opacity: '1', transition: 'opacity ease-in-out 450ms 200ms' };
    iToggle = props.collapse ? { opacity: '0', transform: 'translateX(1rem)' } : {};
    iOToggle = props.collapse ? { opacity: '1', transition: 'opacity ease 100ms 450ms, all cubic-bezier(0.215, 0.61, 0.355, 1) 1200ms ' } : { opacity: '0' };
    toggle_label = props.collapse ? { opacity: '0', transition: 'opacity ease 100ms 450ms, all cubic-bezier(0.215, 0.61, 0.355, 1) 1200ms ' } : { opacity: '1' };
    toggle_tag = props.collapse ? "link-label-sm" : "link-label-sm toggled";



    let navData = { name: 'ASSET LOG', icon: faDatabase };
    let navProd = { name: 'PRODUCTION', icon: faDashboard };
    let navReports = { name: 'REPORTS', icon: faChartArea };
    let navChemInv = { name: 'INVENTORY', icon: faGears };
    let navSample = { name: 'SAMPLE DATA', icon: faFlaskVial };
    let navStatus = { name: 'SITE STATUS', icon: faCircleInfo };

    const linkArr = [navData, navProd, navReports, navChemInv, navSample, navStatus]



    // create nva-link component that accepts navToggle and icons as props
    // use array.map to generate the nav-links
    // set the height of each nav-link to be equal to calc((100vh - 50px)/(linksArr.length + 1); 


    return (
        <nav className="navbar" style={{ width: props.collapse ? props.clspWidth : props.nrmWidth }}>
            <div className="nav-backing"
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



                {/*<div className="nav-link">DATA</div>
                <div className="nav-link">REPORTS</div>
                <div className="nav-link">DASHBOARD</div>
                <div className="nav-link">CHEMICAL INVENTORY</div>
                <div className="nav-link">SAMPLE RESULTS</div>
                <div className="nav-link">SITE STATUS</div>*/}
            </div>
        </nav>
    )
}