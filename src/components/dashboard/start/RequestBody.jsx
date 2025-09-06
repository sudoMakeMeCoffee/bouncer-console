import React from "react";

const RequestBody = ({ body }) => (
  <div className="mb-6">
    <h2 className="text-xl font-semibold text-white mb-3">Request Body</h2>
    <div className="bg-[#1E1E2F] rounded-xl p-4 border border-gray-700">
      <pre className="text-gray-300 text-sm">{body}</pre>
    </div>
  </div>
);

export default RequestBody;
