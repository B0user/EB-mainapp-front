import React from "react";
import "./Landing.css";

const LandingBlock = () => {
    return (
        <div className="landing-block">
            <div className="landing-image-container">
                <img src="edubridge-preview.png" alt="Guiding Education" className="landing-image" />
                <div className="landing-shadow"></div>
            </div>
            <div className="landing-text-container">
                <div className="landing-text">
                    Ваш гид в запутанном мире образования
                </div>

                </div>
        </div>
    );
};

export default LandingBlock;