import mongoose from "mongoose"

let current = new Date()
const timeStamp = new Date(
  Date.UTC(
    current.getFullYear(),
    current.getMonth(),
    current.getDate(),
    current.getHours(),
    current.getMinutes(),
    current.getSeconds(),
    current.getMilliseconds()
  )
)

const noteObj = {
  id: Number,
  title: String,
  body: String,
  lastEdited: {
    type: Date,
    default: timeStamp,
  },
  private: Boolean,
}

const NotesSchema = new mongoose.Schema({
  googleId: {
    type: Number,
    required: true,
  },

  notes: {
    type: [noteObj],
    default: [],
  },
})

const Notes = mongoose.model("Notes", NotesSchema)

export default Notes
