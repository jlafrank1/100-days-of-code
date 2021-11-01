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
router.get("/:id", async (req, res) => {
  try {
    const oneProject = await Projects.findById(req.params.id);
    res.status(200).json(oneProject);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// -- create --
router.post("/", async (req, res) => {
  try {
    const newProject = await Projects.create(req.body);
    res.status(200).json(newProject);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// -- destroy --
router.delete("/:id", async (req, res) => {
  try {
    const deletedProject = await Projects.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedProject);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// -- update --

module.exports = router;
