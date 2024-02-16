import React, { useState } from 'react'

const Answer = ({
  options,
  correctAnswer,
  selectedOption,
  handleAnswer,
  showScore,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null)

  const handleOptionSelect = (selectedAnswer) => {
    if (!showScore) {
      setSelectedAnswer(selectedAnswer)
      handleAnswer(selectedAnswer)
    }
  }

  return (
    <div className="options">
      {options.map((option, index) => {
        let optionClassName = 'option'
        if (showScore) {
          if (selectedAnswer === option) {
            optionClassName +=
              option === correctAnswer ? ' correct' : ' incorrect'
          } else if (option === correctAnswer) {
            optionClassName += ' correct'
          }
        } else {
          optionClassName += selectedAnswer === option ? ' selected' : ''
        }

        return (
          <button
            key={index}
            onClick={() => handleOptionSelect(option)}
            className={optionClassName}
            disabled={showScore}
          >
            {option}
          </button>
        )
      })}
    </div>
  )
}

export default Answer
