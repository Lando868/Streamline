'use client';


import { HistorianProvider } from '@context/HistorianContext';
import { StatusLayoutProvider } from '@context/StatusLayoutContext';

import Navigation from '@components/Navigation';
import { useState, useRef, useEffect, Suspense } from 'react';
import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

import { FontAwesomeIcon } from "fontAwesome";
import { faAnglesLeft, faRightFromBracket, faCaretDown, faCalendarDays, faMagnifyingGlass, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

import Clock from "../../components/Clock";
import { date } from '@utils/date';
import { shift } from '@utils/shift';

export const metadata = {
    title: 'Streamline: Dashboard',
    description: 'Harnessing the Power of Data',
}

export default function DashboardLayout({ children }) {

    const [navCollapsed, setNavCollapsed] = useState(false);

    const toggleNav = () => {
        setNavCollapsed((prev) => !prev);
    }

    const collapsedWidth = '5vw';
    const normalWidth = '15vw';

    const collapsedCanvas = {
        width: '95vw',
        left: '5vw'  // 96px
    }

    const openCanvas = {
        width: '85vw',
        left: '15vw' // 288px
    }


    return (
        <div>
            <HistorianProvider>
                <StatusLayoutProvider>
                    <Navigation
                        collapse={navCollapsed}
                        nrmWidth={normalWidth}
                        clspWidth={collapsedWidth}
                    />
                    <FontAwesomeIcon
                        icon={faAnglesLeft}
                        className="nav-toggle"
                        onClick={toggleNav}
                        style={navCollapsed ? { transform: 'rotateZ(180deg)', left: '3vw', fontSize: '2rem' } : { fontSize: '2rem' }}
                    />
                    <div
                        className="dashboards"
                        style={navCollapsed ? collapsedCanvas : openCanvas}
                    >
                        {children}
                    </div>
                </StatusLayoutProvider>
            </HistorianProvider>
        </div>

    )
}
