import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import DotGrid from "../components/DotGrid";

const Home = () => {
  return (
    <div>
      <div style={{ width: "100%", height: "700px", position: "relative" }}>
        <Navbar />

        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#271E37"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
        <Hero />
      </div>
    </div>
  );
};

export default Home;
