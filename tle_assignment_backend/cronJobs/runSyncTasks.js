const syncHandles = require("./tasks/syncHandles");
const syncAllStudentsContests = require("./tasks/syncContest");
const syncAllStudentSubmissions = require("./tasks/syncSubmission");

module.exports = async function runSyncTasks() {
  try {
    await syncHandles();
    await syncAllStudentsContests();
    await syncAllStudentSubmissions();
    console.log("All tasks completed successfully.");
  } catch (err) {
    console.error("Cron task error:", err.message || err);
  }
};
