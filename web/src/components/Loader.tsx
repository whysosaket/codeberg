import { motion } from "framer-motion"

export const Loader = () => (
  <div className="bg-gray-900 h-screen w-screen bg-opacity-60 absolute top-0 left-0 z-30">
  <motion.div
  animate={{
    scale: [1, 2, 2, 1, 1],
    rotate: [0, 0, 180, 180, 0],
    borderRadius: ["0%", "0%", "50%", "50%", "0%"]
  }}
  transition={{
    duration: 2,
    ease: "easeInOut",
    times: [0, 0.2, 0.5, 0.8, 1],
    repeat: Infinity,
    repeatDelay: 1
  }}
  className="h-10 w-10 mx-auto absolute top-1/2 left-1/2 bg-white z-40"
  />
  </div>
)