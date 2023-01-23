const mongoose = require("mongoose")

mongoose.set("strictQuery", false)
const connectDB = ()=>{
    mongoose.connect("mongodb://localhost:27017/instagram").then(()=>{
        console.log("Database is connected!");
    })
}

module.exports = connectDB;