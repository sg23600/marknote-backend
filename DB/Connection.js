import mongoose from "mongoose"
const URI =
  "mongodb+srv://dbUser:dbUser@cluster0.mjfk8.mongodb.net/marknote?retryWrites=true&w=majority"

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
