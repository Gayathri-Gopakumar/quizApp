import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate('/quiz');
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
      textAlign: 'center',
      backgroundImage: 'url("https://cdn.wallpapersafari.com/79/95/Mkr0LQ.jpg")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        marginBottom: '1rem',
        color: '#fff'
      }}>
        Welcome to the Quiz-App!
      </h1>
      <p style={{
        fontSize: '1.2rem',
        marginBottom: '2rem',
        color: '#ddd'
      }}>
        Test your knowledge by answering multiple-choice questions.
      </p>

      <Button onClick={handleStartQuiz} variant="primary" className='fw-bolder'>
        Start Quiz
      </Button>
    </div>
  );
}

export default Home;
