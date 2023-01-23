const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
    author:String,
    location:String,
    description:String,
    image:String
})

const postModel = mongoose.model("postModel", postSchema)
module.exports = postModel