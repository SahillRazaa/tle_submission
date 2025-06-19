const Contest = require("../models/contest.model");

exports.getAllContestHistory = async (req, res, next) => {
  const { handle } = req.query;

  try {
    if (!handle) {
      return res.status(400).json({
        message: "Handle is required",
      });
    }

    const contests = await Contest.find(
      {
        handle,
      },
      {
        _id: 0,
        __v: 0,
      }
    ).sort({
      contestStartTime: -1,
    });

    return res.status(200).json({
      message: "Contests fetched successfully",
      total: contests.length,
      contests,
    });
  } catch (error) {
    next(error);
  }
};
