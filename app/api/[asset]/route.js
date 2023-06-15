import Asset from "@models/asset";
import { connectToDB } from "@utils/database";
import { URL, URLSearchParams } from 'url';


export const GET = async (req, { params }) => {
    // const { title } = req.query;
    // console.log("req: ", req)
    const url = new URL(req.url, 'http://localhost:3000');
    const query = new URLSearchParams(url.searchParams).get("title");
    // console.log("My search: ", search);
    console.log("Query: ", query);
    const title = query;

    try {
        await connectToDB();
        let assets;

        if (title) {
            const regex = new RegExp(title, 'i');
            assets = await Asset.find({
                $or: [
                    { title: { $regex: regex } },
                    { desc: { $regex: regex } },
                    { jargon: { $regex: regex } }
                ]
            });
        } else if (title == "") {
            assets = [];
        }

        return new Response(JSON.stringify(assets), { status: 201 });
    } catch (error) {
        console.log(error);
        return new Response("Failed to fetch asset", { status: 500 });

    }
}

