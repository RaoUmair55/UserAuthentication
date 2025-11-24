import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  accessTokens: {
    type: [String],
    default: []
  },

  refreshTokens: {
    type: [String],
    default: []
  },

  isVerified: {
    type: Boolean,
    default: false,
  },

  otp: {
    type: String,
  },

}, { timestamps: true });

export default mongoose.model("User", userSchema);
