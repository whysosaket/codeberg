import React from 'react'
import Question from './Question'
import Example from './Example'
import Constraints from './Constraints'

const QuestionPane = () => {
  return (
    <div className="p-4 dark:bg-dark3">
      <Question />
      <Example number={1} />
      <Example number={2} />
      <Example number={3} />
      <Constraints />
    </div>
  )
}

export default QuestionPane