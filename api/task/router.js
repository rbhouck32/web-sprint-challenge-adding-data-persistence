const express = require("express");

const { validateTask } = require("../middleware/middleware.js");

const router = express.Router();

router.post("/", (req, res) => {});

router.get("/", (req, res) => {});

module.exports = router;
