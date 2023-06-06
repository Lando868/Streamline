'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { signIn, SignOut, useSession, getProviders } from 'next-auth/react';
import { FontAwesomeIcon } from "fontAwesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";


export default function Navigation(props) {

    return (
        <nav className="navbar" style={{ width: props.collapse ? props.clspWidth : props.nrmWidth }}>
            <FontAwesomeIcon
                icon={faGear}
                className="gear-collapsed"
            />
            <h1 className="nav-title">{props.collapse ? '' : 'STREAMLINE'}</h1>
            <div></div>
        </nav>
    )
}