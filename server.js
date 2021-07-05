import express from "express"
import cors from "cors"

const app = express()
app.use(express.json({ extended: false }))
app.use(cors())

app.get("/", (req, res) => {
  res.send("It works!")
})

app.listen(5000, () => {
  console.log("Port 5000 active!")
})
