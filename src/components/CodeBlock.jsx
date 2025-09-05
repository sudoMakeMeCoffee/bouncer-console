import React, { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import clsx from "clsx";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({ codeSnippets }) => {
  const [activeTab, setActiveTab] = useState(Object.keys(codeSnippets)[0]);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#1b1b1f] border border-gray-700 rounded-xl shadow-md overflow-hidden">
      {/* Tabs */}
      <div className="flex justify-between items-center bg-[#27272f] px-4 py-2 border-b border-gray-700">
        <div className="flex gap-4">
          {Object.keys(codeSnippets).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={clsx(
                "text-sm font-medium px-3 py-1 rounded-md transition",
                activeTab === tab
                  ? "bg-primary text-white"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-gray-400 hover:text-white transition"
        >
          {copied ? <FiCheck className="text-green-400" /> : <FiCopy />} Copy
        </button>
      </div>

      {/* Syntax Highlighted Code */}
      <SyntaxHighlighter
        language={activeTab.toLowerCase()}
        style={oneDark}
        customStyle={{ margin: 0, padding: "1.5rem", background: "#1b1b1f" }}
        showLineNumbers
      >
        {codeSnippets[activeTab]}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
