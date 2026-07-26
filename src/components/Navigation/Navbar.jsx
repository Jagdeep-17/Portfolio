import React from 'react'

const Navbar = () => {
  return (
    <div className='text-slate-900 w-full h-[10vh] p-6 '>
      <div className='flex items-center justify-between text-[13px] font-NotoSans tracking-wide text-slate-900 hover:text-indigo-500 transition-all duration-300'>
        <div>
    Jagdeep Singh
      </div>
      <div className='flex gap-3'>
        <a href="#">About</a>
                <a href="#">Work</a>
        <a href="#">Playground</a>

      </div>
      </div>
    </div>
  )
}

export default Navbar
