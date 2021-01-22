const Projects = require("../project/model.js");
const Resources = require("../resource/model.js");
const Tasks = require("../task/model.js");

async function validateProjectId(req, res, next) {
  try {
    const project = await Projects.getById(req.params.id);
    if (project) {
      req.project = project;
      next();
    } else {
      res
        .status(404)
        .json({ message: `project with id ${req.params.id} not found` });
    }
  } catch (error) {
    res.status(500).json({ message: "Bad Request" });
  }
}

async function validateResourceId(req, res, next) {
  try {
    const resource = await Resources.getById(req.params.id);
    if (resource) {
      req.resource = resource;
      next();
    } else {
      res
        .status(404)
        .json({ message: `resource with id ${req.params.id} not found` });
    }
  } catch (error) {
    res.status(500).json({ message: "Bad Request" });
  }
}

async function validateTaskId(req, res, next) {
  try {
    const task = await Tasks.getById(req.params.id);
    if (task) {
      req.task = task;
      next();
    } else {
      res
        .status(404)
        .json({ message: `task with id ${req.params.id} not found` });
    }
  } catch (error) {
    res.status(500).json({ message: "Bad Request" });
  }
}

function validateProject(req, res, next) {
  const body = req.body;
  const project_name = req.body.project_name;
  if (Object.keys(body).length !== 0) {
    if (project_name) {
      next();
    } else {
      res.status(400).json({ message: `missing required name field` });
    }
  } else {
    res.status(400).json({ message: "missing Project data" });
  }
}

function validateResource(req, res, next) {
  const body = req.body;
  const resource_name = req.body.resource_name;
  if (Object.keys(body).length !== 0) {
    if (resource_name) {
      next();
    } else {
      res.status(400).json({ message: `missing required name field` });
    }
  } else {
    res.status(400).json({ message: "missing Resource data" });
  }
}

function validateTask(req, res, next) {
  const body = req.body;
  const task_description = req.body.task_description;
  if (Object.keys(body).length !== 0) {
    if (task_description) {
      next();
    } else {
      res.status(400).json({ message: `missing required description field` });
    }
  } else {
    res.status(400).json({ message: "missing Task data" });
  }
}

module.exports = {
  validateProject,
  validateProjectId,
  validateResource,
  validateResourceId,
  validateTask,
  validateTaskId,
};
