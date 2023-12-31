import {useEffect} from "react";
import { setUser } from "@/features/user/UserSlice";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { fetchUser } from "@/features/user/UserAPI";
import { selectUser } from "@/features/user/UserSlice";
import { useNavigate } from "react-router-dom";

const ProfileCard = () => {

  const navigate = useNavigate();
  const user = useAppSelector(selectUser);

  const dispatch = useAppDispatch();
  const handleFetchUser = async () => {
    const user = await fetchUser();
    dispatch(setUser(user));
  };

  useEffect(() => {
    if(!user.isLogged) {
      navigate("/login");
      return;
    }
    handleFetchUser();
  }, []);


  return (
    <div>
      <div className="md:px-16">
        <div className="p-8 bg-white shadow mt-24 dark:bg-black dark:bg-opacity-5">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="grid grid-cols-3 text-center order-last md:order-first mt-5 md:mt-0">
              <div>
                <p className="font-bold text-gray-700 dark:text-white text-xl">22</p>
                <p className="text-gray-400">Friends</p>
              </div>
              <div>
                <p className="font-bold text-gray-700 dark:text-white text-xl">10</p>
                <p className="text-gray-400">Rank</p>
              </div>
              <div>
                <p className="font-bold text-gray-700 dark:text-white text-xl">89</p>
                <p className="text-gray-400">Solved</p>
              </div>
            </div>
            <div className="relative">
              <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
              <button className="text-white py-2 px-4 uppercase rounded bg-blue-500 hover:bg-blue-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                
                Connect
              </button>
              <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                
                Message
              </button>
            </div>
          </div>
          <div className="md:mt-20 mt-5 text-center border-b pb-12">
            
            <h1 className="text-4xl font-medium text-gray-700 dark:text-white">
              {user.name}
            </h1>
            <p className="font-light text-gray-600 mt-3 dark:text-white">{user.registrationNumber}</p>
            <p className="mt-8 text-gray-500">
              {user.sectionCode}, {user.batch}
            </p>
            <p className="mt-2 text-gray-500">{user.program}</p>
          </div>
          <div className="mt-12 flex flex-col justify-center">
            
            <p className="text-gray-600 text-center font-light lg:px-16">
              This is a custom piece about me and I would love to tell you more....
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
