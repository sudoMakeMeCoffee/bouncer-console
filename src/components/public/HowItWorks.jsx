import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";

const HowItWorks = () => {
  const steps = [
    { title: "Create App", desc: "Add your client application in seconds." },
    { title: "Generate API Key", desc: "Securely generate and manage keys." },
    { title: "Integrate", desc: "Use our flexible APIs in your code." },
    { title: "Monitor & Manage", desc: "Track usage, users, and analytics." },
  ];

  return (
    <div className="bg-[#111113] py-20">
      <div className="wrapper flex flex-col gap-12">
        <h2 className="text-3xl font-bold text-white text-center">
          How it Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="bg-[#1b1b1f] p-6 rounded-xl border border-gray-700 shadow-md flex flex-col gap-3 hover:shadow-xl transition">
              <h3 className="text-white font-semibold">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.desc}</p>
              <BsArrowRightCircle className="text-primary mt-auto text-xl" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
