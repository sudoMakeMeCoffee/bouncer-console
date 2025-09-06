import React from "react";

const OverviewSkeleton = () => {
  return (
    <div className="flex flex-col gap-10 w-full p-6 animate-pulse">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="h-8 w-64 bg-gray-700 rounded mb-2"></div>
          <div className="h-4 w-48 bg-gray-700 rounded"></div>
        </div>
        <div className="h-10 w-36 bg-gray-700 rounded"></div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-[#212126] p-6 rounded-xl shadow-md border border-gray-700 flex flex-col gap-4"
          >
            <div className="h-6 w-32 bg-gray-700 rounded"></div>
            <div className="h-8 w-20 bg-gray-700 rounded"></div>
            <div className="h-4 w-24 bg-gray-700 rounded mt-auto"></div>
          </div>
        ))}
      </div>

      {/* Apps Section */}
      <div>
        <div className="flex items-end justify-between mb-4">
          <div className="h-6 w-48 bg-gray-700 rounded"></div>
          <div className="h-4 w-20 bg-gray-700 rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-[#212126] p-6 rounded-xl shadow-md border border-gray-700 h-40"
            ></div>
          ))}
        </div>
      </div>

      {/* Quick Actions Panel */}
      <div className="h-12 bg-gray-700 rounded-lg w-full md:w-1/3"></div>
    </div>
  );
};

export default OverviewSkeleton;
