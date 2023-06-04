'use client';

import LogIn from './LogIn';
import Dashboard from './Dashboard';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Landing() {

    const [isLoggedIn, SetIsLoggedIn] = useState(false);



    return (

        isLoggedIn ? <Dashboard /> : <LogIn />

    )
}