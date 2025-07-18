
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Categories from './components/CategoryBar';
import JobBoard from './data/JobBoard';
import Footer from './components/Footer';
import JobDetailPage from './components/JobDetailPage'; // <-- ADD THIS LINE

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Categories />
      <JobBoard />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs/:id" element={<JobDetailPage />} /> {/* <-- ADD THIS LINE */}
      </Routes>
    </Router>
  );
}

export default App;




















