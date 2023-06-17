const mongoose = require('mongoose')
const dotenv = require("dotenv")
dotenv.config()
// console.log(process.env.MONGO_URL)
mongoose.connect("mongodb+srv://admin:g100ourav@hello.6mwpb00.mongodb.net/?retryWrites=true&w=majority").then(()=> {console.log("connection successfull")}).catch((err)=> {console.log("not connect")})

