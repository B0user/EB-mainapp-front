import React from "react";
import "./RotatingText.css";

const RotatingText = () => {
    const text = "Централизация данных || Единая платформа || AI Гид ||";
    return (
        <>
        <div className="parent-container">
            <p className="centered-text">НАШЕ РЕШЕНИЕ</p>
        <div className="rotating-text-wrapper">
            <div className="rotating-text-circle">
                {text.split("").map((char, index) => (
                    <span
                        key={index}
                        style={{
                            transform: `rotate(${index * (360 / text.length)}deg)`,
                            transformOrigin: "0 200px",
                            fontSize: '17px'
                        }}
                    >
            {char}
          </span>
                ))}
            </div>
            <div className="logo">
                <img src="EDUBRIDGE_solution.png" alt="Logo" style={{width: '250px'}}/>
            </div>
        </div>
        </div>
        </>
    );
};

export default RotatingText;