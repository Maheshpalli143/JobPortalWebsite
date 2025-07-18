const Application = require("../models/Application");

exports.applyToJob = async (req, res) => {
  try {
    const application = await Application.create({
      job: req.body.jobId,
      candidate: req.userId,
      resume: req.body.resume
    });
    res.status(201).json(application);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
