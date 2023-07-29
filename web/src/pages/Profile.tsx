import React from 'react'
import ProfileCard from '../components/Profile/ProfileCard';
import {motion} from "framer-motion"

const Profile = () => {
  return (
    <>
     <motion.div initial={{x: -200}} animate={{x: 0}} className="p-4 bg-no-repeat bg-fixed min-h-screen dark:bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
      <ProfileCard />
    </motion.div>
    </>
  )
}

export default Profile