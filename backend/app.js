const express = require("express")
const dotenv = require("dotenv")
const connectDB = require("../backend/connectDB/connect")
const route = require("../backend/routes/route")
const cors = require("cors")


const app = express()
dotenv.config()
app.use(cors())

app.use(express.json({limit:"5mb"}))
app.use(express.static(__dirname + 'images'))

app.use("/", route)

app.listen(process.env.PORT, async()=>{
    await connectDB();
    console.log(`Server is listening at port ${process.env.PORT}`);
})