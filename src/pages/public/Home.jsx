import CTASection from "../../components/public/home/CTASection";
import DotGrid from "../../components/public/home/DotGrid";
import FeatureCard from "../../components/public/home/FeatureCard";
import Hero from "../../components/public/home/Hero";
import HowItWorks from "../../components/public/home/HowItWorks";
import Footer from "../../components/public/global/Footer";
import DashboardPreview from "../../components/public/home/DashboardPreview";

const Home = () => {
  return (
    <>
      <div className="relative">
        <div className="relative w-full h-[450px] md:h-[500px]">
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
          <div className="absolute bottom-0 w-full gradient-bg h-[400px]"></div>
        </div>

        <Hero />
      </div>
      <DashboardPreview />
      <HowItWorks />

      <div className="py-20">
        <div className="wrapper flex flex-col gap-12">
          <h2 className="text-3xl font-bold text-white text-center">
            Why Choose Us?
          </h2>
          <section className="wrapper grid grid-cols-1 md:grid-cols-3 gap-6">
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
        </div>
      </div>

      <CTASection />
      <Footer />
      <div className="fixed bottom-0 w-full gradient-bg h-[150px]"></div>
    </>
  );
};

export default Home;
