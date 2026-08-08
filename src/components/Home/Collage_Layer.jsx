import React from "react";

import SceneCanvas from "../SceneCanvas";

import TicketCard from "../TicketCard";
import RetroTapePlayer from "../RetroTapePlayer";
import SwingingIDCard from "../SwingingIDCard";
import Terminal from "../Navigation/Terminal";

const Collage_Layer = () => {
  return (
    <div className="absolute inset-0 overflow-visible">

      {/* 3D Layer */}
      <SceneCanvas />

      {/* Normal React / DOM Layer */}
      <div className="absolute inset-0 z-10 pointer-events-none">

        <SwingingIDCard />

        <Terminal />

        <TicketCard />
<RetroTapePlayer/>
      </div>

    </div>
  );
};

export default Collage_Layer;