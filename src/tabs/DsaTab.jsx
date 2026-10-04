// DsaTab.jsx
import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function DsaTab() {
  const dsaPlatforms = [
    { name: 'LeetCode', desc: 'Best for interview prep & company questions', url: 'https://leetcode.com/' },
    { name: 'Coding Ninjas', desc: 'Structured learning path with guided problems', url: 'https://www.naukri.com/code360' },
    { name: 'GeeksforGeeks', desc: 'Best for concept learning + practice', url: 'https://www.geeksforgeeks.org/' },
    { name: 'HackerRank', desc: 'Good for beginners & topic-wise practice', url: 'https://www.hackerrank.com/' },
    { name: 'CodeChef', desc: 'Monthly contests & practice problems', url: 'https://www.codechef.com/' },
    { name: 'Codeforces', desc: 'Competitive programming & contests', url: 'https://codeforces.com/' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-[#172033] flex items-center gap-2">
        ⚡ Data Structures & Algorithms - 12 Weeks
      </h2>

      <div className="bg-[#FAF8F3] border-l-4 border-[#B87333] p-4 rounded-xl text-[#26313D] text-sm border border-[#E7DED2]">
        <strong className="text-[#B87333]">⚠️ Why DSA is Crucial:</strong> Target: 250-400 problems in 12 weeks. Practice daily like gym - skip a week and you'll forget everything.
      </div>

      {/* Featured Sheet */}
      <div className="bg-gradient-to-r from-[#172033] to-[#26313D] p-6 rounded-2xl text-white shadow-md space-y-3 border border-[#3A4859]">
        <h3 className="font-bold text-lg text-[#F5F0E8]">🌟 Top DSA Sheet & Resource</h3>
        <p className="text-xs md:text-sm text-[#D0C7B8]">
          Follow Striver's A2Z DSA Sheet consistently for complete coverage from basic to advanced algorithms.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#B87333] hover:bg-[#A06228] text-white font-bold text-xs px-4 py-2.5 rounded-lg inline-flex items-center gap-1.5 shadow-xs transition-colors"
          >
            Striver's A2Z DSA Sheet (MUST FOLLOW) <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href="https://www.youtube.com/@takeUforward"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 text-[#F5F0E8] font-bold text-xs px-4 py-2.5 rounded-lg inline-flex items-center gap-1.5 border border-[#E7DED2]/30 transition-colors"
          >
            Striver's YouTube Channel <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Practice Platforms Grid */}
      <div className="space-y-3">
        <h3 className="font-bold text-[#172033] text-base">💻 Practice Platforms</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {dsaPlatforms.map((p, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl border border-[#E7DED2] shadow-xs hover:border-[#DCCDBA] transition-all flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-[#172033] text-sm">{p.name}</h4>
                <p className="text-xs text-[#7A746B] mt-1">{p.desc}</p>
              </div>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-1.5 bg-[#B87333] hover:bg-[#A06228] text-white text-xs font-semibold py-2 px-3 rounded-lg transition-colors cursor-pointer"
              >
                Start Solving <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}