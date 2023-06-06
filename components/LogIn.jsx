'use client';

import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Link from "next/link";

import { FontAwesomeIcon } from "fontAwesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";


const LogIn = () => {


    const { data: session } = useSession();

    const [providers, setProviders] = useState(null);

    useEffect(() => {
        (async () => {
            const res = await getProviders();
            setProviders(res);
        })();
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
                    <Link href="/dashboard" className="login-link"><button type="button" className="btn login-btn">LOG IN</button></Link>
                    {console.log(providers)}
                    <>
                        {providers &&
                            Object.values(providers).map((provider) => (
                                <button
                                    type='button'
                                    key={provider.name}
                                    onClick={() => {
                                        signIn(provider.id);
                                    }}
                                    className='login-btn btn'
                                >
                                    Sign in with {provider.name}
                                </button>
                            ))}
                    </>
                </form>
            </div>

        </section>
    )
}

export default LogIn;