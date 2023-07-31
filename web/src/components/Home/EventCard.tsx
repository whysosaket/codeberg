import {motion} from "framer-motion";

const EventCard = () => {
  return (
    <>
      <motion.div
      initial={{ rotateY: 180, scale: 1.3 }}
      animate={{ rotateY: 0, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="md:w-1/4 md:mx-2 mx-8 my-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg w-full opacity-90 max-w-md p-2"
            src="https://cdn.pixabay.com/photo/2021/11/01/15/20/meta-logo-6760788_1280.png"
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Code For X
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Get a chance to join codex
          </p>
          <a
            href="#"
            className="transition transform hover:-translate-y-0.5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-400 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          >
            Register
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default EventCard;
