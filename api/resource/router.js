const express = require("express");
const Resources = require("./model.js");
const { validateResource } = require("../middleware/middleware.js");

const router = express.Router();

router.post("/", validateResource, async (req, res, next) => {
  try {
    const newResource = await Resources.add(req.body);
    res.status(201).json(newResource);
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const resourceData = await Resources.get();
    res.status(200).json(resourceData);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
