// src/components/RoadmapDashboard.jsx
import React, { useState } from 'react';
import OverviewTab from '../tabs/OverviewTab';
import AptitudeTab from '../tabs/AptitudeTab';
import CsFundamentalsTab from '../tabs/CsFundamentalsTab';
import DsaTab from '../tabs/DsaTab';
import ProjectsTab from '../tabs/ProjectsTab';
import ResourcesTab from '../tabs/ResourcesTab';

export default function RoadmapDashboard({ onBackToHome }) {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'aptitude', label: 'Aptitude' },
    { id: 'cs', label: 'CS Fundamentals' },
    { id: 'dsa', label: 'DSA' },
    { id: 'projects', label: 'Projects' },
    { id: 'resources', label: 'Resources' },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F3] text-[#172033] flex flex-col justify-between">
      <div>
        {/* Header */}
        <header className="bg-white border-b border-[#E7DED2] sticky top-0 z-20 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3 cursor-pointer" onClick={onBackToHome}>
              <img 
                src="/logo.png" 
                alt="Creomind Innovations" 
                className="h-10 w-auto object-contain mix-blend-multiply" 
              />
            </div>

            {/* Header Action Buttons */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href="https://www.linkedin.com/in/jaganmohanreddybondala/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold px-3.5 py-2 rounded-full bg-[#0A66C2] hover:bg-[#084e96] text-white transition-colors shadow-xs"
              >
                {/* Clean Inline LinkedIn SVG Icon */}
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
                <span>Connect on LinkedIn</span>
              </a>

              <button
                onClick={onBackToHome}
                className="text-xs font-semibold px-4 py-2 rounded-full border border-[#E7DED2] text-[#26313D] hover:bg-[#F7F2EA] transition-colors cursor-pointer"
              >
                Home
              </button>
            </div>
          </div>

          {/* Navigation Bar */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 border-t border-[#F1E7D8]">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 w-full">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full py-2.5 px-2 text-xs md:text-sm font-semibold rounded-xl text-center transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#B87333] text-white shadow-md shadow-[#B87333]/20'
                        : 'text-[#4B5563] bg-white border border-[#E7DED2] hover:text-[#172033] hover:bg-[#F7F2EA]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </header>

        {/* Tab Content Display */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          {activeTab === 'overview' && <OverviewTab setActiveTab={setActiveTab} />}
          {activeTab === 'aptitude' && <AptitudeTab />}
          {activeTab === 'cs' && <CsFundamentalsTab />}
          {activeTab === 'dsa' && <DsaTab />}
          {activeTab === 'projects' && <ProjectsTab />}
          {activeTab === 'resources' && <ResourcesTab />}
        </main>
      </div>
    </div>
  );
}