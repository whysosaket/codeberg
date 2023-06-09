import React from 'react'
import Question from './Question'
import Example from './Example'
import Constraints from './Constraints'

const QuestionPane = () => {
  return (
    <div className="p-2">
      <Question />
      <Example number={1} />
      <Example number={2} />
      <Example number={3} />
      <Constraints />
    </div>
  )
}

export default QuestionPane