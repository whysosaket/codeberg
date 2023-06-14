import React from 'react'
import Question from './Question'
import Example from './Example'
import Constraints from './Constraints'
import {motion} from "framer-motion";

const QuestionPane = () => {
  return (
    <motion.div 
    initial={{x:-200}}
    animate={{x:0}}
    transition={{ duration: 0.5 }}
    className="p-4 dark:bg-dark3 select-none">
      <Question />
      <Example number={1} />
      <Example number={2} />
      <Example number={3} />
      <Constraints />
    </motion.div>
  )
}

export default QuestionPane