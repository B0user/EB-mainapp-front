import React, { useEffect, useState } from "react";
import "./ScrollProgress.css";

const ScrollProgress = () => {
    const [progress, setProgress] = useState(0);

    const updateScrollProgress = () => {
        const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPosition = window.scrollY;
        const newProgress = (scrollPosition / scrollTotal) * 100;
        setProgress(newProgress);
    };

    useEffect(() => {
        window.addEventListener("scroll", updateScrollProgress);
        return () => {
            window.removeEventListener("scroll", updateScrollProgress);
        };
    }, []);

    return (
        <div className="scroll-progress-container">
            <div className="scroll-progress" style={{ height: `${progress}%` }} />
        </div>
    );
};

export default ScrollProgress;