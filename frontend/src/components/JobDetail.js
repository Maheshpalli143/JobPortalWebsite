import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./JobDetail.css";
import axios from "axios";

function JobDetail() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [applied, setApplied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: "",
    coverLetter: "",
  });

  useEffect(() => {
    // Fetch job details from backend
    axios.get(`http://localhost:5000/api/jobs/${id}`)
      .then((res) => setJob(res.data))
      .catch((err) => console.log("Error fetching job:", err));
  }, [id]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/api/applications`, {
        jobId: id,
        ...formData,
      });
      setApplied(true);
      alert("Application submitted successfully!");
    } catch (err) {
      console.log("Application error:", err);
    }
  };

  if (!job) {
    return <h2 style={{ textAlign: "center", marginTop: "100px" }}>Loading job...</h2>;
  }

  return (
    <>
      <Navbar />
      <div className="job-detail-container">
        <div className="job-header">
          <h1>{job.title}</h1>
          <p className="company">{job.companyName} • {job.location}</p>
          <div className="meta">
            <span>{job.level}</span>
            <span>{job.salary}</span>
            <span>{job.postedDate}</span>
          </div>
        </div>

        <div className="job-body">
          <h3>Description</h3>
          <p>{job.description}</p>

          <h3>Responsibilities</h3>
          <ul>
            {job.responsibilities?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          {!applied ? (
            <>
              <h3>Apply for this job</h3>
              <form className="application-form" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your name" required onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
                <input type="text" name="resume" placeholder="Resume URL" required onChange={handleChange} />
                <textarea name="coverLetter" placeholder="Cover Letter (optional)" onChange={handleChange}></textarea>
                <button type="submit">Submit Application</button>
              </form>
            </>
          ) : (
            <div className="applied-message">✅ You have already applied for this job</div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default JobDetail;



