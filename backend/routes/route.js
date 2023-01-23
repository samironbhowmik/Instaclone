const postModel = require("../models/post");
const router = require("express").Router()

router.post("/api/post", async(req,res)=>{
    try {
        const {author, location, description} =req.body.data
        console.log(author, location, description);
        const {image} = req.body.file
        // console.log(image);

        const allUser = await postModel.create({
            author:author,
            location:location,
            description:description,
            image:image
        })
        console.log(allUser);

        res.json({
            status:"success",
            allUser
        })
    } catch (error) {
        res.json({
            status:"failed",
            message:error.message
        })
    }
})

router.get("/api/get", async(req,res)=>{
    try {
        const allPost = await postModel.find()
        res.json({
            status:"success",
            allPost
        })
    } catch (error) {
        res.json({
            status:"failed",
            message:error.message
        })
    }
})

module.exports = router