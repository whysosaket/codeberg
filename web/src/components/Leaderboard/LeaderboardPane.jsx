import React from "react";
import Entry from "./Entry";

const LeaderboardPane = () => {
  return (
    <div className="md:px-24">
      <div className="bg-gray-100 p-6 bg-opacity-10 rounded-lg">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="py-3 text-center">Rank</th>
              <th className="py-3 text-center">Name</th>
              <th className="py-3 text-center">Run Time</th>
              <th className="py-3 text-center">Time Finished</th>
            </tr>
          </thead>
          <tbody>
            <Entry />
            <Entry />
            <Entry />
            <Entry />
            <Entry />
            <Entry />
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderboardPane;
