import React from 'react';
import './ProblemBlock.css';

const ProblemBlock = () => {
    const problems = [
        {
            emoji: "😆",
            text: "Сложно разобраться в теме, нет актуальных источников от А до Я",
        },
        {
            emoji: "😱",
            text: "Агентства дорогие и без гарантий, обманывают надежды",
        },
        {
            emoji: "😍",
            text: "Информация быстро устаревает, а компании не поспевают",
        }
    ];

    return (
        <div className="problem-block">
            <h2>ПРОБЛЕМА</h2>
            <div className="problem-content">
                <div className="problem-image-container">
                    <img src="edubridge_prblms.png" alt="Problem Illustration" className="problem-image" />
                </div>
                <div className="problem-list">
                    {problems.map((problem, index) => (
                        <div className="problem-item" key={index}>
                            <p>{problem.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProblemBlock;