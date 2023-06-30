'use client';

import { useState, useRef, useEffect, Suspense } from 'react';
import { FontAwesomeIcon } from "fontAwesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";



const Dropdown = (props) => {

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

    const dropdownRef = useRef(null);
    const menuRef = useRef(null);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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


    return (
        <div
            ref={dropdownRef}
            className={props.type}
            onClick={toggleDropdown}
        >
            <h1 className="dropdown-label">
                {props.site === "" ? props.label : props.site}</h1>
            <FontAwesomeIcon
                className="dropdown-arrow"
                style={isDropdownOpen ? { ...arrowDown } : { ...arrowUp }}
                icon={faCaretDown}
            />
            <div
                ref={menuRef}
                className="dropdown-menu"
                style={isDropdownOpen ? { ...dropdownOpen } : { ...dropdownHidden }}
            >

                {props.items.map((item, index) => (
                    <div
                        key={index}
                        className={`${props.type}-dropdown`}
                        onClick={() => props.selected && props.selected(item)}
                    >
                        <span>{item}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dropdown;