import mongoose from "mongoose"
require("dotenv").config()
const port = process.env.PORT || 3000
console.log(`Your port is ${port}`)

const URI = process.env.URI

const connectDB = () => {
  mongoose
    .connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB connected!")
    })
}

export default connectDB
