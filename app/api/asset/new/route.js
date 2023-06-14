import Asset from "@models/asset";
import { connectToDB } from "@utils/database";

export const POST = async (req) => {
    const { title, desc, site, drawings, jargon } = await req.json();

    try {
        await connectToDB();
        const newAsset = new Asset({
            title: title,
            desc: desc,
            site: site,
            jargon: jargon,
            drawings: drawings
        });
        await newAsset.save();
        return new Response(JSON.stringify(newAsset), { status: 201 });
    } catch (error) {
        console.log(error);
        return new Response("Failed to create new asset", { status: 500 });

    }
}