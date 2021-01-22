const express = require("express");
const Projects = require("./model.js");

const { validateProject } = require("../middleware/middleware.js");

const router = express.Router();

router.post("/", validateProject, async (req, res, next) => {
  try {
    const newProject = await Projects.add(req.body);
    res.status(201).json(newProject);
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const projectData = await Projects.get();
    // const converted = projectData.map((data) => ({
    //   ...data,
    //   project_completed: !data.project_completed,
    // }));

    // converted.project_completed =
    //   converted.project_completed == 0 ? false : true;
    res.status(200).json(projectData);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
