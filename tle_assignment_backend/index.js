const express = require("express");
require("dotenv").config();
const cors = require("cors");
const db = require("./db");

db();

//Routes
const studentRoutes = require("./routes/student.routes");
const adminRoutes = require("./routes/admin.routes");
const contestRoutes = require("./routes/contest.routes");
const submissionRoutes = require("./routes/submission.routes");
const emailRoutes = require("./routes/email.routes");
const cronConfigRoutes = require("./routes/cronConfig.routes");

const { rescheduleCronTask } = require("./cronJobs/dynamicScheduler");
const CronConfig = require("./models/cronConfig.model");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Your TLE Assignment Backend is Running.....");
});

app.use("/students", studentRoutes);
app.use("/admin", adminRoutes);
app.use("/contest", contestRoutes);
app.use("/submission", submissionRoutes);
app.use("/email", emailRoutes);
app.use("/cron-config", cronConfigRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);

  const taskName = "syncHandles";
  const defaultSchedule = "0 2 * * *";

  try {
    const existing = await CronConfig.findOne({ taskName });
    if (!existing) {
      await CronConfig.create({
        taskName,
        schedule: defaultSchedule,
        enabled: true,
      });
      console.log(`Default cron config created for "${taskName}"`);
    }

    await rescheduleCronTask(taskName);
  } catch (err) {
    console.error("Failed to initialize cron config or task:", err.message);
  }
});
