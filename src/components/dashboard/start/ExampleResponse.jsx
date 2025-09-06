import React from "react";

const ExampleResponse = ({ response }) => (
  <div className="mb-10">
    <h2 className="text-xl font-semibold text-white mb-3">Example Response</h2>
    <div className="bg-[#1E1E2F] rounded-xl p-4 border border-gray-700 overflow-x-auto">
      <pre className="text-gray-300 text-sm">{response}</pre>
    </div>
  </div>
);

export default ExampleResponse;
