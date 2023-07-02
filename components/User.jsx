'use client';

import Image from "next/image";
import { useSession } from "next-auth/react";



const User = () => {

    const { data: session } = useSession();

    const userLoggedIn = session?.user.name;
    const userImg = session?.user.image;
    const picSize = '25';

    return (
        <div className="user-block">

            {userImg?.length > 1 ?
                <Image
                    style={{ borderRadius: "50%" }}
                    src={userImg ? userImg : "/assets/images/gear1.png"}
                    width={picSize}
                    height={picSize}
                    alt="profile-image"
                />
                :
                <div className="user-initial">
                    <span>{userImg}</span>
                </div>

            }
            <p className="logged-in-as">{userLoggedIn}</p>
        </div>
    )
}

export default User;