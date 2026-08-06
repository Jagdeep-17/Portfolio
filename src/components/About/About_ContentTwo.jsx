import React from 'react'

const About_Images = () => {
  return (
    <p className="font-[Prime] text-[17px] md:text-[20px] text-stone-600 leading-relaxed mt-6 transition-all duration-700 ease-out">

  <img
    src="/star.svg"
    alt=""
    className="inline-block w-[36px] h-auto align-middle -ml-0.5 mr-1 -mt-1"
    draggable={false}
  />

  <span className="inline-flex items-center border border-stone-500 px-2.5 pt-[2px] pb-[0px] rounded-sm">
    <span className="relative">
      <span className="invisible">Driven by curiosity,</span>
      <span className="absolute inset-0">Driven by curiosity,</span>
    </span>
  </span>

  {" "}
  I enjoy building digital experiences,
  <br />
  experimenting with IoT and robotics, and learning through every project.

</p>
  )
}

export default About_Images
