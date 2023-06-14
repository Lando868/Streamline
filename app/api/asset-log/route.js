import Comment from "@models/comment";
import Asset from "@models/asset";
import User from "@models/user";
import { connectToDB } from "@utils/database";
import { Schema, SchemaType, model, models } from 'mongoose';


export const GET = async (req) => {

    try {
        await connectToDB();

        const comments = await Comment.find({}).populate(['asset', 'createdBy']);

        return new Response(JSON.stringify(comments), { status: 201 });
    } catch (error) {
        console.log(error);
        return new Response("Failed to fetch all comments", { status: 500 });

    }
}

