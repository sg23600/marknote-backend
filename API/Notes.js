import express from "express"
import Notes from "../models/Notes"

const route = express.Router()
// req => {obj, gId}

route.post("/new", async (req, res) => {
  await Notes.find({ googleId: req.body.googleId }, async (err, doc) => {
    if (doc.length === 0) {
      // add new record
      const note = {
        googleId: req.body.googleId,
        notes: [
          {
            id: 1,
            title: req.body.title,
            body: req.body.body,
            lastEdited: Date(),
            private: req.body.private,
          },
        ],
      }
      let notesModel = new Notes(note)
      await notesModel.save()
      return res.json(notesModel)
    } else {
      // update existing record, add new object to array
      return res.json("updating record...")
    }
  }).exec()
})

module.exports = route
