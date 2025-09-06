import React from "react";
import { FaQuestionCircle } from "react-icons/fa";

const faqItems = [
  { q: "Is there a free tier?", a: "Yes! You can start with our free tier and scale as you grow." },
  { q: "How do I get my API key?", a: "Once you create an account and app, your API key will be available in the dashboard." },
  { q: "Which languages are supported?", a: "Currently Java, Node.js, and Python SDKs are available." },
  { q: "Can I self-host?", a: "Yes, enterprise customers can request a self-hosted license." },
];

const DocsFAQ = () => {
  return (
    <div className="max-w-5xl mx-auto mb-16">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">
        Frequently Asked Questions
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {faqItems.map((item, idx) => (
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
  );
};

export default DocsFAQ;
