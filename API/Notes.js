import express from "express"
import Notes from "../models/Notes"

const route = express.Router()
// req => {obj, gId}

route.put("/new", async (req, res) => {
  await Notes.findOne({ googleId: req.body.googleId }, async (err, doc) => {
    if (doc.notes.length === 0) {
      // first note
      doc.notes.push({
        id: 1,
        title: req.body.title,
        body: req.body.body,
        private: req.body.private,
      })
      doc.save()
      return res.json(doc)
    } else {
      let newId = Math.max.apply(
        Math,
        doc.notes.map((o) => {
          return o.id
        })
      ) // largest ID number

      doc.notes.push({
        id: newId + 1,
        title: req.body.title,
        body: req.body.body,
        private: req.body.private,
      })
      doc.save()
      return res.json(doc)
    }
  }).exec()
})

module.exports = route
