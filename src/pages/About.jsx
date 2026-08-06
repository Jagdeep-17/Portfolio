import React from 'react'
import About_Header from '../components/About/About_Header'
import About_Images from '../components/About/About_ContentTwo'
import About_Content from '../components/About/About_Content'

const About = () => {
  return (
    <div className='h-screen w-full flex flex-col items-center justify-center gap-3'>
      <About_Header/>
      <About_Content/>
            <About_Images/>

    </div>
  )
}

export default About
