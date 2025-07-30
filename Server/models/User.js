// Server/models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  insname: {
    type: String,
    required: true,
  },
  tagline: {
    type: String,
    default: "Excellence in Education",
  },
  insaddress: {
    type: String,
    default: "Your Institute Address Here",
  },

  role: {
    type: String,
    enum: ["admin", "student"],
    default: "student",
    required: true,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  // googleId: { type: String, default: null },
});

module.exports = mongoose.model("User", userSchema);
