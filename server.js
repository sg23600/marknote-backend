import express from "express"
import cors from "cors"
import connectDB from "./DB/Connection"
// require("dotenv").config()
const app = express()
app.use(express.json({ extended: false }))
app.use(cors())

connectDB()

// const port = process.env.PORT || 3000
// console.log(`Your port is ${port}`)

app.use("/user", require("./API/User"))
app.use("/notes", require("./API/Notes"))

app.get("/", (req, res) => {
  res.send("It works!")
})

app.listen(5000, () => {
  console.log("Port 5000 active!")
})
