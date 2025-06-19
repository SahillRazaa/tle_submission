const router = require('express').Router();
const jwt = require("jsonwebtoken");

exports.admiLogin = (req, res) => {
    const {
        user,
        secKey
    } = req.body;

    if (!user || !secKey) {
        return res.status(401).json({
            message: "Please enter everything!"
        });
    }

    if (user !== process.env.USER_SEC) {
        return res.status(401).json({
            message: "UnAuthorised User!!"
        });
    }

    if (secKey !== process.env.ADMIN_SEC) {
        return res.status(401).json({
            message: "Invalid key"
        });
    }

    const token = jwt.sign({
        role: "admin"
    }, process.env.JWT_SECRET, {
        expiresIn: "1d"
    });

    res.json({
        isAdmin: true,
        token: token
    });
};