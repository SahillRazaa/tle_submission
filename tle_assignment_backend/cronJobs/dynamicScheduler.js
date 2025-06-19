const cron = require("node-cron");
const CronConfig = require("../models/cronConfig.model");
const runSyncTasks = require("./runSyncTasks");

const cronJobs = {};
const rescheduleCronTask = async (taskName) => {
  const config = await CronConfig.findOne({ taskName });

  if (cronJobs[taskName]) {
    cronJobs[taskName].stop();
    delete cronJobs[taskName];
  }

  if (!config?.enabled) return;

  const newJob = cron.schedule(
    config.schedule,
    async () => {
      console.log(`[${new Date().toLocaleString()}] Running ${taskName}`);
      await runSyncTasks();
    },
    {
      timezone: "Asia/Kolkata",
    }
  );

  cronJobs[taskName] = newJob;
  console.log(`${taskName} scheduled at "${config.schedule}" IST`);
};

module.exports = { rescheduleCronTask };
