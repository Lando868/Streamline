import { tungsten } from "@utils/tungsten";
import { getTungstenAccess } from "@utils/getTungstenAccess";

export const GET = async (req, { params }) => {

    const accessToken = await getTungstenAccess();
    const url = new URL(req.url, 'http://localhost:3000');
    const tag = new URLSearchParams(url.searchParams).get("tag");

    try {
        const res = await fetch(`${tungsten.latestValue}=${tag}&${tungsten.latestFields}`,
            {
                method: "GET",
                headers: {
                    accept: "application/json",
                    // Authorization: `Bearer ${process.env.TUNGSTEN_BEARER}`,
                    Authorization: `Bearer ${accessToken}`,
                },
            });

        if (!res.ok) {
            throw new Error("Tungsten query failed!")
        }

        const data = await res.json();
        // console.log("TUNGSTEN SERVER: ", data);
        return new Response(JSON.stringify(data));


    } catch (error) {
        console.log("THIS TUNGSTEN SERVER ERROR: ", error);
        return new Response("Failed to fetch tag", { status: 500 });

    }

};
