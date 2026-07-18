
import Hero from "../components/hero.jsx";
import AboutSection from "../components/AboutSection";
import FeaturedServices from "../components/FeaturedServices";
import WhyChooseUs from "../components/WhyChooseUs";
import FeaturedEvents from "../components/FeaturedEvents";
import ProcessTimeline from "../components/ProcessTimeline";
import CTASection from "../components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <FeaturedServices />
      <WhyChooseUs />
      
      <FeaturedEvents />
      <ProcessTimeline />
      <CTASection />
    </>
  );
}