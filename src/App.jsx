import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import RoadmapDashboard from './components/RoadmapDashboard';

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {currentPage === 'landing' ? (
        <LandingPage onStart={() => setCurrentPage('roadmap')} />
      ) : (
        <RoadmapDashboard onBackToHome={() => setCurrentPage('landing')} />
      )}
    </div>
  );
}