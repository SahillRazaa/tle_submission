const Submission = require("../models/submission.model");

exports.getAllSolvedSubmissions = async (req, res, next) => {
  const { handle, days } = req.query;

  try {
    if (!handle) {
      return res.status(400).json({
        message: "Handle is required",
      });
    }

    const matchQuery = {
      verdict: "OK",
      "author.members.handle": handle,
      Problemrating: { $ne: null },
    };

    if (days && !isNaN(days)) {
      const nowInSeconds = Math.floor(Date.now() / 1000);
      const cutoff = nowInSeconds - Number(days) * 24 * 60 * 60;

      matchQuery.creationTimeSeconds = { $gte: cutoff };
    }

    const solvedData = await Submission.aggregate([
      {
        $match: matchQuery,
      },
      {
        $group: {
          _id: null,
          totalSolved: { $sum: 1 },
          ratings: { $push: "$Problemrating" },
          creationTimes: { $push: "$creationTimeSeconds" },
        },
      },
      {
        $project: {
          _id: 0,
          totalSolved: 1,
          ratings: 1,
          creationTimes: 1,
        },
      },
    ]);

    return res.status(200).json({
      message: "Solved submissions fetched successfully",
      data: solvedData[0] || { totalSolved: 0, ratings: [], creationTimes: [] },
    });
  } catch (error) {
    next(error);
  }
};
