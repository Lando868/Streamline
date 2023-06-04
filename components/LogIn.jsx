'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { signIn, SignOut, useSession, getProviders } from 'next-auth/react';
import { FontAwesomeIcon } from 'fontAwesome';
import { faGear } from "@fortawesome/free-solid-svg-icons";


export default function LogIn() {

    const [providers, setProviders] = useState(null);

    useEffect(() => {
        const setProviders = async () => {
            const response = await getProviders();

            setProviders(response);
        }
        setProviders();
    }, []);


    return (
        <section className="landing" >
            <FontAwesomeIcon
                icon={faGear}
                className="gear"
            />
            <h1 className="title">STREAMLINE</h1>
            <p className="copy">Harnessing the Power of Data</p>
            <hr className="divider" />
            <div className="btn-split">
                <div className="welcome-login-group">
                    <form action="/login" method="post" className="form-login">
                        <div className="username-div">
                            <input type="text" name="username" className="username" required autoComplete="off" />
                            <span className="user-span">username</span>
                        </div>
                        <div className="password-div">
                            <input type="password" name="password" className="password" required />
                            <span className="password-span">password</span>
                        </div>
                        <button type="submit" href="/login" className="btn login-btn">LOG IN</button>
                    </form>
                    <>
                        {providers &&
                            Object.values(providers).map((provider) => (
                                <button
                                    className="btn"
                                    type="button"
                                    key={provider.name}
                                    onClick={() => signIn(provider.id)}
                                >
                                    Sign in with {provider.name}
                                </button>
                            ))}
                    </>
                </div>
            </div>
        </section>
    )
}