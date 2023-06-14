import { Schema, SchemaType, model, models } from 'mongoose';

const CommentSchema = new Schema({
    asset: {
        type: Schema.Types.ObjectId,
        ref: 'Asset',
        required: [true, "Associated asset is required"],
    },
    content: {
        type: String,
        required: [true, "Comment missing content"]
    },
    createdOn: {
        type: Date,
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "You must be signed in to post a comment"],

    },
    jobType: {
        type: String,
    },
    tag: [],

})

const Comment = models.Comment || model("Comment", CommentSchema);

export default Comment;


// 01MP03B: 6488f3b7426dab6c28072876


