import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
  givenName: {
    type: String,
    required: true,
  },
  familyName: {
    type: String,
    required: true,
  },
  googleId: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  noteIds: {
    type: [Number],
    default: [],
  },
})

const User = mongoose.model("User", UserSchema)

export default User
