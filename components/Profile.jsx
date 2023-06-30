'use client';

import { useSession, signIn, signOut } from "next-auth/react";
import { useState, useRef, useEffect, Suspense } from 'react';
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { FontAwesomeIcon } from "fontAwesome";
import { faRightFromBracket, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
import User from "./User";




const ProfileMenu = (props) => {

    const dropdownRef = useRef(null);
    const menuRef = useRef(null);


    const dropdownOpen = {
        opacity: "1",
        transform: "scaleY(1)",
        transition: "all cubic-bezier(0.175, 0.885, 0.32, 1.275) 500ms",
        pointerEvents: "all"
    }

    const dropdownHidden = {
        transform: "scaleY(0)",
        transition: "all cubic-bezier(0.175, 0.885, 0.32, 1.275) 500ms",
        pointerEvents: "none",
    }

    const arrowUp = { transition: "all ease 800ms" }
    const arrowDown = { transform: "rotateX(180deg)", transition: "all ease 600ms" }

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

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




    return (
        <div
            ref={dropdownRef}
            className="profile"
            onClick={toggleDropdown}
        >
            <User />

            <FontAwesomeIcon
                className="dropdown-arrow"
                style={isDropdownOpen ? { ...arrowDown } : { ...arrowUp }}
                icon={faCaretDown}
            />
            <div
                ref={menuRef}
                className="profile-menu"
                style={isDropdownOpen ? { ...dropdownOpen } : { ...dropdownHidden }}
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
    )
}

export default ProfileMenu;