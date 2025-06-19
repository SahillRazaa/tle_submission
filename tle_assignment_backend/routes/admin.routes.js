const {
    admiLogin
} = require("../controllers/admin.controller");
const router = require("express").Router();

router.post('/login', admiLogin);

module.exports = router;