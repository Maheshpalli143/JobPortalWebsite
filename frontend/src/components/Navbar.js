import React, { useState } from "react";
import AuthPage from "./AuthPage";
import PostJobForm from "./PostJobForm";
import "./Navbar.css";

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showPostJob, setShowPostJob] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="logo">Jobster</div>
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/">Pages</a>
          <a href="/">Listing</a>
          <a href="/">Employer</a>
          <a href="/">Candidates</a>
        </nav>

        <div className="nav-actions">
          <button
            onClick={() => setShowLogin(true)}
            className="signin"
            style={{
              cursor: "pointer",
              background: "none",
              border: "none",
              padding: 0,
              color: "inherit",
              font: "inherit",
            }}
          >
            Sign in
          </button>

          <button className="post-job" onClick={() => setShowPostJob(true)}>
            Post a Job
          </button>
        </div>
      </header>

      {showLogin && (
        <div className="modal-overlay" onClick={() => setShowLogin(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <AuthPage />
            <button className="close-modal" onClick={() => setShowLogin(false)}>
              X
            </button>
          </div>
        </div>
      )}

      {showPostJob && (
        <div className="modal-overlay" onClick={() => setShowPostJob(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <PostJobForm />
            <button className="close-modal" onClick={() => setShowPostJob(false)}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;







