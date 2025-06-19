const axios = require("axios");
const Contest = require("../models/contest.model");
const Student = require("../models/student.model");

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function syncStudentContests(handle) {
  try {
    const { data } = await axios.get(
      `https://codeforces.com/api/user.rating?handle=${handle}`
    );
    const contestHistory = data.result;

    const oneYearAgo = Math.floor(Date.now() / 1000) - 360 * 24 * 60 * 60;

    for (const contest of contestHistory) {
      if (contest.ratingUpdateTimeSeconds < oneYearAgo) continue;

      try {
        const standingsRes = await axios.get(
          `https://codeforces.com/api/contest.standings?contestId=${contest.contestId}&handles=${handle}&showUnofficial=false`
        );

        const problems = standingsRes.data.result.problems.length;
        const contestStartTime =
          standingsRes.data.result.contest.startTimeSeconds;

        const solved = standingsRes.data.result.rows[0].problemResults.filter(
          (pr) => pr.points > 0
        ).length;

        const unsolved = problems - solved;

        await Contest.updateOne(
          {
            handle,
            contestId: contest.contestId,
          },
          {
            $set: {
              contestId: contest.contestId,
              contestName: contest.contestName,
              handle,
              contestStartTime,
              rank: contest.rank,
              ratingUpdateTimeSeconds: contest.ratingUpdateTimeSeconds,
              oldRating: contest.oldRating,
              newRating: contest.newRating,
              unsolvedProblems: unsolved,
            },
          },
          {
            upsert: true,
          }
        );

        console.log(`Synced contest ${contest.contestId} for ${handle}`);
        await delay(3000);
      } catch (err) {
        console.error(
          `Failed contest ${contest.contestId} for ${handle}:`,
          err.message
        );
      }
    }

    await Student.updateOne(
      {
        handle,
      },
      {
        $set: {
          lastSyncedAt: new Date(),
        },
      }
    );
  } catch (err) {
    console.error(`Failed to sync contests for ${handle}:`, err.message);
  }
}

module.exports = syncStudentContests;
