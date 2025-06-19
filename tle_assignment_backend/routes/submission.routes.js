const {
  getAllSolvedSubmissions,
} = require("../controllers/submission.controller");
const verifyAdmin = require("../middleware/verifyAdmin");

const router = require("express").Router();

router.get("/all", verifyAdmin, getAllSolvedSubmissions);

module.exports = router;
