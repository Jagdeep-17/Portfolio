import React from 'react'
import Mug from '../../assets/images/Coffee_Mug.png'
import Notebook from '../../assets/images/notebook.png'
import Arduino from '../../assets/images/arduino.png'
import Keyboard from '../Keyboard'
import TicketCard from '../TicketCard'

const Collage_Layer = () => {
  return (
    <div className="absolute inset-0">
      
      <img
        src={Arduino}
        className="absolute top-24 right-20 w-60 h-80 "
      />
    <TicketCard/>
      <Keyboard/>
    </div>
  )
}

export default Collage_Layer
