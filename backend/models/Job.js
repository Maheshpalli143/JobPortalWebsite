const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: String,
    company: String,
    location: String,
    category: String,
    level: String,
    description: String,
    type: String, // e.g., "Full Time", "Part Time"
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", jobSchema);
