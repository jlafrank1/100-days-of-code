const express = require("express");
const router = express.Router();
const Projects = require("../models/project");

// -- index --
router.get("/", async (req, res) => {
  try {
    const allProjects = await Projects.find();
    res.status(200).json(allProjects);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// -- show --

// -- create --

// -- destroy --

// -- update --

module.exports = router;
