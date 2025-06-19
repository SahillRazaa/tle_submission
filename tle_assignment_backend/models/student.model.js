const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    handle: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    avatar: {
      type: String,
    },
    titlePhoto: {
      type: String,
    },
    rating: {
      type: Number,
    },
    maxRating: {
      type: Number,
    },
    rank: {
      type: String,
    },
    maxRank: {
      type: String,
    },
    contribution: {
      type: Number,
    },
    organization: {
      type: String,
    },
    friendOfCount: {
      type: Number,
    },
    lastOnlineTimeSeconds: {
      type: Number,
      required: true,
    },
    lastSyncedAt: {
      type: Date,
      default: null,
    },
    emailReminder: {
      type: Number,
      default: 0,
    },
    enabled: {
      type: Boolean,
      default: true,
    },
    registrationTimeSeconds: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Student", studentSchema);
