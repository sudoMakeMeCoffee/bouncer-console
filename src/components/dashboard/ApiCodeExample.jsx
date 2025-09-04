import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const fetchExample = `
fetch("https://api.example.com/api/v1/users/register", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": "YOUR_CLIENT_APP_API_KEY" // 🔑 replace with your API key
  },
  body: JSON.stringify({
    email: "test@example.com",
    password: "12345678"
  })
})
  .then(res => {
    if (!res.ok) {
      return res.json().then(err => {
        throw new Error(err.message || "Failed to register user");
      });
    }
    return res.json();
  })
  .then(data => console.log("✅ User registered:", data))
  .catch(err => console.error("❌ Error:", err.message));

`;

const axiosExample = `
import axios from "axios";

axios.post(
  "https://api.example.com/api/v1/users/register",
  {
    email: "test@example.com",
    password: "12345678"
  },
  {
    headers: {
      "x-api-key": "YOUR_CLIENT_APP_API_KEY" // 🔑 replace with your API key
    }
  }
)
  .then(res => console.log("✅ User registered:", res.data))
  .catch(err => {
    console.error("❌ Error:", err.response?.data || err.message);
  });

`;

const ApiCodeExample = () => {
  const [activeTab, setActiveTab] = useState("fetch");

  return (
    <div className="w-full max-w-2xl min-w-[400px]  bg-[#1E1E2F] rounded-2xl shadow-lg overflow-hidden">
      {/* Tabs */}
      <div className="flex border-b border-gray-700">
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
      </div>

      {/* Code Block */}
      <div className="p-4 text-sm">
        <SyntaxHighlighter
          language="javascript"
          style={dracula}
          wrapLongLines={true}
          customStyle={{
            background: "transparent",
            fontSize: "0.85rem",
            lineHeight: "1.4",
          }}
        >
          {activeTab === "fetch" ? fetchExample : axiosExample}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default ApiCodeExample;
