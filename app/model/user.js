import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },

  email: {
    type: String,
    unique: true,
    required: true,
  },

  password: {
    type: String,
    maxlength: 255,
  },
  gender: {
    type: String,
    maxlength: 255,
  },
  height: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  goal: {
    type: String,
    maxlength: 255,
  },
});

const User = mongoose.model("User", userSchema);
export default User;
