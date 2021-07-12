import express from "express"
import cors from "cors"
import connectDB from "./DB/Connection"
const app = express()
app.use(express.json({ extended: false }))
app.use(cors())

connectDB()

app.use("/user", require("./API/User"))
app.use("/userexists", require("./API/userExists"))

app.get("/", (req, res) => {
  res.send("It works!")
})

// app.post("/notes/<id>", (req, res) => {})

app.listen(5000, () => {
  console.log("Port 5000 active!")
})
