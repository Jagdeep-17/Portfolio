import React from 'react'
import About_Header from '../components/About/About_Header'
import About_Images from '../components/About/About_Images'
import About_Content from '../components/About/About_Content'

const About = () => {
  return (
    <div className='h-screen w-full grid grid-cols-3 items-center p-5 '>
      <About_Header/>
      <About_Images/>
      <About_Content/>
    </div>
  )
}

export default About
