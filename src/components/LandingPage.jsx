import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function LandingPage({ onStart }) {
  return (
    <div className="min-h-screen bg-[#FAF8F3] flex flex-col items-center justify-center p-6 text-center">
      <img src="/logo.png" alt="Creomind Innovations" className="h-16 mb-6 object-contain mix-blend-multiply" />
      <h1 className="text-4xl font-extrabold text-[#172033] mb-3">
        Welcome to Creomind Innovations
      </h1>
      <p className="text-[#4B5563] mb-8">Learn | Prepare | Build Your Future</p>
      
      <button
        onClick={onStart}
        className="bg-[#B87333] hover:bg-[#A06228] text-white font-bold px-6 py-3 rounded-xl flex items-center gap-2 shadow-md transition-all cursor-pointer"
      >
        Placement Preparation <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}