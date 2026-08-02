import React from 'react'
import Navbar from './components/Navigation/Navbar'
import Home from './pages/Home'
import About from './pages/About'


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
</div>
  
  )
}

export default App
