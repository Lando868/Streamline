'use client';
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {
    const [error, setError] = useState("");
    const callbackUrl = "/dashboard";
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const _target = e.target;
        const email = _target.email.value;
        const password = _target.password.value;
        const result = await signIn("Nutrien", {
            email,
            password,
            redirect: false,
            callbackUrl: "/dashboard",

        });
        if (result?.error) {
            setError(result.error);
        } else {
            router.push(callbackUrl);
        }
    }
    return (
        <form className="test-form" onSubmit={handleSubmit}>
            <h1>Sign In Form</h1>
            {!!error && <p>{error}</p>}
            <input type="text" placeholder="email" name="email" />
            <input type="text" placeholder="password" name="password" />
            <button type="submit">Sign In</button>
        </form>
    );
};

export default LoginPage;