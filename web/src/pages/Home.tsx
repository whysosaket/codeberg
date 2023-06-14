import TodaysQuestion from "../components/Home/TodaysQuestion";
import { motion } from "framer-motion";
import UpcomingEvents from "../components/Home/UpcomingEvents";

const Home = () => {
  return (
    <>
      <div className="p-2 bg-no-repeat bg-fixed dark:bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center font-semibold text-5xl md:text-7xl lg:text-9xl my-4 text-blue-500"
        >
          CODE<span className="text-white bg-blue-500 dark:bg-transparent">BERG</span>
        </motion.h1>
        <div className="flex justify-center py-2">
          <TodaysQuestion />
        </div>
        <div className="flex justify-center py-2">
          <UpcomingEvents />
        </div>
      </div>
    </>
  );
};

export default Home;
