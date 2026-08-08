import React from 'react'
import Navbar from './components/Navigation/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'


const App = () => {
  return (
  <div
  className="
    w-full h-full overflow-y-visible  overflow-x-hidden
  "
>
  <Navbar/>
<Home/>
<About/>
<Work/>
</div>
  
  )
}

export default App
