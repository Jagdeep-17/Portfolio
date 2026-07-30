import React from 'react'

const Terminal = () => {
  return (
    <div className="max-w-[14em] w-full h-40 bg-black rounded-[0.75em] shadow-[0_0.5em_2em_rgba(0,0,0,0.2)] overflow-hidden flex flex-col absolute bottom-58 right-40">
      <div className="h-[1.75em] bg-indigo-500 flex items-center px-[0.75em]">
        <div className="flex gap-[0.35em]">
          <div className="w-[0.55em] h-[0.55em] rounded-full bg-[#FF3B30] hover:scale-110 active:scale-95 transition-transform duration-200"></div>
          <div className="w-[0.55em] h-[0.55em] rounded-full bg-[#FFD60A] hover:scale-110 active:scale-95 transition-transform duration-200"></div>
          <div className="w-[0.55em] h-[0.55em] rounded-full bg-[#32D74B] hover:scale-110 active:scale-95 transition-transform duration-200"></div>
        </div>
      </div>

      <div className="p-[0.6em] font-mono text-[0.65em] leading-[1.4] text-white flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-[#333344] scrollbar-track-[#1a1a1a] hover:scrollbar-thumb-[#444455]">
        <div className="text-[#528BFF]">$ npm install</div>
        <div className="text-[#9CA3AF]">
          added 1 package, and audited 2 packages in 1s
        </div>
        <div className="text-[#32D74B]">$ git commit -m "initial commit"</div>
        <div className="text-[#9CA3AF]">[main 1234abc] initial commit</div>
        <div className="text-[#FFD60A]">$ npm run dev</div>
        <div className="text-[#9CA3AF]">&gt; vite</div>
        <div className="text-[#9CA3AF]">&gt; Local: http://localhost:5173/</div>
        <span className="inline-block w-[0.4em] h-[0.9em] bg-[#528BFF] animate-[blink_1s_step-end_infinite] align-middle"></span>
      </div>
    </div>
  )
}

export default Terminal