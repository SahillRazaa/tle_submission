const axios = require("axios");
const Student = require("../models/student.model");
const Contest = require("../models/contest.model");
const syncStudentContests = require("../utils/syncStudentContest");
const syncStudentSubmissions = require("../utils/syncStudentSubmissions");

exports.createStudent = async (req, res, next) => {
  const { fullName, phoneNumber, email, handle } = req.body;

  try {
    const existing = await Student.findOne({
      handle,
    });

    if (existing) {
      return res.status(409).json({
        error: "Student with this handle already exists",
      });
    }

    const response = await axios.get(
      `https://codeforces.com/api/user.info?handles=${handle}&checkHistoricHandles=false`
    );

    const data = response.data.result[0];

    const newStudent = new Student({
      fullName,
      phoneNumber,
      email,
      firstName: data.firstName || "",
      lastName: data.lastName || "",
      handle,
      avatar: data.avatar,
      titlePhoto: data.titlePhoto,
      rating: data.rating,
      maxRating: data.maxRating,
      rank: data.rank,
      maxRank: data.maxRank,
      contribution: data.contribution,
      organization: data.organization,
      friendOfCount: data.friendOfCount,
      lastOnlineTimeSeconds: data.lastOnlineTimeSeconds,
      registrationTimeSeconds: data.registrationTimeSeconds,
    });

    const savedStudent = await newStudent.save();
    res.status(201).json(savedStudent);

    await syncStudentContests(handle).catch((err) => {
      console.error("Background contest sync failed:", err);
    });

    await syncStudentSubmissions(handle).catch((err) => {
      console.error("Background contest sync failed:", err);
    });
  } catch (error) {
    console.error("Error fetching or saving student:", error);
    next(error);
  }
};

exports.deleteStudent = async (req, res) => {
  const { handle } = req.params;

  try {
    await Contest.deleteMany({
      handle,
    });

    const deleteResult = await Student.deleteOne({
      handle,
    });

    if (deleteResult.deletedCount === 0) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    return res.status(200).json({
      message: "Student deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      error: "Server error",
    });
  }
};

exports.getAllStudents = async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 20;
  const skip = (page - 1) * limit;

  try {
    const [students, total] = await Promise.all([
      Student.find().skip(skip).limit(limit),
      Student.countDocuments(),
    ]);

    res.status(200).json({
      students,
      total,
      page,
      limit,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateStudents = async (req, res, next) => {
  const cfHandle = req.params.handle;
  const { fullName, email, phoneNumber, handle } = req.body;

  try {
    let updateFields = {
      fullName,
      email,
      phoneNumber,
      handle,
    };

    if (handle !== cfHandle) {
      const response = await axios.get(
        `https://codeforces.com/api/user.info?handles=${handle}&checkHistoricHandles=false`
      );
      const data = response.data.result[0];

      updateFields = {
        ...updateFields,
        firstName: data.firstName || "",
        lastName: data.lastName || "",
        avatar: data.avatar,
        titlePhoto: data.titlePhoto,
        rating: data.rating,
        maxRating: data.maxRating,
        rank: data.rank,
        maxRank: data.maxRank,
        contribution: data.contribution,
        organization: data.organization,
        friendOfCount: data.friendOfCount,
        lastOnlineTimeSeconds: data.lastOnlineTimeSeconds,
        registrationTimeSeconds: data.registrationTimeSeconds,
      };

      syncStudentContests(handle).catch((err) => {
        console.error("Background submission sync failed:", err);
      });
      syncStudentSubmissions(handle).catch((err) => {
        console.error("Background submission sync failed:", err);
      });
    }

    const updatedStudent = await Student.findOneAndUpdate(
      {
        handle: cfHandle,
      },
      updateFields,
      {
        new: true,
      }
    );

    if (!updatedStudent) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    return res.status(200).json({
      message: "Student updated successfully",
      student: updatedStudent,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Server error",
    });
  }
};

exports.reminderUpdateStudents = async (req, res, next) => {
  const cfHandle = req.params.handle;
  const { enabled } = req.body;

  console.log(enabled);

  try {
    const updatedStudent = await Student.findOneAndUpdate(
      {
        handle: cfHandle,
      },
      {
        enabled: enabled,
      },
      {
        new: true,
      }
    );

    if (!updatedStudent) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    return res.status(200).json({
      message: "Student updated successfully",
      student: updatedStudent,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Server error",
    });
  }
};
