import { tungsten } from "@utils/tungsten";
import { phd_site } from "@utils/phd";

export const GET = async (req, { params }) => {

    console.log("tungsten fetch: ", req)
    const url = new URL(req.url, 'http://localhost:3000');
    const tag = new URLSearchParams(url.searchParams).get("tag");
    console.log("tungsten query: ", tag)
    const tagString = phd_site.map(tag => `tagName=${tag}`).join('&') + '&';
    // console.log("tagString: ", tagString);
    console.log(`FETCH STRING: ${tungsten.tags}${tagString}page=1&size=300&${tungsten.tagsFields}`)

    try {
        const res = await fetch(`${tungsten.tags}=${tagString}&page=1&size=300${tungsten.latestFields}`,
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
        console.log("TUNGSTEN SERVER: ", data);
        return new Response(JSON.stringify(data));


    } catch (error) {
        console.log("TUNGSTEN SERVER ERROR: ", error);
        return new Response("Failed to fetch tag", { status: 500 });

    }

};
