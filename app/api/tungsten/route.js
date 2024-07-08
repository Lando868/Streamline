import { tungsten } from "@utils/tungsten";

export const GET = async (req, { params }) => {

    // console.log("tungsten fetch: ", req)
    const url = new URL(req.url, 'http://localhost:3000');
    const tag = new URLSearchParams(url.searchParams).get("tag");
    // console.log("tungsten query: ", tag)

    try {
        const res = await fetch(`${tungsten.latestValue}=${tag}&${tungsten.latestFields}`,
            {
                method: "GET",
                headers: {
                    accept: "application/json",
                    Authorization: `Bearer ${process.env.TUNGSTEN_BEARER}`,
                },
            });

        if (!res.ok) {
            throw new Error("Tungsten query failed!")
        }

        const data = await res.json();
        // console.log("TUNGSTEN SERVER: ", data);
        return new Response(JSON.stringify(data));


    } catch (error) {
        console.log("TUNGSTEN SERVER ERROR: ", error);
        return new Response("Failed to fetch tag", { status: 500 });

    }

};
