import React from "react";

const SkeletonCard = ({ className }) => (
  <div
    className={`bg-[#1b1b1f] border border-gray-700 rounded-xl p-6 animate-pulse ${className}`}
  >
    <div className="h-6 bg-gray-700 rounded w-3/4 mb-4"></div>
    <div className="space-y-2">
      <div className="h-4 bg-gray-700 rounded w-full"></div>
      <div className="h-4 bg-gray-700 rounded w-5/6"></div>
      <div className="h-4 bg-gray-700 rounded w-2/3"></div>
    </div>
  </div>
);

const SkeletonTableRow = () => (
  <tr className="border-b border-gray-700">
    <td className="px-4 py-2">
      <div className="h-4 bg-gray-700 rounded animate-pulse w-3/4"></div>
    </td>
    <td className="px-4 py-2">
      <div className="h-4 bg-gray-700 rounded animate-pulse w-2/3"></div>
    </td>
  </tr>
);

const AppOverviewSkeleton = () => {
  return (
    <div className="w-full p-4 md:p-8 flex flex-col gap-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex flex-col gap-2">
          <div className="h-8 w-48 bg-gray-700 rounded animate-pulse"></div>
          <div className="h-4 w-64 bg-gray-700 rounded animate-pulse"></div>
        </div>
        <div className="h-10 w-32 bg-gray-700 rounded animate-pulse"></div>
      </div>

      {/* Grid cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>

      {/* Recent Users Table */}
      <div className="bg-[#1b1b1f] border border-gray-700 rounded-xl shadow-md p-6">
        <div className="h-6 w-40 bg-gray-700 rounded animate-pulse mb-4"></div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-400">
            <thead className="text-xs uppercase bg-[#111113] text-gray-500">
              <tr>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Joined</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(5)].map((_, i) => (
                <SkeletonTableRow key={i} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <div className="h-4 w-48 bg-gray-700 rounded animate-pulse"></div>
    </div>
  );
};

export default AppOverviewSkeleton;
