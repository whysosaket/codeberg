const listStyle = 'text-sm text-center w-1/4 md:w-2/5 bg-black dark:bg-dark5 dark:text-gray-200 bg-opacity-10 p-1 rounded-md my-2';

const Constraints = () => {
  return (
    <div className=''>
    <h1 className='font-semibold dark:text-white'>Constraints:</h1>
    <div className=''>
        <div className='list-disc flex flex-col'>
            <span className={listStyle}>2 = nums.length = 10<sup>4</sup></span>
            <span className={listStyle}>-10<sup>9</sup>  nums[i] = 10<sup>9</sup></span>
            <span className={listStyle}>-10<sup>9</sup>  target = 10<sup>9</sup></span>
        </div>
    </div>
    </div>
  )
}

export default Constraints