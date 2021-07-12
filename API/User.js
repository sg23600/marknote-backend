import express from "express"
import User from "../models/User"

const route = express.Router()

route.post("/signin", async (req, res) => {
  for (const key in req.body) {
    if (req.body[key] === "") {
      return res.status(404).json("Login Error: Please fill all fields!")
    }
  }
  await User.find({ email: `${req.body.email}` }, async (err, doc) => {
    if (doc.length === 0) { //user never logged in before
      let userModel = new User(req.body)
      await userModel.save()
      return res.json(userModel)
    }
  }).exec()
})

module.exports = route
