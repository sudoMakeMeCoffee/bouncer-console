import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const ApiCodeExample = ({ jsCode, tsCode, responseCode }) => {
  const [activeTab, setActiveTab] = useState("js");

  const getCode = () => {
    switch (activeTab) {
      case "js":
        return jsCode;
      case "ts":
        return tsCode;
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
        {jsCode && (
          <button
            className={`flex-1 px-4 py-2 text-sm font-medium ${
              activeTab === "js"
                ? "bg-gray-800 text-blue-400"
                : "bg-[#1E1E2F] text-gray-400 hover:text-white"
            }`}
            onClick={() => setActiveTab("js")}
          >
            Javascript
          </button>
        )}
        {tsCode && (
          <button
            className={`flex-1 px-4 py-2 text-sm font-medium ${
              activeTab === "ts"
                ? "bg-gray-800 text-blue-400"
                : "bg-[#1E1E2F] text-gray-400 hover:text-white"
            }`}
            onClick={() => setActiveTab("ts")}
          >
            TypeScript
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
