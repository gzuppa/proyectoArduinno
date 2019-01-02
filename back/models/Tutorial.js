const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String
    },
    body: {
        type: String
    },
    photo: {
        type: String
    },
    video: {
        type: String
    }
},{
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

module.exports = mongoose.model("Tutorial", postSchema);