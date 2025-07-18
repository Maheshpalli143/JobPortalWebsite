import { Link } from 'react-router-dom';
import React, { useState } from "react";
import jobsData from "../data/jobs";
import "./JobBoard.css";

const categories = [
  "Programming",
  "Data Science",
  "Designing",
  "Networking",
  "Management",
  "Marketing",
  "Cybersecurity",
];

const locations = [
  "Bangalore",
  "Washington",
  "Hyderabad",
  "Chennai",
  "Mumbai",
];

function JobBoardGrid() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const jobsPerPage = 4;

  // Toggle category checkbox
  const toggleCategory = (category) => {
    setCurrentPage(1);
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  // Toggle location checkbox
  const toggleLocation = (location) => {
    setCurrentPage(1);
    setSelectedLocations((prev) =>
      prev.includes(location)
        ? prev.filter((l) => l !== location)
        : [...prev, location]
    );
  };

  // Filter jobs
  const filteredJobs = jobsData.filter((job) => {
    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.includes(job.category);
    const matchesLocation =
      selectedLocations.length === 0 || selectedLocations.includes(job.location);
    return matchesCategory && matchesLocation;
  });

  // Pagination
  const indexOfLast = currentPage * jobsPerPage;
  const indexOfFirst = indexOfLast - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  return (
    <section className="jobboard-container">
      <aside className="sidebar">
        <h3>Search by Categories</h3>
        {categories.map((cat) => (
          <label key={cat}>
            <input
              type="checkbox"
              checked={selectedCategories.includes(cat)}
              onChange={() => toggleCategory(cat)}
            />
            {cat}
          </label>
        ))}
        <h3>Search by Location</h3>
        {locations.map((loc) => (
          <label key={loc}>
            <input
              type="checkbox"
              checked={selectedLocations.includes(loc)}
              onChange={() => toggleLocation(loc)}
            />
            {loc}
          </label>
        ))}
      </aside>

      <div className="jobs-content">
        <h2>Latest Jobs</h2>
        <p>Get your desired job from top companies</p>
        <div className="jobs-grid">
          {currentJobs.length === 0 ? (
            <p>No jobs found.</p>
          ) : (
            currentJobs.map((job) => (
              <div key={job.id} className="job-card">
                <div className="job-header">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
                    alt="Company logo"
                  />
                  <h3>{job.title}</h3>
                </div>
                <div className="job-tags">
                  <span>{job.location}</span>
                  <span>{job.level}</span>
                </div>
                <p>{job.description}</p>
                <div className="job-actions">
                  <Link to={`/jobs/${job.id}`} className="apply">Apply now</Link>
                  <button className="learn">Learn more</button>
                </div>
              </div>
            ))
          )}
        </div>

        {totalPages > 1 && (
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={currentPage === index + 1 ? "active" : ""}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default JobBoardGrid;
