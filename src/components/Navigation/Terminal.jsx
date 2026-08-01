import React from "react";

const Terminal = () => {
  return (
    <div className="max-w-[14em] w-full h-43 bg-black rounded-[0.75em] shadow-[0_0.5em_2em_rgba(0,0,0,0.2)] overflow-hidden flex flex-col absolute bottom-58 right-40">
      {/* Header */}
      <div className="h-[1.75em] bg-indigo-500 flex items-center p-2">
        <div className="flex gap-[0.35em]">
          <div className="w-[0.55em] h-[0.55em] rounded-full bg-[#FF3B30]"></div>
          <div className="w-[0.55em] h-[0.55em] rounded-full bg-[#FFD60A]"></div>
          <div className="w-[0.55em] h-[0.55em] rounded-full bg-[#32D74B]"></div>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-[0.6em] font-mono text-[0.65em] leading-[1.5] text-white flex-1">
        <div className="text-[#528BFF]">$ whoami</div>

        <div className="text-[#9CA3AF] mb-2">
          Jagdeep Singh
        </div>

        <div className="text-[#32D74B]">$ npm run life</div>

        <div className="text-[#9CA3AF]">
          &gt; Learning...
        </div>

        <div className="text-[#9CA3AF]">
          &gt; Building...
        </div>

        <div className="text-[#9CA3AF]">
          &gt; Breaking...
        </div>

        <div className="text-[#9CA3AF]">
          &gt; Fixing...
        </div>

        <div className="text-[#32D74B] mt-1">
          ✓ Never Settling
          <span className="inline-block w-[0.4em] h-[0.9em] ml-1 bg-[#528BFF] animate-[blink_1s_step-end_infinite] align-middle"></span>
        </div>
      </div>
    </div>
  );
};

export default Terminal;