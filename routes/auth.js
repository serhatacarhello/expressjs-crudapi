const express = require("express");
const { register, login } = require("../controllers/auth.js");

const router = express.Router();

//post update get update
router.post("/register", register);
router.post("/login", login);

//export
module.exports = router;
