import { tungsten } from "@utils/tungsten";
import { phd_urea } from "@utils/phd";
import { getTungstenAccess } from "@utils/getTungstenAccess";


export const GET = async (req, { params }) => {
    const accessToken = await getTungstenAccess();
    // console.log(`TAGS: Access Token: ${accessToken}`);
    
    // console.log("TAGS: tungsten fetch: ", req)

    const url = new URL(req.url, 'http://localhost:3000');
    const tag = new URLSearchParams(url.searchParams).get("tag");
    // console.log("tungsten query: ", tag)
    const tagString = phd_urea.map(tag => `tagName=${tag}`).join('&') + '&';
    // console.log("tagString: ", tagString);
    // console.log(`FETCH STRING: ${tungsten.tags}${tagString}page=1&size=300&${tungsten.tagsFields}`)

    try {

        const res = await fetch(`${tungsten.tags}=${tagString}&page=1&size=300${tungsten.latestFields}`,
            {
                method: "GET",
                headers: {
                    accept: "application/json",
                    // Authorization: `Bearer ${process.env.TUNGSTEN_BEARER}`,
                    Authorization: `Bearer ${accessToken}`,
                },
            });

        if (!res.ok) {
            throw new Error("TAGS: Tungsten query failed!")
        }

        const data = await res.json();
        // console.log("TUNGSTEN SERVER: ", data);
        return new Response(JSON.stringify(data));


    } catch (error) {
        console.log("TAGS: TUNGSTEN SERVER ERROR: ", error);
        return new Response("Failed to fetch tag", { status: 500 });

    }

};
