const mongoose = require("mongoose");

const contestSchema = new mongoose.Schema({
    contestId: {
        type: Number,
        required: true,
    },
    contestName: {
        type: String,
        required: true,
    },
    handle: {
        type: String,
        required: true,
    },
    rank: {
        type: Number,
    },
    ratingUpdateTimeSeconds: {
        type: Number,
    },
    contestStartTime: {
        type: Number,
        required: true,
    },
    oldRating: {
        type: Number,
    },
    newRating: {
        type: Number,
    },
    unsolvedProblems: {
        type: Number,
    }
}, {
    timestamps: true
});

contestSchema.index({
    handle: 1,
    contestId: 1
}, {
    unique: true
});

module.exports = mongoose.model("Contest", contestSchema);