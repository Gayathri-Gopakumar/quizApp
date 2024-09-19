import React from 'react';
import { Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const score = location.state?.score || 0; // Use a fallback in case state is missing
  const totalQuestions = location.state?.totalQuestions || 0; // Get total questions passed from the QuizPlay component

  return (
    <div style={{height:'100vh',backgroundImage: 'url("https://cdn.wallpapersafari.com/79/95/Mkr0LQ.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'}} className='d-flex justify-content-center align-items-center flex-column'>
      <h1>Your Score: {score}/{totalQuestions}</h1>
      <Button onClick={() => navigate('/')} variant='primary'>Restart Quiz</Button>
    </div>
  );
};

export default ResultPage;
