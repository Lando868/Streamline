'use client';

import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { FontAwesomeIcon } from "fontAwesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

import google_logo from "../public/assets/images/google_logo.png";
import ntr_logo from "../public/assets/images/ntr_logo.png";



const LogIn = () => {

    const btnLogo = '30';

    const { data: session } = useSession();
    {/*const callbackUrl = "/";*/ }
    const router = useRouter();
    const callbackUrl = (router.query?.callbackUrl || "/").toString();

    const [providers, setProviders] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        (async () => {
            const res = await getProviders();
            setProviders(res);
        })();
    }, []);

    const handleNTRlogin = async (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        const result = await signIn("Nutrien", {
            username,
            password,
            redirect: false,
            callbackUrl: callbackUrl,
        });
        if (result?.error) {
            {/*setError(`Invalid username and/or password_${result.error}`);*/ }
            setError(`Invalid username and/or password`);
        } else {
            router.push("/dashboard");
        }
    }




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
                <form className="form-login" onSubmit={handleNTRlogin}>
                    {!!error && <p className="login-error">{error}</p>}
                    <div className="username-div">
                        <input type="text" name="username" className="username" required autoComplete="off" />
                        <span className="user-span">username</span>
                    </div>
                    <div className="password-div">
                        <input type="password" name="password" className="password" required />
                        <span className="password-span">password</span>
                    </div>
                    <button type="submit" className="btn login-btn">LOG IN</button>
                    <button
                        type='submit'
                        key='Nutrien'
                        className='ntr-btn btn'
                    >
                        <Image
                            src={ntr_logo}
                            width={btnLogo}
                            height={btnLogo}
                            alt='nutrien-logo'
                            className='nutrien-logo'
                        />
                        Sign in with Nutrien
                    </button>
                    <button
                        type='button'
                        key='Google'
                        onClick={() => { signIn("Google", { callbackUrl: '/dashboard' }) }}
                        className='google-btn btn'
                    >
                        <Image
                            src={google_logo}
                            width={btnLogo}
                            height={btnLogo}
                            alt='google-logo'
                            className='google-logo'
                        />
                        Sign in with Google
                    </button>
                </form>
            </div>

        </section>
    )
}

export default LogIn;