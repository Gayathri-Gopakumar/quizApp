import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import questions from '../Questions.js'; 
import Button from 'react-bootstrap/Button';

function QuizPlay() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);    
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      // Pass the score and total number of questions to the result page
      navigate('/result', { state: { score: score + (isCorrect ? 1 : 0), totalQuestions: questions.length } });
    }
  };

  return (
    <div style={{ height: '100vh', background: 'linear-gradient(to right, #F3E8FF, #e0e0e0)' }} className='d-flex justify-content-center align-items-center flex-column'>
      {/* Display the current question number */}
      <h5>{currentQuestion + 1}/{questions.length}</h5>
      
      <h2>{questions[currentQuestion].question}</h2>
      
      <div>
        {questions[currentQuestion].options.map((option, index) => (
          <Button
            style={{ margin: '10px' }}
            key={index}
            onClick={() => setSelectedOption(option)}
            variant={selectedOption === option ? 'primary' : 'info'} // Change color when selected
          >
            {option.text}
          </Button>
        ))}
      </div>
      
      <Button onClick={() => handleAnswer(selectedOption?.isCorrect)} className='mt-3'>
        Next
      </Button>
    </div>
  );
}

export default QuizPlay;

