'use client';

import '@styles/global.css';
import '@styles/dashboard.css';
import Navigation from '@components/Navigation';
import { useState } from 'react';
import { FontAwesomeIcon } from "fontAwesome";
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";


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
    const normalWidth = '20vw';


  return (
    <div className="dashboards">
        <Navigation 
          collapse={navCollapsed}
          nrmWidth={normalWidth}
          clspWidth={collapsedWidth}
          />
        <FontAwesomeIcon
                icon={faAnglesLeft}
                className="nav-toggle"
                onClick={toggleNav}
                style={navCollapsed ? {transform: 'rotateZ(180deg) scale(0.8) ', left: '3vw' }:{}}
        />
        <div 
          className="dash-canvas"
          style={navCollapsed ? {width: '95vw', left: '5vw' }:{width: '80vw', left: '20vw'}}
        >
            {children}
        </div>
    </div>
 
  )
}
