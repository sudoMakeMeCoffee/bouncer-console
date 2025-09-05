import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import StartDocsSideNav from "../../components/dashboard/StartDocsSideNav";
import ApiCodeExample from "../../components/dashboard/ApiCodeExample";
import docsData from "../../data/docsData";

const Start = () => {
  const [activeTab, setActiveTab] = useState("register");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const doc = docsData[activeTab];

  return (
    <div className="flex flex-col md:flex-row w-full relative gap-6">
      {/* Hamburger button (mobile only) */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden"
      >
        {isSidebarOpen ? <FiX size={22} /> : <FiMenu size={22} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 z-[1000] md:z-10 left-0 h-full md:h-auto bg-[#232328] md:bg-transparent transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
        `}
      >
        <div className="p-4 md:p-0 min-w-[220px]">
          <StartDocsSideNav activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </div>

      {/* Overlay (when sidebar is open on mobile) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 max-w-4xl w-full md:px-0  md:ml-0">
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

        {/* Request Body */}
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
            <div className="bg-[#1E1E2F] rounded-xl p-4 border border-gray-700 overflow-x-auto">
              <pre className="text-gray-300 text-sm">{doc.response}</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Start;
