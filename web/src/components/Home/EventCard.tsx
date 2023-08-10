import {motion} from "framer-motion";
import {EventI, Status} from "@/models";

const EventCard = (props: {  event: EventI }) => {
  return (
    <>
      <motion.div
      initial={{ rotateY: 180, scale: 1.3 }}
      animate={{ rotateY: 0, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="md:w-1/4 md:mx-2 mx-8 my-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-center max-h-[150px] min-h-[150px] overflow-hidden">
        <a href={props.event.link}>
          <img
            className="rounded-t-lg opacity-90 m-auto h-[150px] p-2"
            src={props.event.images[0]}
            alt=""
          />
        </a>
        </div>
        <div className="p-5 flex flex-col justify-between">
          <div className="">
          <a href="#">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {props.event.name}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {props.event.description.slice(0, 70)}...
          </p>
          </div>
          <div className="">
          <div className="flex justify-between">
          <a
            href={props.event.link}
            target="_blank"
            className="transition transform hover:-translate-y-0.5 inline-flex items-center px-3 py-2 text-xs font-medium text-center text-white bg-gray-400 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          >
            Learn More
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
          <StatusIndicator status={ props.event.status} />
          </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

const StatusIndicator = (props: {status: string})=>{
  return (
    <>
      {props.status === 'live' && (
        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
          Live
        </span>
      )}
      {props.status === 'past' && (
        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800">
          Past
        </span>
      )}
      {props.status === 'upcoming' && (
        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
          Upcoming
        </span>
      )}
    </>
  )
}

export default EventCard;
