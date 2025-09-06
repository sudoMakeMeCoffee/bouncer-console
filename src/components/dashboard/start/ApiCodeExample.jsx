import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const ApiCodeExample = ({ fetchCode, axiosCode, responseCode }) => {
  const [activeTab, setActiveTab] = useState("fetch");

  const getCode = () => {
    switch (activeTab) {
      case "fetch":
        return fetchCode;
      case "axios":
        return axiosCode;
      case "response":
        return responseCode;
      default:
        return "";
    }
  };

  return (
    <div className="w-full bg-[#1E1E2F] rounded-2xl shadow-lg overflow-hidden">
      {/* Tabs */}
      <div className="flex border-b border-gray-700">
        {fetchCode && (
          <button
            className={`flex-1 px-4 py-2 text-sm font-medium ${
              activeTab === "fetch"
                ? "bg-gray-800 text-blue-400"
                : "bg-[#1E1E2F] text-gray-400 hover:text-white"
            }`}
            onClick={() => setActiveTab("fetch")}
          >
            Fetch
          </button>
        )}
        {axiosCode && (
          <button
            className={`flex-1 px-4 py-2 text-sm font-medium ${
              activeTab === "axios"
                ? "bg-gray-800 text-blue-400"
                : "bg-[#1E1E2F] text-gray-400 hover:text-white"
            }`}
            onClick={() => setActiveTab("axios")}
          >
            Axios
          </button>
        )}
        {responseCode && (
          <button
            className={`flex-1 px-4 py-2 text-sm font-medium ${
              activeTab === "response"
                ? "bg-gray-800 text-blue-400"
                : "bg-[#1E1E2F] text-gray-400 hover:text-white"
            }`}
            onClick={() => setActiveTab("response")}
          >
            Response
          </button>
        )}
      </div>

      {/* Code Block */}
      <div className="p-4 text-sm">
        <SyntaxHighlighter
          language={activeTab === "response" ? "json" : "javascript"}
          style={dracula}
          wrapLongLines={true}
          customStyle={{
            background: "transparent",
            fontSize: "0.85rem",
            lineHeight: "1.4",
          }}
        >
          {getCode()}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default ApiCodeExample;
