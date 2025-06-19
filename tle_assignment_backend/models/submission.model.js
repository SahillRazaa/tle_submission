const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema(
  {
    submissionId: {
      type: Number,
      required: true,
      unique: true,
    },
    contestId: {
      type: Number,
      required: true,
    },
    creationTimeSeconds: {
      type: Number,
      required: true,
      index: true,
    },
    relativeTimeSeconds: Number,

    ProblemcontestId: Number,

    Problemindex: String,

    Problemname: String,

    Problemtype: String,

    Problempoints: Number,

    Problemrating: Number,

    Problemtags: [String],

    author: {
      contestId: Number,
      participantId: Number,
      participantType: String,
      ghost: Boolean,
      startTimeSeconds: Number,
      members: [
        {
          handle: String,
        },
      ],
    },

    programmingLanguage: String,
    verdict: String,
    testset: String,
    passedTestCount: Number,
    timeConsumedMillis: Number,
    memoryConsumedBytes: Number,
  },
  {
    timestamps: true,
  }
);

submissionSchema.index({
  "author.members.handle": 1,
  creationTimeSeconds: -1,
});
submissionSchema.index({
  verdict: 1,
});
submissionSchema.index({ Problemrating: 1 });

module.exports = mongoose.model("Submission", submissionSchema);
