import React, { useState, useEffect } from "react";
import Header from '../features/landing/LandingHeader'
import LandingHeroBanner from '../features/landing/LandingHeroBanner'
import LandingBodyNews from "../features/landing/LandingBodyNews"
import LandingResourcesSection from "../features/landing/LandingResourcesSection"
import LandingFooter from "../features/landing/LandingFooter"
import LandingVideoSection from "../features/landing/LandingVideoSection";
import LandingSocialSection from "../features/landing/LandingSocialSection";
import LandingHeroBlock2 from "../features/landing/LandingHeroBlock2";
import ScrollProgress from "../features/landing/ScrollProgress";
import LandingProblems from "../features/landing/LandingProblems";
import LandingCons from "../features/landing/LandingCons";
import LandingSolution from "../features/landing/LandingSolution";
import LandingLocation from "../features/landing/LandingLocation";

const LandingPage = () => {
    const [showScrollProgress, setShowScrollProgress] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const secondBlock = document.getElementById("secondBlock");

            if (secondBlock) {
                const secondBlockTop = secondBlock.offsetTop; // Изменено на offsetTop
                const scrollPosition = window.scrollY + window.innerHeight;

                if (scrollPosition >= secondBlockTop + window.innerHeight / 2) {
                    setShowScrollProgress(true);
                } else {
                    setShowScrollProgress(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Вызов handleScroll после монтирования компонента
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);



    return(
      <>
      <Header />
          {showScrollProgress && <ScrollProgress />}
      <LandingHeroBlock2 id="secondBlock"/>
      <LandingProblems />
      <LandingCons />
      <LandingSolution />
      <LandingLocation />
      </>
  );
}

export default LandingPage;