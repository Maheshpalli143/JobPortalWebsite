import React from "react";
import "./ApplyJobForm.css";

function ApplyJobForm() {
  return (
    <div className="applyjob-container">
      <div className="applyjob-box">
        <h2>Apply for Job</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Phone Number" required />
          <textarea placeholder="Cover Letter" rows="5" required></textarea>
          <input type="file" accept=".pdf,.doc,.docx" />
          <button type="submit">Submit Application</button>
        </form>
      </div>
    </div>
  );
}

export default ApplyJobForm;
