const { getAllContestHistory } = require("../controllers/contest.controller");
const verifyAdmin = require("../middleware/verifyAdmin");

const router = require("express").Router();

router.get("/all", verifyAdmin, getAllContestHistory);

module.exports = router;
