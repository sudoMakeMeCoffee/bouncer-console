import React from "react";
import Navbar from "../components/Navbar";
import DotGrid from "../components/DotGrid";
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import HowItWorks from "../components/HowItWorks";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import CodeBlock from "../components/CodeBlock";

const Home = () => {

  return (
    <>
      <Navbar />
      <div className="relative">
        <div className="relative w-full h-[600px] md:h-[650px]">
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
        <div className="absolute bottom-0 w-full gradient-bg h-[400px]"></div>
      </div>

      <section className="wrapper  grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <FeatureCard
          title="Secure Authentication"
          description="Protect your apps and users with strong authentication methods."
          icon="security"
        />
        <FeatureCard
          title="Fast & Reliable"
          description="High performance API with minimal latency for your apps."
          icon="fast"
        />
        <FeatureCard
          title="Developer First"
          description="Integrate easily using modern REST API and SDKs."
          icon="developer"
        />
      </section>

      <HowItWorks />
      <CTASection />
      <Footer />
    </>
  );
};

export default Home;
