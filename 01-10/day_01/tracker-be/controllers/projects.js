const express = require("express");
const router = express.Router();
const Project = require("../models/projects");

// -- index --
router.get("/", (req, res) => res.send("index page"));

// -- show --

// -- create --

// -- destroy --

// -- update --

module.exports = router;
