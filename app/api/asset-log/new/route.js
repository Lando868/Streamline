import Comment from "@models/comment";
import Asset from "@models/asset";
import User from "@models/user";
import { connectToDB } from "@utils/database";


export const POST = async (req) => {
    const { asset, content, createdBy, jobType, tag } = await req.json();

    try {
        await connectToDB();

        const assetObject = await Asset.findOne({ title: asset });
        const userObject = await User.findOne({ username: createdBy });
        const assetID = assetObject._id;
        const userID = userObject._id;


        const newComment = new Comment({
            asset: assetID,
            content: content,
            createdOn: new Date(),
            createdBy: userID,
            jobType: jobType,
            tag: tag,
        });
        await newComment.save();
        return new Response(JSON.stringify(newComment), { status: 201 });
    } catch (error) {
        console.log(error);
        return new Response("Failed to create new comment", { status: 500 });

    }
}


