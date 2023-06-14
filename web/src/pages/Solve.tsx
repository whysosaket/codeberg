import EditView from '../components/EditView'
import QuestionPane from '../components/QuestionPane/QuestionPane'
import TestCase from '../components/TestCase'

const Solve = () => {
  return (
   <>
   <div className='md:flex'>
    <div className='md:w-1/2 border dark:border-none'><QuestionPane /></div>
    <div className='md:w-1/2 border dark:border-none dark:bg-dark3'>
      <EditView />
      <TestCase />  
    </div>
   </div>
   {/* <EditView /> */}
   </>
  )
}

export default Solve