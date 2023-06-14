import React from "react";
import { Link } from "react-router-dom";

const TodaysQuestion = () => {
  return (
    <>
    <div className="flex flex-col">
    <h1 className="font-bold my-2 text-xl">Today's Question</h1>
    <div className="border border-dark1 p-3 font-semibold rounded-md bg-opacity-10 border-opacity-10 dark:text-white bg-gray-600">
      <div className="md:flex justify-between">
        <div className="my-auto p-1">
          <h1 className="text-md">
            Two Sum:{" "}
            <span className="text-xs my-auto dark:text-gray-300 text-gray-600 font-light">
              Given an array of integers nums and an integer target, return
              indices of the two numbers such that.....
            </span>
          </h1>
        </div>
        <Link
          to="/solve"
          className="bg-blue-900 hidden md:block text-white hover:bg-blue-900 hover:bg-opacity-10 bg-opacity-25 py-2 px-3 rounded-lg mx-2"
        >
          Solve
        </Link>
      </div>
      <div className="text-sm flex md:justify-end justify-between my-2">
        <p className="my-auto">Solved Today: <span className="text-xs">69 </span></p>
        <Link
          to="/solve"
          className="bg-blue-900 md:hidden text-white hover:bg-blue-900 hover:bg-opacity-10 bg-opacity-25 py-2 px-3 rounded-lg mx-2"
        >
          Solve
        </Link>
      </div>
    </div>
    </div>
    </>
  );
};

export default TodaysQuestion;
