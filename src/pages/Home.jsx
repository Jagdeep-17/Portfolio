import React from "react";
import HomeHeading from "../components/Home/HomeHeading";
import Collage_Layer from "../components/Home/Collage_Layer";

const Home = () => {
  return (
    <section className="relative min-h-screen w-full overflow-visible">
      {/* Hero text */}
      <div className="relative z-20 min-h-screen">
        <HomeHeading />
      </div>

      {/* 3D + collage layer */}
      <Collage_Layer />
    </section>
  );
};

export default Home;