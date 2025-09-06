import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const DocsCodeExample = () => {
  return (
    <div className="max-w-4xl mx-auto mb-16">
      <h2 className="text-2xl font-bold text-white mb-4 text-center">
        Quick Example
      </h2>
      <div className="bg-[#1e1e22] rounded-xl p-6 border border-gray-700 overflow-x-auto text-sm">
        <SyntaxHighlighter
          language="javascript"
          style={vscDarkPlus}
          customStyle={{ background: "transparent", fontSize: "0.9rem" }}
        >
          {`// Install SDK
npm install bouncer-sdk

// Initialize client
import { Bouncer } from "bouncer-sdk";

const client = new Bouncer("your-api-key");

// Verify a user
client.auth.verify("user_token")
  .then(res => console.log("Verified ✅", res))
  .catch(err => console.error("Error ❌", err));`}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default DocsCodeExample;
