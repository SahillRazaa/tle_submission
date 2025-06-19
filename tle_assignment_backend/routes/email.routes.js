const verifyAdmin = require("../middleware/verifyAdmin");
const sendBrevoEmail = require("../utils/emailSender/email");
const router = require("express").Router();
const ReminderLog = require("../models/reminderLog.model");
const Student = require("../models/student.model");

const today = new Date().toLocaleDateString();

router.post("/reminder", verifyAdmin, async (req, res) => {
  const { userData, subject } = req.body;

  if (!userData || !subject) {
    return res.status(400).json({ type: "Error", message: "Missing data" });
  }

  const emailsToSend = [];

  for (const user of userData) {
    try {
      await ReminderLog.updateOne(
        { email: user.email },
        {
          $setOnInsert: { email: user.email, lastSentDate: today },
        },
        { upsert: true }
      );

      const existing = await ReminderLog.findOne({ email: user.email });
      if (existing.lastSentDate === today) {
        emailsToSend.push(user);
      }
    } catch (err) {
      if (err.code === 11000) {
        continue;
      } else {
        console.error("Reminder DB error:", err);
      }
    }
  }

  if (emailsToSend.length === 0) {
    return res
      .status(200)
      .json({ type: "Success", message: "No reminders to send today." });
  }

  try {
    const result = await sendBrevoEmail({
      userData: emailsToSend,
      subject,
    });

    const updateOps = emailsToSend.map((user) =>
      Student.updateOne(
        { email: user.email },
        { $inc: { emailReminder: 1 } }
      ).catch((err) => {
        console.error(`Failed to update emailReminder for ${user.email}`, err);
      })
    );

    await Promise.all(updateOps);

    return res.status(200).json({
      type: "Success",
      message: result.message,
      results: result.results,
    });
  } catch (err) {
    return res.status(500).json({
      type: "Error",
      message: "Email send failed.",
      error: err.message,
    });
  }
});

module.exports = router;
