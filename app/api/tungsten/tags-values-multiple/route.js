import { tungsten } from "@utils/tungsten";
import { phd_urea } from "@utils/phd";

export const GET = async (req, { params }) => {

    console.log("tungsten fetch: ", req)
    const url = new URL(req.url, 'http://localhost:3000');
    const tag = new URLSearchParams(url.searchParams).get("tag");
    console.log("tungsten query: ", tag)
    const tagString = phd_fqi.map(tag => `tagName=${tag}`).join('&') + '&';

    const startTime = "7%2F1%2F2023%2010%3A00%3A00%20AM"
    const endTime = "7%2F28%2F2023%2011%3A00%3A00%20AM"
    const reduction = "reductionType=snapshot&reductionOffset=before&reductionFrequency=43200"
    const pageSize = "size=75&page=1&"
    const fields = "fields=TagName%2C%20DoubleValue%2C%20StringValue%2C%20TimeStamp%2C%20Confidence";
    console.log(`FETCH STRING: ${tungsten.multipleTagsValues}${tagString}page=1&size=300&${tungsten.tagsFields}`)

    try {
        const res = await fetch(`${tungsten.multipleTagsValues}${tagString}&page=1&size=300${tungsten.latestFields}`,
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
