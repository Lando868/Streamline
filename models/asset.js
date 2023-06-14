import { Schema, model, models } from 'mongoose';

const AssetSchema = new Schema({
    title: {
        type: String,
        required: [true, "Asset title is required"],
    },
    desc: {
        type: String
    },
    site: {
        type: String,
        required: [true, "Asset must be associated with a site"],
    },
    jargon: [],
    drawings: []

})

const Asset = models.Asset || model("Asset", AssetSchema);

export default Asset;

// {
//     name: String,
//     size: Number,
//     mimetype: String,
//     lastModifiedDate: Date,
//     lastModified: Date
// }