const Student = require("../../models/student.model");
const axios = require("axios");

module.exports = async function syncHandles() {
  const students = await Student.find({});

  const allHandles = students.map((s) => s.handle).join(";");

  try {
    const response = await axios.get(
      `https://codeforces.com/api/user.info?handles=${allHandles}`
    );
    const userMap = {};
    response.data.result.forEach((user) => {
      userMap[user.handle] = user;
    });

    for (const student of students) {
      const userData = userMap[student.handle];
      if (!userData) continue;

      const updated = {
        avatar: userData.avatar || "",
        titlePhoto: userData.titlePhoto || "",
        firstName: userData.firstName || "",
        lastName: userData.lastName || "",
        rating: userData.rating || 0,
        maxRating: userData.maxRating || 0,
        rank: userData.rank || "",
        maxRank: userData.maxRank || "",
        contribution: userData.contribution || 0,
        organization: userData.organization || "",
        friendOfCount: userData.friendOfCount || 0,
        lastOnlineTimeSeconds: userData.lastOnlineTimeSeconds,
        registrationTimeSeconds: userData.registrationTimeSeconds,
        lastSyncedAt: new Date(),
      };

      await Student.updateOne({ handle: student.handle }, { $set: updated });
    }

    console.log("Synced Codeforces handles.");
  } catch (err) {
    console.error("Error syncing handles:", err.message || err);
  }
};
