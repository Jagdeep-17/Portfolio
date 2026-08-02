import React from 'react'

const Navbar = () => {
  return (
    <div className='text-slate-900 w-full h-[10vh] p-6 '>
      <div className='flex items-center justify-between text-[13px] font-NotoSans tracking-wide '>
        <div className=''>
    Jagdeep Singh
      </div>
      <div className='flex gap-3'>
        <a href="#" className='text-slate-900 hover:text-indigo-500 transition-all duration-300'>About</a>
                <a href="#" className='text-slate-900 hover:text-indigo-500 transition-all duration-300'>Work</a>
        <a href="#" className='text-slate-900 hover:text-indigo-500 transition-all duration-300'>Playground</a>

      </div>
      </div>
    </div>
  )
}

export default Navbar
