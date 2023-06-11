import Credentials from "next-auth/providers/credentials";
import GoogleProvider from 'next-auth/providers/google';
import NextAuth from "next-auth";
import { connectToDB } from '@utils/database';
import User from '@models/user';



const handler = NextAuth({
    providers: [
        Credentials({
            name: "Nutrien",
            id: "Nutrien",
            credentials: {
                username: { label: "username", type: "text" },
                password: { label: "password", type: "password" }
            },
            async authorize(credentials) {
                const { username, password } = credentials;
                try {
                    await connectToDB();
                    console.log(`username: ${username}`);

                    const userExists = await User.findOne({
                        username: username
                    });
                    if (username !== userExists.username) {
                        throw new Error("Invalid username and/or password");
                        // return null;
                    } else {
                        const { _id, username, email, image } = userExists;
                        const user = {
                            id: _id,
                            username: username,
                            email: email,
                            image: image
                            // email: `${userExists.username}@fake.com`,
                        };
                        return user;
                    }
                } catch (error) {
                    console.log("Error checking if local user exists: ", error.message);
                    return null;
                }
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/",
    },
});


export { handler as GET, handler as POST };