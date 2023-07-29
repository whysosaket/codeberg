import React, {useState, useEffect} from 'react'
import Question from './Question'
import Example from './Example'
import Constraints from './Constraints'
import {motion} from "framer-motion";

import ReactMarkdown from 'react-markdown'
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";



// testing md files
import Test from '../../assets/test.md';

const QuestionPane = (props) => {

  const [questionText, setQuestionText] = useState('');

  useEffect(() => {
		fetch(Test).then(res => res.text()).then(text => {setQuestionText(text); console.log(text)});
	})

  return (
    <>
    <motion.div 
    initial={{x:-200}}
    animate={{x:0}}
    transition={{ duration: 0.5 }}
    className="p-4 dark:bg-dark3 select-none max-h-screen overflow-y-scroll">
      {props.isMarkdown?
      <ReactMarkdown className='prose' remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} >
        {questionText}
      </ReactMarkdown>
      :<>
      <Question />
      <Example number={1} />
      <Example number={2} />
      <Example number={3} />
      <Example number={4} />
      <Constraints />
      </>}
    </motion.div>
 

    </>
  )
}

export default QuestionPane