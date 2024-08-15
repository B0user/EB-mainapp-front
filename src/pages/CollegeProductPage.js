import React from "react";
import universities from './univer.json';

import LandingHeader from "../features/landing/LandingHeader";
import HeroBlock from "../features/colleges/CollegeHeroBlock";

const CollegeProductPage = () => {
    return(
        <>
        <LandingHeader/>
        <HeroBlock />
        </>
    );
}

export default CollegeProductPage;