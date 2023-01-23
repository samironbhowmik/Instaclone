const mongoose = require("mongoose")

mongoose.set("strictQuery", false)
const connectDB = ()=>{
    mongoose.connect("mongodb+srv://root:root123@cluster0.jj1siun.mongodb.net/?retryWrites=true&w=majority").then(()=>{
        console.log("Database is connected!");
    })
}

module.exports = connectDB;