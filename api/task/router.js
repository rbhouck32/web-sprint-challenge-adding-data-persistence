const express = require("express");
const Tasks = require("./model.js");

const { validateTask } = require("../middleware/middleware.js");

const router = express.Router();

router.post("/", validateTask, async (req, res, next) => {
  try {
    const newTask = await Tasks.add(req.body);
    res.status(201).json(newTask);
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const taskData = await Tasks.get();
    res.status(200).json(taskData);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
