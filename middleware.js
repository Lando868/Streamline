import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";



export async function middleware(req) {


    const pathname = req.nextUrl.pathname;
    const protectedPaths = ["/dashboard"];
    const isPathProtected = protectedPaths?.some((path) => pathname == path);
    const res = NextResponse.next();

    if (isPathProtected) {
        const token = await getToken({ req });
        if (!token) {
            // const url = new URL('/login', req.url);
            const url = new URL('/', req.url);
            url.searchParams.set("callbackUrl", pathname);
            // res = url.toString();
            console.log("Attempting to protect path");
            console.log(`URL: ${url}`);
            return NextResponse.redirect(url);
        }
    }
    return res;

}





     // try {
        //     const decodedToken = jwt.verify(token, YOUR_JWT_SECRET);
        //     const { id, username, email, image } = decodedToken;

        //     console.log('User ID:', id);
        //     console.log('Username:', username);
        //     console.log('Email:', email);
        //     console.log('Image:', image);

        // } catch (error) {
        //     console.log(error)
        //     return res.status(401).json({ message: 'Unauthorized' });
        // }
