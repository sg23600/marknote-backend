import mongoose from "mongoose"

const noteObj = {
  id: Number,
  title: String,
  body: String,
  lastEdited: Date,
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
