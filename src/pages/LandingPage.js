import React from "react";
import Header from '../features/landing/LandingHeader'
import LandingHeroBanner from '../features/landing/LandingHeroBanner'
import LandingBodyNews from "../features/landing/LandingBodyNews"
import LandingResourcesSection from "../features/landing/LandingResourcesSection"
import LandingFooter from "../features/landing/LandingFooter"
import LandingVideoSection from "../features/landing/LandingVideoSection";
import LandingSocialSection from "../features/landing/LandingSocialSection";

const LandingPage = () => {
  return(
      <>
      <Header />
      <LandingHeroBanner />
      <LandingBodyNews />
      <LandingResourcesSection />
      <LandingVideoSection />
          <LandingSocialSection />
          <LandingFooter />
      </>
  );
}

export default LandingPage;