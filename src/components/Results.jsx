// Results.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const Results = () => {
  const { state } = useLocation(); // Get the state passed during navigation
  const { score, total } = state || { score: 0, total: 0 };

  return (
    <div className="flex items-center justify-center h-screen">
                <div className="h-96 w-96 ml-5 mr-5 border-2 border-black rounded-3xl shadow-2xl bg-blue-800">
                <div className="text-center text-white text-2xl mt-28">Result</div>
                <div className="text-center text-white text-2xl mt-5">Your score is {score}/{total}</div>
            </div>
            </div>

  );
};

export default Results;
