import React from "react";
import Header from '../features/landing/LandingHeader'
import LandingHeroBanner from '../features/landing/LandingHeroBanner'
import LandingBodyNews from "../features/landing/LandingBodyNews"
import LandingResourcesSection from "../features/landing/LandingResourcesSection"
import LandingFooter from "../features/landing/LandingFooter"

const LandingPage = () => {
  return(
      <>
      <Header />
      <LandingHeroBanner />
      <LandingBodyNews />
      <LandingResourcesSection />
      <LandingFooter />
      </>
  );
}

export default LandingPage;