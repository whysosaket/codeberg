import React from 'react'
import {motion} from "framer-motion";
import LeaderboardPane from "../components/Leaderboard/LeaderboardPane"

const Leaderboard = () => {
  return (
    <motion.div initial={{x: -300}} animate={{x: 0}} className="p-4 bg-no-repeat bg-fixed min-h-screen dark:bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
      <motion.h1 initial={{x: -1000}} animate={{x: 0}} transition={{delay: .3}} className='text-center my-4 text-4xl font-semibold '><span className='text-blue-500'>LEADER</span>BOARD</motion.h1>
      <LeaderboardPane />
  </motion.div>
  )
}

export default Leaderboard