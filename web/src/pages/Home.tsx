import React from 'react'
import EditView from '../components/EditView'
import QuestionPane from '../components/QuestionPane/QuestionPane'

const Home = () => {
  return (
   <>
   <div className='flex'>
    <div className='w-1/2 border'><QuestionPane /></div>
    <div className='w-1/2 border'><EditView /></div>
   </div>
   {/* <EditView /> */}
   </>
  )
}

export default Home