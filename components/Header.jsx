'use client';
import { useSession } from "next-auth/react";
import { useState, useRef, useEffect, Suspense } from 'react';
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";

import { date } from '@utils/date';
import { shift } from '@utils/shift';
import { usePathname, useRouter } from "next/navigation";
import { FontAwesomeIcon } from "fontAwesome";
import { faRightFromBracket, faCaretDown, faCalendarDays, faMagnifyingGlass, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import Clock from "./Clock";

const Header = () => {

    const router = useRouter();

    const { data: session } = useSession();
    {/*console.log("Session values: ", session ? session : "whyyyy!!!!");*/ }

    const userLoggedIn = session?.user.name;
    const userImg = session?.user.image;
    const picSize = '25';

    const shiftCheck = shift();
    const streamDate = date();
    console.log("streamDate: ", streamDate)

    const profileDropdown = {
        opacity: "1",
        transform: "scaleY(1)",
        transition: "all cubic-bezier(0.175, 0.885, 0.32, 1.275) 500ms",
        pointerEvents: "all"
    }

    const profileHidden = {
        transform: "scaleY(0)",
        transition: "all cubic-bezier(0.175, 0.885, 0.32, 1.275) 500ms",
        pointerEvents: "none",
    }

    const dropdownRef = useRef(null);
    const menuRef = useRef(null);
    const uploadRef = useRef([])
    const searchRef = useRef("");

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [site, setSite] = useState("");


    const uploaded = uploadRef.current;

    const handleClickOutside = (e) => {
        if (
            dropdownRef.current && !dropdownRef.current.contains(e.target) &&
            menuRef.current && !menuRef.current.contains(e.target)
        ) {
            setIsDropdownOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    }, []);


    const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);


    useEffect(() => {
        console.log("Site: ", site);
    }, [site]);




    return (
        <div className="dash-header">
            <select name="site"
                className="site-select"
                onChange={(e) => { e.preventDefault(); setSite(e.target.value) }}
                value={site}
            >
                <option className="dropdown" value="default" >Select your site...</option>
                <option className="dropdown">01/02/OSBL</option>
                <option className="dropdown">03 Plant</option>
                <option className="dropdown">04 Plant</option>
                <option className="dropdown">Urea Plant</option>
                <option className="dropdown">Demin Plant</option>
                <option className="dropdown">UFC-85</option>
                <option className="dropdown">Product Handling</option>
            </select>
            <div className="shift-block">
                {/*<p className="shift"> {date("day")}</p>*/}
                <span className="shift"> {shiftCheck.shift} </span>
                <span className="shift-word">Shift</span>
                <span className="rotation">{shiftCheck.rotation} </span>
            </div>
            <div className="date-block">
                <FontAwesomeIcon
                    className="calendar"
                    icon={faCalendarDays}
                />
                <div className="date-and-time">
                    <p className="date">{streamDate.header}</p>
                    <Suspense fallback={<div className="time">Synchronizing...</div>}>
                        <Clock className="time" />
                    </Suspense>
                    <span className="period">{shiftCheck.period}</span>
                </div>


            </div>
            <div
                ref={dropdownRef}
                className="profile"
                onClick={toggleDropdown}
            >
                <Image
                    style={{ borderRadius: "50%" }}
                    src={userImg}
                    width={picSize}
                    height={picSize}
                    alt="profile-image"
                />
                <p className="logged-in-as">{userLoggedIn}</p>
                <FontAwesomeIcon
                    className="dropdown-arrow"
                    style={isDropdownOpen ? { transform: "rotateX(180deg)", transition: "all ease 600ms" } : { transition: "all ease 800ms" }}
                    icon={faCaretDown}
                />
                <div
                    ref={menuRef}
                    className="profile-menu"
                    style={isDropdownOpen ? { ...profileDropdown } : { ...profileHidden }}
                >
                    <div
                        className="log-out"
                        onClick={signOut}
                    >
                        <FontAwesomeIcon
                            className="log-out-icon"
                            icon={faRightFromBracket}
                        />
                        <span className="log-out-text">Log Out</span>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default Header;