const express = require("express");
const router = express.Router();
const CronConfig = require("../models/cronConfig.model");
const { rescheduleCronTask } = require("../cronJobs/dynamicScheduler");
const verifyAdmin = require("../middleware/verifyAdmin");

router.get("/all", verifyAdmin, async (req, res) => {
  const response = await CronConfig.find({});
  res.status(201).json(response);
});

router.get("/:taskName", verifyAdmin, async (req, res) => {
  const config = await CronConfig.findOne({ taskName: req.params.taskName });
  res.status(201).json(config);
});

router.put("/:taskName", verifyAdmin, async (req, res) => {
  const { schedule, enabled } = req.body;
  const taskName = req.params.taskName;

  const updated = await CronConfig.findOneAndUpdate(
    { taskName },
    { $set: { schedule, enabled } },
    { new: true, upsert: true }
  );

  await rescheduleCronTask(taskName);

  res.json({ message: "Cron schedule updated", data: updated });
});

module.exports = router;
