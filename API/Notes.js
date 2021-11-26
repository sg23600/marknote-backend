import express from "express"
import Notes from "../models/Notes"

const route = express.Router()
// req => {obj, gId}

// route.get("/", async (req, res) => {
//   await Notes.find({}, (err, doc) => {
//     return res.json(doc)
//   })
// })

route.post("/", async (req, res) => {
  await Notes.findOne({ googleId: req.body.googleId }, (err, doc) => {
    if (doc) {
      console.log(doc.notes)
      return res.json(doc.notes)
    }
  })
})

route.post("/new", async (req, res) => {
  await Notes.findOne({ googleId: req.body.googleId }, async (err, doc) => {
    if (doc.notes.length === 0) {
      // first note
      doc.notes.push({
        id: 1,
        title: req.body.title,
        body: req.body.body,
        // private: req.body.private,
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
        // private: req.body.private,
      })
      doc.save()
      return res.json(doc)
    }
  }).exec()
})

route.post("/edit", async (req, res) => {
  console.log("Edit \n", req.body)
  await Notes.findOne({ googleId: req.body.googleId }, (err, doc) => {
    if (doc) {
      // let dbNotes = doc.notes

      for (let i = 0; i < doc.notes.length; i++) {
        if (doc.notes[i].id === req.body.id) {
          console.log("note found!")
          doc.notes[i].title = req.body.title
          doc.notes[i].body = req.body.body
        }
      }
      doc.markModified("notes")
      doc.save()

      return res.json(doc)
    } else res.json("Not found")
  }).exec()
})

module.exports = route
