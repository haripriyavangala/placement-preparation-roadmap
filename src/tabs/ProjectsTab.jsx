// ProjectsTab.jsx
import React from 'react';

export default function ProjectsTab() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-[#172033] flex items-center gap-2">
        🏗️ Projects & Resume Building
      </h2>

      <div className="bg-[#FAF8F3] border-l-4 border-[#B87333] p-4 rounded-xl text-[#26313D] text-sm border border-[#E7DED2]">
        <strong className="text-[#B87333]">⚠️ Quality Over Quantity:</strong> Don't add 10 random projects to your resume. Build 2-3 solid projects that you understand completely. Interviewers will ask about every line of code.
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Project 1 */}
        <div className="bg-white p-5 rounded-2xl border border-[#E7DED2] shadow-xs space-y-2">
          <span className="bg-[#F7F2EA] text-[#B87333] text-xs font-bold px-2.5 py-1 rounded-md inline-block border border-[#E7DED2]">
            Project 1
          </span>
          <h3 className="font-bold text-[#172033] text-sm">Full Stack Web Application</h3>
          <p className="text-xs text-[#4B5563]"><strong>Tech Stack:</strong> React.js + Node.js + MongoDB (MERN)</p>
          <p className="text-xs text-[#4B5563]"><strong>Features:</strong> Auth, CRUD, Responsive Design</p>
          <p className="text-xs text-[#4B5563]"><strong>Examples:</strong> Job Portal, E-commerce, Blog Platform</p>
        </div>

        {/* Project 2 */}
        <div className="bg-white p-5 rounded-2xl border border-[#E7DED2] shadow-xs space-y-2">
          <span className="bg-[#F7F2EA] text-[#B87333] text-xs font-bold px-2.5 py-1 rounded-md inline-block border border-[#E7DED2]">
            Project 2
          </span>
          <h3 className="font-bold text-[#172033] text-sm">Real-Time Application</h3>
          <p className="text-xs text-[#4B5563]"><strong>Tech Stack:</strong> Socket.io + Express + React</p>
          <p className="text-xs text-[#4B5563]"><strong>Features:</strong> Real-time communication, Live updates</p>
          <p className="text-xs text-[#4B5563]"><strong>Examples:</strong> Chat App, Live Dashboard</p>
        </div>

        {/* Project 3 */}
        <div className="bg-white p-5 rounded-2xl border border-[#E7DED2] shadow-xs space-y-2">
          <span className="bg-[#F7F2EA] text-[#B87333] text-xs font-bold px-2.5 py-1 rounded-md inline-block border border-[#E7DED2]">
            Project 3
          </span>
          <h3 className="font-bold text-[#172033] text-sm">Algorithm / Tool Project</h3>
          <p className="text-xs text-[#4B5563]"><strong>Focus:</strong> Problem solving & core algorithms</p>
          <p className="text-xs text-[#4B5563]"><strong>Examples:</strong> Path Finding Visualizer, Sorting Visualizer, Code Editor</p>
        </div>
      </div>

      {/* Resume Checklist */}
      <div className="bg-white border border-[#E7DED2] p-5 rounded-2xl text-xs md:text-sm text-[#26313D] space-y-2 shadow-xs">
        <h3 className="font-bold text-[#172033] text-base">📄 Resume Must-Haves</h3>
        <p>✅ <strong>1 Page Only:</strong> Recruiters spend 6 seconds per resume.</p>
        <p>✅ <strong>Clean Design:</strong> No fancy colors or graphics.</p>
        <p>✅ <strong>Skills Section:</strong> Only add what you actually know well.</p>
        <p>✅ <strong>Projects:</strong> 2-3 projects with tech stack & live links.</p>
        <p>✅ <strong>GitHub Link:</strong> Must have active repositories.</p>
      </div>
    </div>
  );
}