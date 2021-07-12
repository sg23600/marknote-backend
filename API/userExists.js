import express from "express"
import User from "../models/User"

const route = express.Router()

route.post("/", async (req, res) => {
  let exists = true;
  for (const key in req.body) {
    if (req.body[key] === "") {
      return res.status(404).json("Login Error: Please fill all fields!")
    }
  }
  // let userModel = new User(req.body)
  await User.find({ email: `${req.body.email}` }, (err, doc) => {
    if (doc.length === 0) console.log("doesnt exist!")
    else console.log("exists!")
  }).exec()

  // await userModel.save()
  // return res.json(userModel)
})

module.exports = route
