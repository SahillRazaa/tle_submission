const {
  createStudent,
  getAllStudents,
  deleteStudent,
  updateStudents,
  reminderUpdateStudents,
} = require("../controllers/student.controller");
const verifyAdmin = require("../middleware/verifyAdmin");

const router = require("express").Router();

router.post("/create", verifyAdmin, createStudent);
router.delete("/delete/:handle", verifyAdmin, deleteStudent);
router.get("/all", verifyAdmin, getAllStudents);
router.put("/update/:handle", verifyAdmin, updateStudents);
router.put("/reminderUpdate/:handle", verifyAdmin, reminderUpdateStudents);

module.exports = router;
