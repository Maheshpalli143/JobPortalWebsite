const express = require("express");
const { applyToJob } = require("../controllers/applicationController");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/", auth, applyToJob);

module.exports = router;
