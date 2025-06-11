import React from "react";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import Navbar from "./components/Navbar";
import FeatureCards from "./sections/FeatureCards";
import ExperienceSection from "./sections/ExperienceSection";
import TechStack from "./sections/TechStack";
import Contact from "./sections/ContactUs";

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero />
      <ShowcaseSection />
      <FeatureCards/>
      <ExperienceSection/>
      <TechStack/>
      <Contact/>
    </>
  );
};

export default App;
