import React from 'react';
import './ProblemBlock.css';

const ProblemBlock = () => {
    const problems = [
        {
            emoji: "😆",
            text: "Студенты принимают слабые решения о будущей траектории своей жизни",
        },
        {
            emoji: "😱",
            text: "Решения основаны на чувствах и уровню веры в себя, а не на фактах",
        },
        {
            emoji: "😍",
            text: "Слабая осведомленность, в которой слишком много информации для обычных людей, чтобы разобраться",
        }
    ];

    return (
        <div className="problem-block">
            <h2>ПОСЛЕДСТВИЯ</h2>
            <div className="problem-content">
                <div className="problem-image-container">
                    <img src="edubridge_cons.png" alt="Problem Illustration" className="problem-image" />
                </div>
                <div className="problem-list">
                    {problems.map((problem, index) => (
                        <div className="problem-item" key={index}>
                            <p style={{fontSize: '15px'}}>{problem.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProblemBlock;