import React from "react";

const AppsSkeleton = () => {
  return (
    <div className="w-full flex flex-col gap-8 p-6 animate-pulse">
      {/* Header */}
      <div className="h-8 w-64 bg-gray-700 rounded mb-4"></div>

      {/* Apps Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-[#212126] p-6 rounded-xl border border-gray-700 shadow-md flex flex-col gap-4"
          >
            <div className="h-6 w-32 bg-gray-700 rounded"></div>
            <div className="h-4 w-24 bg-gray-700 rounded"></div>
            <div className="h-4 w-20 bg-gray-700 rounded"></div>
            <div className="h-4 w-16 bg-gray-700 rounded mt-auto"></div>
          </div>
        ))}

        {/* New Application Skeleton */}
        <div className="relative bg-[#212126] rounded-xl p-6 border border-gray-700 border-dashed shadow-md flex items-center justify-center">
          <div className="h-6 w-32 bg-gray-700 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default AppsSkeleton;
