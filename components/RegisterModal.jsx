'use c;lient';

import { useState } from "react";

const RegisterModal = (props) => {

    const [showModal, setShowModal] = useState(false);

    const handleRegister = async () => {
        await User.create({
            email: `${userExists.username}@fake.com`,
            username: username || profile.name,
        });

        setShowModal(false);
    }


    const handleDismiss = () => {
        setShowModal(false);
    }


    return (
        showModal && (
            <div id="register-modal">
                <p>Register as a new user?</p>
                <div>
                    <button onClick={handleRegister}>Yes</button>
                    <button onClick={handleDismiss}>No</button>
                </div>
            </div>

        )
    )
}

export default RegisterModal;