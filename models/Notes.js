import mongoose from "mongoose"

const noteObj = {
  id: Number,
  title: String,
  body: String,
  lastEdited: {
    type: Date,
    default: new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
    }),
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
