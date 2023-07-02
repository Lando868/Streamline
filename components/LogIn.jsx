'use client';

import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { FontAwesomeIcon } from "fontAwesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

import google_logo from "../public/assets/images/google_logo.png";
import ntr_logo from "../public/assets/images/ntr_logo.png";

import RegisterModal from "./RegisterModal";



const LogIn = () => {

    const router = useRouter();
    const callbackUrl = (router.query?.callbackUrl || "/").toString();

    const [providers, setProviders] = useState(null);
    const [error, setError] = useState("");
    const [genericPassword, setGenericPassword] = useState("generic")

    useEffect(() => {
        (async () => {
            const res = await getProviders();
            setProviders(res);
        })();
    }, []);




    const handleNTRLogin = async (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        // const password = e.target.password.value;
        const password = genericPassword;
        const result = await signIn("Nutrien", {
            username: username,
            // password,
            redirect: false,
            callbackUrl: callbackUrl,
        });
        if (result?.error) {
            console.log("Sign in: ", error)
            setError(`Invalid username and/or password`);
        } else {
            console.log("signIn result: ", result);
            router.push("/dashboard");

        }
    }


    const btnLogo = '30';


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
                <form className="form-login" onSubmit={handleNTRLogin}>
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
                            className='ntr-logo'
                        />
                        Sign in with Nutrien
                    </button>

                    <button
                        type='button'
                        key='Google'
                        onClick={() => {
                            signIn("google", {
                                callbackUrl: "/dashboard",
                            });
                        }}

                        className='google-btn btn'
                    >
                        <Image
                            src={google_logo}
                            width={btnLogo}
                            height={btnLogo}
                            alt='nutrien-logo'
                            className='google-logo'
                        />
                        Sign in with Google
                    </button>

                </form>
            </div>

        </section>
    )
}

export { LogIn as default };
