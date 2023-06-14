import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import Credentials from "next-auth/providers/credentials";
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
            async authorize(credentials, req) {
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
                        console.log("else User: ", user)
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
    // session: {
    //     strategy: 'jwt',
    // },
    callbacks: {
        async jwt({ token, user, account, profile }) {
            if (user) {
                console.log("JWT User: ", user);
                console.log("user.id: ", user.id);

                if (account.provider === 'google') {
                    token.name = user.name;
                    token.accessToken = account.access_token;
                    token.id = account.providerAccountId;
                } else {
                    token.name = user.username;
                }

                console.log("token: ", token);
                console.log("user: ", user);
                console.log("account: ", account);
                console.log("profile: ", profile);
            }
            return token;
        }
    },
    pages: {
        signIn: "/",
    }

});


export { handler as GET, handler as POST };