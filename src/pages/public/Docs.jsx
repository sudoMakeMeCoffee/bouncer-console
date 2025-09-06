import React, { useState } from "react";
import {
  FaBook,
  FaCode,
  FaRocket,
  FaCopy,
  FaCheck,
  FaQuestionCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../../components/public/Navbar";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const Docs = () => {
  const sections = [
    {
      id: "getting-started",
      title: "Getting Started",
      icon: <FaRocket className="text-xl text-primary" />,
      description:
        "Learn how to set up your first project and start building applications quickly.",
      link: "/docs/getting-started",
    },
    {
      id: "api-reference",
      title: "API Reference",
      icon: <FaCode className="text-xl text-primary" />,
      description:
        "Detailed documentation of all available endpoints, parameters, and examples.",
      link: "/docs/api",
    },
    {
      id: "guides",
      title: "Guides",
      icon: <FaBook className="text-xl text-primary" />,
      description:
        "Step-by-step tutorials for common tasks, integrations, and advanced use cases.",
      link: "/docs/guides",
    },
  ];

  return (
    
      <div className="bg-[#121216] min-h-screen pt-[100px] pb-[40px] px-6">
        {/* Header */}
        <div className="max-w-6xl mx-auto text-center mb-12">
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
            v1.0.0
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
            Documentation
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore the docs to learn how to build, integrate, and scale with
            our platform. Whether you’re just getting started or deep-diving
            into the API, we’ve got you covered.
          </p>
        </div>

        {/* Sections */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {sections.map((section) => (
            <div
              key={section.id}
              className="bg-white/5 backdrop-blur-md border border-gray-700/50 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <div className="p-6 flex flex-col gap-4">
                <div>{section.icon}</div>
                <h2 className="text-lg font-semibold text-white">
                  {section.title}
                </h2>
                <p className="text-sm text-gray-400">{section.description}</p>
                <Link
                  to={"/dashboard"} // keep it simple, no extra pages
                  className="mt-2 text-primary text-sm font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Code Example */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-white mb-4 text-center">
            Quick Example
          </h2>
          <div className="bg-[#1e1e22] rounded-xl p-6 border border-gray-700 overflow-x-auto text-sm">
            <SyntaxHighlighter
              language="javascript"
              style={vscDarkPlus}
              customStyle={{
                background: "transparent",
                fontSize: "0.9rem",
              }}
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

        {/* FAQ Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "Is there a free tier?",
                a: "Yes! You can start with our free tier and scale as you grow.",
              },
              {
                q: "How do I get my API key?",
                a: "Once you create an account and app, your API key will be available in the dashboard.",
              },
              {
                q: "Which languages are supported?",
                a: "Currently Java, Node.js, and Python SDKs are available.",
              },
              {
                q: "Can I self-host?",
                a: "Yes, enterprise customers can request a self-hosted license.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-md p-5 rounded-lg border border-gray-700/50 flex items-start gap-3"
              >
                <FaQuestionCircle className="text-primary mt-1" />
                <div>
                  <p className="text-white font-medium">{item.q}</p>
                  <p className="text-sm text-gray-400">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} Bouncer. All rights reserved. |
            <Link to="/privacy" className="ml-1 hover:text-primary">
              Privacy
            </Link>
            |
            <Link to="/terms" className="ml-1 hover:text-primary">
              Terms
            </Link>
          </p>
        </footer>
      </div>
  );
};

export default Docs;
