'use-client';
import React from 'react';

interface StatBoxProps {
    title: string;
    score: number;
    outOf: number;
}

const StatBoxComponent: React.FC<StatBoxProps> = ({ title, score, outOf }) => {
    return (
        <div className="flex bg-white text-black shadow-xl rounded-[10px] w-1/4 h-32 mb-10">
            <div>
                <p>{title}</p>
                <p>{score}</p>
                <p>out of {outOf}</p>
            </div>
        </div>
    );
};

export default StatBoxComponent;
