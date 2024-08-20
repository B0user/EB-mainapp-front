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
                <a href="#problems">
                <button  style={{height: '50px', borderRadius: '25px', width: '200px', border: '0', marginTop: '50px', letterSpacing: '0.4rem', fontSize:'17px'}}>ДАЛЕЕ</button>
                </a>
                </div>
        </div>
    );
};

export default LandingBlock;