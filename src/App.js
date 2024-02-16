import React, { useState, useRef } from 'react'
import Header from './components/Header'
import Question from './components/Question'
import Answer from './components/Answer'
import Score from './components/Score'
import './App.css'

const questions = [
  {
    id: 1,
    questionText: 'What is React?',
    options: [
      'A JavaScript library for building user interfaces',
      'A CSS framework',
      'A programming language',
      'A database management system',
    ],
    correctAnswer: 'A JavaScript library for building user interfaces',
  },
  {
    id: 2,
    questionText: 'Which of the following is NOT a feature of React?',
    options: [
      'Virtual DOM',
      'Two-way data binding',
      'JSX',
      'Component-based architecture',
    ],
    correctAnswer: 'Two-way data binding',
  },
  {
    id: 3,
    questionText: 'What is JSX?',
    options: [
      'A JavaScript syntax extension',
      'A CSS preprocessor',
      'A database management system',
      'A testing framework',
    ],
    correctAnswer: 'A JavaScript syntax extension',
  },
  {
    id: 4,
    questionText: 'What is a state in React?',
    options: [
      'A way to store data that changes over time',
      'A component lifecycle method',
      'A method to render components',
      'A styling mechanism',
    ],
    correctAnswer: 'A way to store data that changes over time',
  },
  {
    id: 5,
    questionText: 'What is a prop in React?',
    options: [
      'A way to pass data from parent to child component',
      'A built-in React component',
      'A method for event handling',
      'A styling utility',
    ],
    correctAnswer: 'A way to pass data from parent to child component',
  },
  {
    id: 6,
    questionText:
      'Which lifecycle method is called after a component is rendered for the first time?',
    options: [
      'componentDidMount',
      'componentWillUnmount',
      'componentDidUpdate',
      'render',
    ],
    correctAnswer: 'componentDidMount',
  },
  {
    id: 7,
    questionText: 'What is the purpose of the useState hook?',
    options: [
      'To add state to functional components',
      'To import external libraries',
      'To handle HTTP requests',
      'To style components',
    ],
    correctAnswer: 'To add state to functional components',
  },
  {
    id: 8,
    questionText: 'What does the useEffect hook do?',
    options: [
      'Performs side effects in functional components',
      'Renders components',
      'Updates the DOM directly',
      'Handles user events',
    ],
    correctAnswer: 'Performs side effects in functional components',
  },
  {
    id: 9,
    questionText: 'What is React Router?',
    options: [
      'A library for routing in React applications',
      'A styling framework',
      'A data fetching library',
      'A state management tool',
    ],
    correctAnswer: 'A library for routing in React applications',
  },
  {
    id: 10,
    questionText: 'What is Redux?',
    options: [
      'A state management tool',
      'A form validation library',
      'A data fetching library',
      'A styling framework',
    ],
    correctAnswer: 'A state management tool',
  },
]

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const selectedOption = useRef(null)

  const handleNextQuestion = () => {
    const nextQuestionIndex = currentQuestionIndex + 1
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex)
      setShowScore(false)
      selectedOption.current = null
    } else {
      setShowScore(true)
    }
  }

  const handleAnswer = (selectedAnswer) => {
    selectedOption.current = selectedAnswer
    if (!showScore) {
      if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
        setScore(score + 1)
      }
    }
  }

  const handleFinish = () => {
    setShowScore(true)
  }

  return (
    <div className="app">
      <Header />
      {!showScore ? (
        <div className="quiz-container">
          <Question question={questions[currentQuestionIndex]} />
          <Answer
            options={questions[currentQuestionIndex].options}
            selectedOption={selectedOption.current} 
            handleAnswer={handleAnswer}
            showScore={showScore}
          />

          <div className="btn">
            {currentQuestionIndex === questions.length - 1 ? (
              <button
                onClick={handleFinish}
                style={{
                  padding: '15px 40px',
                  marginTop: '20px',
                  backgroundColor: '#007bff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  fontSize: '16px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s, color 0.3s',
                }}
              >
                Finish
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                style={{
                  padding: '15px 40px',
                  marginTop: '20px',
                  backgroundColor: '#007bff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  fontSize: '16px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s, color 0.3s',
                }}
              >
                Next
              </button>
            )}
          </div>
        </div>
      ) : (
        <Score score={score} totalQuestions={questions.length} />
      )}
    </div>
  )
}

export default App
