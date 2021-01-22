const express = require("express");

const { validateProject } = require("../middleware/middleware.js");

const router = express.Router();

router.post("/", (req, res) => {});

router.get("/", (req, res) => {});

module.exports = router;
