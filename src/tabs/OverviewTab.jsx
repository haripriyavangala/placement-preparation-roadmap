import React from 'react';
import { Calendar, Target, CheckCircle2, ArrowRight } from 'lucide-react';

export default function OverviewTab({ setActiveTab }) {
  const roadmapPhases = [
    {
      phase: 'Phase 1',
      title: 'Aptitude & Logical Reasoning',
      duration: 'Weeks 1 - 4',
      tabId: 'aptitude',
      desc: 'Master Quantitative Aptitude, Logical Reasoning, and Verbal Ability for initial online screening tests.',
    },
    {
      phase: 'Phase 2',
      title: 'CS Fundamentals',
      duration: 'Weeks 5 - 12',
      tabId: 'cs',
      desc: 'Build strong basics in Object-Oriented Programming (OOPS), DBMS, Operating Systems, and Computer Networks.',
    },
    {
      phase: 'Phase 3',
      title: 'Data Structures & Algorithms',
      duration: 'Weeks 13 - 22',
      tabId: 'dsa',
      desc: 'Master core Data Structures (Arrays, Linked Lists, Trees, Graphs) and Problem-Solving patterns.',
    },
    {
      phase: 'Phase 4',
      title: 'Projects & System Design',
      duration: 'Weeks 23 - 28',
      tabId: 'projects',
      desc: 'Develop 2-3 full-stack projects, prepare system design concepts, and polish your resume.',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Overview Hero */}
      <div className="bg-gradient-to-r from-[#172033] to-[#26313D] text-white p-6 sm:p-8 rounded-2xl shadow-sm border border-[#3A4859]">
        <div className="flex items-center gap-2 text-[#C58A52] text-xs font-semibold uppercase tracking-wider mb-2">
          <Target className="w-4 h-4" />
          <span>Placement Roadmap Guide</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#F5F0E8] tracking-tight">
          Complete Placement Preparation Roadmap
        </h1>
        <p className="text-sm sm:text-base text-[#D0C7B8] mt-2 max-w-3xl">
          A structured 28-week step-by-step roadmap to crack top tech campus placement drives and off-campus opportunities.
        </p>
      </div>

      {/* Highlights */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-[#E7DED2] shadow-xs">
          <p className="text-xs text-[#7A746B] font-medium">Total Duration</p>
          <p className="text-2xl font-bold text-[#172033] mt-1">28 Weeks</p>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-[#E7DED2] shadow-xs">
          <p className="text-xs text-[#7A746B] font-medium">Core Modules</p>
          <p className="text-2xl font-bold text-[#B87333] mt-1">4 Phases</p>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-[#E7DED2] shadow-xs">
          <p className="text-xs text-[#7A746B] font-medium">Target Role</p>
          <p className="text-2xl font-bold text-[#172033] mt-1">SDE / Software</p>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-[#E7DED2] shadow-xs">
          <p className="text-xs text-[#7A746B] font-medium">Goal</p>
          <p className="text-2xl font-bold text-emerald-700 mt-1">100% Prepared</p>
        </div>
      </div>

      {/* Roadmap Phase Cards */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-[#172033] flex items-center gap-2">
          <Calendar className="w-5 h-5 text-[#B87333]" />
          Preparation Timeline
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {roadmapPhases.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-[#E7DED2] shadow-xs hover:border-[#DCCDBA] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#F7F2EA] text-[#B87333] border border-[#E7DED2]">
                    {item.phase}
                  </span>
                  <span className="text-xs font-semibold text-[#7A746B]">{item.duration}</span>
                </div>
                <h3 className="text-base font-bold text-[#172033] mb-2">{item.title}</h3>
                <p className="text-xs md:text-sm text-[#4B5563] leading-relaxed">{item.desc}</p>
              </div>

              {setActiveTab && (
                <button
                  onClick={() => setActiveTab(item.tabId)}
                  className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#B87333] hover:text-[#A06228] transition-colors cursor-pointer"
                >
                  Explore Phase Details <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Placement Strategy Tips */}
      <div className="bg-[#FAF8F3] border border-[#E7DED2] rounded-2xl p-6 space-y-3">
        <h3 className="font-bold text-[#172033] text-sm flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#B87333]" />
          Key Placement Tips
        </h3>
        <ul className="text-xs md:text-sm text-[#4B5563] space-y-2 list-disc list-inside">
          <li>Maintain consistent daily problem-solving on platforms like LeetCode or GeeksforGeeks.</li>
          <li>Build 2 strong projects with live deployment links rather than multiple small tutorial clones.</li>
          <li>Practice mock interviews with peers to improve verbal technical communication.</li>
        </ul>
      </div>
    </div>
  );
}