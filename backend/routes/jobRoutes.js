const express = require("express");
const { createJob, getAllJobs } = require("../controllers/jobController");
const auth = require("../middleware/auth");
const Job = require("../models/Job"); // Make sure you have this

const router = express.Router();

// Get all jobs
router.get("/", getAllJobs);

// Search jobs
router.get("/search", async (req, res) => {
  const { keyword, jobType, company } = req.query;

  const filter = {};

  if (keyword) {
    filter.title = { $regex: keyword, $options: "i" };
  }
  if (jobType) {
    filter.type = jobType;
  }
  if (company) {
    filter.company = { $regex: company, $options: "i" };
  }

  try {
    const jobs = await Job.find(filter);
    res.json(jobs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// Create a new job
router.post("/", auth, createJob);

module.exports = router;
