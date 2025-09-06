import React, { useState } from "react";
import { FiCopy, FiEye, FiEyeOff, FiCheck, FiRefreshCw } from "react-icons/fi";

const ApiKeyCard = ({ apiKey }) => {
  const [showKey, setShowKey] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRegenerateKey = () => {
    alert("API key regenerated (mock)!");
  };

  return (
    <div className="bg-[#1b1b1f] border border-gray-700 rounded-xl p-6 shadow-md flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="text-gray-400 font-semibold">API Key</span>
        <div className="flex gap-2">
          <button onClick={() => setShowKey(!showKey)} className="p-2 rounded-md hover:bg-gray-800 transition">
            {showKey ? <FiEyeOff className="text-gray-300" /> : <FiEye className="text-gray-300" />}
          </button>
          <button onClick={handleCopy} className="p-2 rounded-md hover:bg-gray-800 transition">
            {copied ? <FiCheck className="text-green-400" /> : <FiCopy className="text-gray-300" />}
          </button>
          <button onClick={handleRegenerateKey} className="p-2 rounded-md hover:bg-gray-800 transition">
            <FiRefreshCw className="text-gray-300" />
          </button>
        </div>
      </div>
      <div className="font-mono text-white text-sm select-all break-all bg-[#111113] p-3 rounded-md">
        {showKey ? apiKey : "••••••••••••••••••••••••••••••••"}
      </div>
      <p className="text-gray-500 text-xs">Keep this key safe. Do not share publicly.</p>
    </div>
  );
};

export default ApiKeyCard;
