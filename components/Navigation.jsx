'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { signIn, SignOut, useSession, getProviders } from 'next-auth/react';


export default function Navigation() {
    return (
        <nav className="navbar">
            <h1 className="nav-title">STREAMLINE</h1>
            <ul>
                <li><Link href="/dashboard">Analytics</Link></li>
                <li>Reports</li>
                <li>Settings</li>
            </ul>
        </nav>
    )
}