import { tungsten } from "@utils/tungsten";
import { ureaSamples } from "@utils/phd";
import { getTungstenAccess } from "@utils/getTungstenAccess";
import { times } from "@utils/date";


export const GET = async (req, { params }) => {

    const accessToken = await getTungstenAccess();
    // console.log(`SUEZ: Access Token: ${accessToken}`);
    
    // console.log("SUEZ: Tungsten fetch: ", req)
    const url = new URL(req.url, 'http://localhost:3000');
    const tag = new URLSearchParams(url.searchParams).get("tag");
    console.log("SUEZ tungsten query: ", tag);
    // const tagString = ureaSamples.map(tag => `tagName=${encodeURIComponent(tag)}`).join('&') + '&';
    const tagString = ureaSamples.map(tag => `tagName=${encodeURIComponent(tag)}`).join('&');
    const { encUTC: timeStamp1, encLocale: timeStamp2 } = times();
    const interpolation = "linear";
    const closest = "before";
    const page = 1;
    const size = 15;
    // console.log("tagString: ", tagString);
    // console.log(`FETCH STRING: ${tungsten.tags}${tagString}page=1&size=300&${tungsten.tagsFields}`)

    try {
        console.log(`timeStamp1=${timeStamp1}`);
        console.log(`timeStamp2=${timeStamp2}`);
        const res = await fetch(`${tungsten.suez}${tagString}&timeStamp=${timeStamp1}&interpolation=${interpolation}&closest=${closest}&page=${page}&size=${size}&${tungsten.tagsFields}`,
            {
                method: "GET",
                headers: {
                    accept: "application/json",
                    // Authorization: `Bearer ${process.env.TUNGSTEN_BEARER}`,
                    Authorization: `Bearer ${accessToken}`,
                },
            });

        if (!res.ok) {
            throw new Error("SUEZ: Urea Sample query failed!")
        }

        const data = await res.json();
        // console.log("TUNGSTEN SERVER: ", data);
        return new Response(JSON.stringify(data));


    } catch (error) {
        console.log("SUEZ: TUNGSTEN SERVER ERROR: ", error);
        return new Response("Failed to fetch tag", { status: 500 });

    }

};
