// ResourcesTab.jsx
import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function ResourcesTab() {
  const resourcesList = [
    { category: 'Aptitude Resources', items: [
      { name: 'IndiaBix - Free Aptitude Practice', url: 'https://www.indiabix.com/' },
      { name: 'PrepInsta - Company Patterns', url: 'https://prepinsta.com/' },
      { name: 'LearnTheta - AI Practice', url: 'https://www.learntheta.com/' },
      { name: 'GeeksforGeeks Placement Prep', url: 'https://www.geeksforgeeks.org/placement-preparation-course/' },
    ]},
    { category: 'CS Fundamentals', items: [
      { name: 'GeeksforGeeks - All CS Subjects', url: 'https://www.geeksforgeeks.org/computer-science-projects/' },
      { name: 'Gate Smashers (YouTube)', url: 'https://www.youtube.com/@GateSmashers' },
      { name: 'Knowledge Gate (YouTube)', url: 'https://www.youtube.com/@KnowledgeGate' },
      { name: 'Jenny\'s Lectures (YouTube)', url: 'https://www.youtube.com/@JennyslecturesCSIT' },
      { name: 'Neso Academy (YouTube)', url: 'https://www.youtube.com/@nesoacademy' },
    ]},
    { category: 'DSA Resources', items: [
      { name: 'Striver\'s A2Z DSA Sheet', url: 'https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/' },
      { name: 'Striver\'s YouTube Channel', url: 'https://www.youtube.com/@takeUforward' },
      { name: 'LeetCode', url: 'https://leetcode.com/' },
      { name: 'Coding Ninjas Studio', url: 'https://www.naukri.com/code360' },
      { name: 'GeeksforGeeks Practice', url: 'https://practice.geeksforgeeks.org/' },
      { name: 'HackerRank', url: 'https://www.hackerrank.com/' },
    ]}
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-[#172033] flex items-center gap-2">
        📚 All Resources - Quick Reference
      </h2>

      <div className="space-y-6">
        {resourcesList.map((sec, idx) => (
          <div key={idx} className="space-y-3">
            <h3 className="font-bold text-[#B87333] text-base">{sec.category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {sec.items.map((item, itemIdx) => (
                <a
                  key={itemIdx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-4 rounded-xl border border-[#E7DED2] shadow-xs hover:border-[#DCCDBA] flex items-center justify-between text-xs md:text-sm font-semibold text-[#172033] hover:text-[#B87333] transition-colors"
                >
                  <span>{item.name}</span>
                  <ExternalLink className="w-4 h-4 text-[#B87333] flex-shrink-0 ml-2" />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}