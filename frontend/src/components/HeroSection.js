import React, { useState } from "react";
import "./HeroSection.css";

function HeroSection() {
  const [keyword, setKeyword] = useState("");
  const [jobType, setJobType] = useState("");
  const [company, setCompany] = useState("");

  const handleSearch = async () => {
    const params = new URLSearchParams({
      keyword,
      jobType,
      company
    });

    const res = await fetch(`http://localhost:5000/api/jobs/search?${params}`);
    const data = await res.json();
    console.log("Search results:", data);
    // TODO: Show results in your UI
  };

  return (
    <section className="hero">
      <div className="overlay">
        <h1>It's time to do the best work of your life</h1>
        <p>There is a way to do it better... find it</p>

        <div className="tabs">
          <button className="active">Find A Job</button>
          <button>Find A Candidate</button>
        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Job name"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <select
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
          >
            <option value="">Job Time</option>
            <option>Full Time</option>
            <option>Part Time</option>
          </select>
          <input
            type="text"
            placeholder="Company name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        <div className="trending">
          Trending Keywords:{" "}
          <span>Accounting</span>, <span>Clinical Psychology</span>, <span>IT Contractor</span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

