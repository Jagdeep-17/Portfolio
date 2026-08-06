import React from "react";
import Notebook from "../../assets/images/notebook.png";
import Arduino from "../../assets/images/arduino.png";
import Keyboard from "../Keyboard";
import TicketCard from "../TicketCard";
import RetroTapePlayer from "../RetroTapePlayer";
import WalletStack from "../WalletStack";
import SwingingIDCard from "../SwingingIDCard";
import Shelf3D from "../Shelf3D";
import Mug from "../Mug"
import Plant from "../Plant"
import Terminal from "../Navigation/Terminal";
import Keyboard_3d from "../Keyboard_3d";
import Book_Collection_3d from "../Book_Collection_3d";
import GoingMerry from "../GoingMerry";
import Holder from "../Holder";

const Collage_Layer = () => {
  return (
    <div className="absolute inset-0  overflow-y-visible">
     <SwingingIDCard/>
      {/* <WalletStack /> */}
      <Shelf3D/>
      {/* <Plant/> */}
      <RetroTapePlayer />
      <Terminal/>
      <Mug/>
      <TicketCard />
      {/* <Keyboard /> */}
      <Keyboard_3d/>
    <Book_Collection_3d/>
    {/* <Holder/> */}
    <GoingMerry/>
    </div>
  );
};

export default Collage_Layer;
