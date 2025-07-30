import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import DotGrid from "../components/DotGrid";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="relative">
        <div  className="relative w-full h-[600px] md:h-[650px]">
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
        </div>

        <Hero />

        <div className="absolute bottom-0 w-full  gradient-bg h-[400px]"></div>
      </div>

      <div className="bg-secondary h-[400px]">
        Section
      </div>
    </>
  );
};

export default Home;
