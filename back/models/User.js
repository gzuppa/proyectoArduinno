const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    nickname: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
},{
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

module.exports = mongoose.model("User", postSchema);