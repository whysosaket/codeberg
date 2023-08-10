const inoutStyle = "font-semibold dark:text-white text-gray-900 text-base"

const Example = (props: {number: number}) => {
  return (
    <>
        <div className='my-5'>
            <h1 className='font-semibold dark:text-white'>Example {props.number}:</h1>
            <div className='my-1 p-3 bg-black dark:bg-dark5 bg-opacity-10 text-gray-600 dark:text-gray-200 rounded-lg text-sm'>
                <h1><span className={inoutStyle}>Input: </span> nums = [2,7,11,15], target = 9</h1>
                <h1><span className={inoutStyle}>Output: </span> [0,1]</h1>
                <h1><span className={inoutStyle}>Explanation: </span> Because nums[0] + nums[1] == 9, we return [0, 1].</h1>
            </div>
        </div>
    </>
  )
}

export default Example