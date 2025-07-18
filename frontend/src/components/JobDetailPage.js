import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./JobDetailPage.css";

const JobDetailPage = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/jobs/${jobId}`);
        setJob(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchJob();
  }, [jobId]);

  if (!job) return <div>Loading...</div>;

  return (
    <div className="job-detail-container">
      <div className="job-header">
        <img src={job.logoUrl} alt={job.company} className="company-logo" />
        <div>
          <h2>{job.title}</h2>
          <p><strong>Company:</strong> {job.company}</p>
          <p><strong>Location:</strong> {job.location}</p>
        </div>
      </div>
      <div className="job-description">
        <h3>Description</h3>
        <p>{job.description}</p>
      </div>
    </div>
  );
};

export default JobDetailPage;


