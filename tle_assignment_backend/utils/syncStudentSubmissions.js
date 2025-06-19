const axios = require("axios");
const Submission = require("../models/submission.model");

async function syncStudentSubmissions(handle) {
  try {
    const { data } = await axios.get(
      `https://codeforces.com/api/user.status?handle=${handle}`
    );
    const submissions = data.result;

    let inserted = 0,
      skipped = 0;

    const now = Math.floor(Date.now() / 1000);
    const cutoff = now - 360 * 24 * 60 * 60;

    for (const submission of submissions) {
      if (submission.creationTimeSeconds < cutoff) {
        console.log(
          `Stopping sync, submission older than 360 days for ${handle}`
        );
        break;
      }

      const exists = await Submission.findOne({
        submissionId: submission.id,
      });

      if (exists) {
        skipped++;
        continue;
      }

      const newSubmission = new Submission({
        submissionId: submission.id,
        contestId: submission.contestId,
        creationTimeSeconds: submission.creationTimeSeconds,
        relativeTimeSeconds: submission.relativeTimeSeconds,

        ProblemcontestId: submission.problem?.contestId || null,
        Problemindex: submission.problem?.index || null,
        Problemname: submission.problem?.name || "",
        Problemtype: submission.problem?.type || "",
        Problempoints: submission.problem?.points ?? null,
        Problemrating: submission.problem?.rating ?? null,
        Problemtags: Array.isArray(submission.problem?.tags)
          ? submission.problem.tags
          : [],

        author: {
          contestId: submission.author?.contestId ?? null,
          participantId: submission.author?.participantId ?? null,
          participantType: submission.author?.participantType ?? "",
          ghost: submission.author?.ghost ?? false,
          startTimeSeconds: submission.author?.startTimeSeconds ?? null,
          members: submission.author?.members || [],
        },
        programmingLanguage: submission.programmingLanguage,
        testset: submission.testset,
        passedTestCount: submission.passedTestCount,
        timeConsumedMillis: submission.timeConsumedMillis,
        memoryConsumedBytes: submission.memoryConsumedBytes,
        verdict: submission.verdict,
      });

      await newSubmission.save();
      inserted++;

      console.log(`Submissions sync ${inserted} for ${handle}`);
    }

    console.log(`Submissions sync complete for ${handle}`);
    console.log(`Inserted: ${inserted}, Skipped: ${skipped}`);
  } catch (err) {
    console.error(`Error syncing submissions for ${handle}:`, err.message);
  }
}

module.exports = syncStudentSubmissions;
