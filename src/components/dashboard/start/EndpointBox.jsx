import React from "react";

const EndpointBox = ({ method, path }) => (
  <div className="bg-[#1E1E2F] rounded-xl shadow p-4 mb-6 border border-gray-700">
    <p className="mb-2">
      <span className="px-2 py-1 text-xs font-bold rounded bg-green-700 text-white">
        {method}
      </span>
      <span className="ml-3 text-gray-200">{path}</span>
    </p>
  </div>
);

export default EndpointBox;
