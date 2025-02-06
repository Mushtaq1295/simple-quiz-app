import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Card = () => {
  const questions = [
    {
      question: "What is the capital of India?",
      options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
      answer: "Delhi",
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Saturn", "Jupiter", "Mars"],
      answer: "Jupiter",
    },
    {
      question: "Which of the following is a type of programming language?",
      options: ["Python", "Java", "C++", "Math"],
      answer: "Python",
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Ag", "Au", "Hg", "Pb"],
      answer: "Au",
    },
    {
      question: "What is the largest mammal on Earth?",
      options: ["Blue whale", "Fin whale", "Humpback whale", "Whale"],
      answer: "Blue whale",
    },
    {
      question: "What is the smallest country in the world?",
      options: ["Vatican City", "Monaco", "Nauru", "Tuvalu"],
      answer: "Vatican City",
    },
    {
      question: "What is the largest desert in the world?",
      options: ["Sahara", "Gobi", "Mojave", "Atac"],
      answer: "Sahara",
    },
    {
      question: "What is the largest city in the world?",
      options: ["Tokyo", "Delhi", "Shanghai", "Mumbai"],
      answer: "Tokyo",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [capture, setCapture] = useState(null);
  const [count, setCount] = useState(0);
  const [optionCount, setOptionCount] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];

  const navigate = useNavigate();


  const evaluation = () =>{
    if(optionCount === questions.length){
      navigate('/results', { state: { score: count + (capture === currentQuestion.answer ? 1 : 0), total: questions.length } });
    }
    else{
      alert("attempt all the questions")
    }
  };


  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
      setCapture(null);
    }
  };

  const handleNext = () => {
    if (capture === null) {
      alert("Please select an answer");
      return;
    }

    setOptionCount((prev) => prev + 1); // Corrected option count update

    if (capture === currentQuestion.answer) {
      setCount((prev) => prev + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setCapture(null);
    } else {
      alert("You've reached the last question. Click the submit button.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="h-auto w-[500px] p-5 border-2 border-black rounded-3xl shadow-2xl bg-blue-800">
        <div className="text-white text-xl ml-5 mt-5">
          Question {currentQuestionIndex + 1}/{questions.length}
        </div>

        <div className="text-white text-2xl ml-5 mt-5">{currentQuestion.question}</div>

        <div className="text-white text-2xl ml-5 mt-5">
          <div className="flex flex-col ml-1">
            {currentQuestion.options.map((option, index) => (
              <div
                key={index}
                onClick={() => setCapture(option)}
                className={`h-auto w-[400px] border-2 cursor-pointer rounded-lg mb-2 p-3 transition duration-300 ${
                  capture === option ? 'bg-pink-500' : 'bg-transparent'
                }`}
              >
                {option}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between w-full">
          <button
            onClick={handlePrev}
            disabled={currentQuestionIndex === 0}
            className={`w-auto h-auto p-2 text-white rounded-lg cursor-pointer ${
              currentQuestionIndex === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-pink-400'
            }`}
          >
            Prev
          </button>
          <button 
            onClick={evaluation}
            className='hide w-auto h-auto p-2 text-white bg-orange-400 rounded-lg cursor-pointer'>Submit</button>
          <button
            onClick={handleNext}
            className="w-auto h-auto p-2 text-white bg-pink-500  rounded-lg cursor-pointer"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
