import React from "react";
import "./PostJobForm.css";

function PostJobForm() {
  return (
    <div className="postjob-container">
      <div className="postjob-box">
        <h2>Post a New Job</h2>
        <form>
          <input type="text" placeholder="Job Title" required />
          <input type="text" placeholder="Company Name" required />
          <input type="text" placeholder="Location" required />
          <select required>
            <option value="">Select Category</option>
            <option>Programming</option>
            <option>Designing</option>
            <option>Data Science</option>
            <option>Networking</option>
            <option>Marketing</option>
            <option>Cybersecurity</option>
          </select>
          <select required>
            <option value="">Employment Type</option>
            <option>Full Time</option>
            <option>Part Time</option>
          </select>
          <textarea placeholder="Job Description" rows="5" required></textarea>
          <button type="submit">Post Job</button>
        </form>
      </div>
    </div>
  );
}

export default PostJobForm;
