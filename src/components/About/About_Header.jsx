import React from 'react'
import svg from "../../assets/images/sticky-notes.svg"

const About_Header = () => {
  return (
    <div
  className="relative w-[340px] md:w-[400px] rotate-2 mb-8"
  style={{
    filter:
      "drop-shadow(0 6px 16px rgba(0,0,0,0.12)) drop-shadow(0 2px 4px rgba(0,0,0,0.08))",
  }}
>
  <img
    src={svg}
    alt=""
    className="w-full h-auto block"
    draggable={false}
  />

  <div className="absolute inset-0">
    <div className="relative z-10 px-10 md:px-12 pt-[16%]">
     <p className="text-left text-[14px] md:text-[15px] text-stone-600 leading-[1.8] tracking-[0.04em] font-NotoSans">
  Hey, I'm Jagdeep—a Computer Engineering student with a passion for building
  modern web applications and exploring the world of IoT and robotics.
</p>
    </div>
  </div>
</div>
  )
}

export default About_Header
