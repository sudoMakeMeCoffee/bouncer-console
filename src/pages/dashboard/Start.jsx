import React, { useState } from "react";
import StartDocsSideNav from "../../components/dashboard/StartDocsSideNav";
import ApiCodeExample from "../../components/dashboard/ApiCodeExample";
import docsData from "../../data/docsData";

const Start = () => {
  const [activeTab, setActiveTab] = useState("register");
  const doc = docsData[activeTab];

  return (
    <div className="flex items-start gap-6 w-full">
      {/* Sidebar */}
      <StartDocsSideNav activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <div className="w-full max-w-4xl">
        {/* Heading */}
        <h1 className="text-3xl font-bold pb-3 border-b border-gray-700 mb-6 text-white">
          {doc.title}
        </h1>

        {/* Description */}
        <p className="text-gray-300 mb-6">{doc.description}</p>

        {/* Endpoint Box */}
        <div className="bg-[#1E1E2F] rounded-xl shadow p-4 mb-6 border border-gray-700">
          <p className="mb-2">
            <span className="px-2 py-1 text-xs font-bold rounded bg-green-700 text-white">
              {doc.method}
            </span>
            <span className="ml-3 text-gray-200">{doc.path}</span>
          </p>
        </div>

        {/* Request Body (if any) */}
        {doc.requestBody && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-white mb-3">
              Request Body
            </h2>
            <div className="bg-[#1E1E2F] rounded-xl p-4 border border-gray-700">
              <pre className="text-gray-300 text-sm">{doc.requestBody}</pre>
            </div>
          </div>
        )}

        {/* Example usage */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            Example Usage
          </h2>
          <ApiCodeExample
            fetchCode={doc.fetchCode}
            axiosCode={doc.axiosCode}
            responseCode={doc.response}
          />
        </div>

        {/* Response */}
        {doc.response && (
          <div className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-3">
              Example Response
            </h2>
            <div className="bg-[#1E1E2F] rounded-xl p-4 border border-gray-700">
              <pre className="text-gray-300 text-sm">{doc.response}</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Start;
