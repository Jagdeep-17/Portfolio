import React from "react";
import Mug from "../../assets/images/Coffee_Mug.png";
import Notebook from "../../assets/images/notebook.png";
import Arduino from "../../assets/images/arduino.png";
import Keyboard from "../Keyboard";
import TicketCard from "../TicketCard";
import RetroTapePlayer from "../RetroTapePlayer";
import WalletStack from "../WalletStack";
import SwingingIDCard from "../SwingingIDCard";
import Shelf3D from "../Shelf3D";

const Collage_Layer = () => {
  return (
    <div className="absolute inset-0">
     <SwingingIDCard/>
      {/* <WalletStack /> */}
      <Shelf3D/>
      <RetroTapePlayer />
      <TicketCard />
      <Keyboard />
    </div>
  );
};

export default Collage_Layer;
