import React from "react";

const About_Content = () => {
  return (
    <p className="font-[Prime] text-[17px] md:text-[20px] text-stone-600 leading-relaxed text-center max-w-4xl mx-auto transition-all duration-700 ease-out">
      I build modern web experiences{" "}
      
      {/* SVG 1 */}
      <img
        src="/your-svg-1.svg"
        alt=""
        className="inline-block w-[45px] h-auto align-middle -mt-6 -mx-3"
        draggable={false}
      />
      
      {" "}while exploring{" "}
      
      <span className="relative inline-block">
        {/* SVG 2 */}
        <img
          src="/your-svg-2.svg"
          alt=""
          className="absolute -top-4 left-[10%] -translate-x-1/2 w-[22px] h-auto pointer-events-none"
          draggable={false}
        />
        
        IoT and robotics
      </span>
      
      {" "}to create practical solutions that blend software, hardware, and thoughtful design.
      
      {" "}
      
      <span className="inline-flex items-center border border-stone-500 px-2.5 pt-[2px] pb-[0px] rounded-sm">
        <span className="relative">
          <span className="invisible">Always learning.</span>
          <span className="absolute inset-0">Always learning.</span>
        </span>
      </span>
    </p>
  );
};

export default About_Content;