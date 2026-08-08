import React from "react";
import {
  House,
  Monitor,
  Star,
  Sprout,
} from "lucide-react";

const Terminal_Work = () => {
  return (
    <div className="h-full w-full bg-white rounded-[0.75em] shadow-[0_0.5em_2em_rgba(0,0,0,0.2)] flex flex-col overflow-hidden">

      {/* Header */}
      <div className="h-[1.75em] shrink-0 bg-[#ECE9E4] flex items-center px-5">
        <div className="flex gap-[0.35em]">
          <div className="w-[0.55em] h-[0.55em] rounded-full bg-[#FF3B30]" />
          <div className="w-[0.55em] h-[0.55em] rounded-full bg-[#FFD60A]" />
          <div className="w-[0.55em] h-[0.55em] rounded-full bg-[#32D74B]" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 min-h-0">

        {/* Sidebar */}
        <div className="hidden lg:block w-[170px] shrink-0 bg-[#EDE9E2]/60 backdrop-blur-sm border-r border-stone-300/30 py-3 px-2">

          {/* Section Title */}
          <p className="text-[11px] font-medium text-stone-400 px-2 mb-1">
            Favorites
          </p>

          {/* Projects */}
          <button className="w-full flex items-center gap-2 px-2 py-[5px] rounded-md text-[12px] text-left cursor-pointer transition-colors  text-stone-600 hover:bg-[#E8E0D4]">
            <House size={16} color="#2196F3" />
            <span>Projects</span>
          </button>

          {/* Snapshot */}
          <button className="w-full flex items-center gap-2 px-2 py-[5px] rounded-md text-[12px] text-left cursor-pointer transition-colors text-stone-600 hover:bg-[#E8E0D4]">
            <Monitor size={16} color="#2196F3" />
            <span>Profile</span>
          </button>

          {/* Achievements */}
          <button className="w-full flex items-center gap-2 px-2 py-[5px] rounded-md text-[12px] text-left cursor-pointer transition-colors text-stone-600 hover:bg-[#E8E0D4]">
            <Star size={16} color="#2196F3" />
            <span>Achievements</span>
          </button>

          {/* Garden */}
          <button className="w-full flex items-center gap-2 px-2 py-[5px] rounded-md text-[12px] text-left cursor-pointer transition-colors text-stone-600 hover:bg-[#E8E0D4]">
            <Sprout size={16} color="#2196F3" />
            <span>Journey</span>
          </button>

        </div>

        {/* Terminal Body */}
        <div className="flex-1 min-w-0 bg-[#EFEEEC] p-[0.6em] font-mono text-[0.65em] leading-[1.5] text-white">

          

        </div>

      </div>

    </div>
  );
};

export default Terminal_Work;