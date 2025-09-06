import React from "react";
import { FaBook, FaCode, FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

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
    <>
    <Navbar/>
      <div className="bg-[#121216] min-h-screen pt-[100px] pb-[20px] px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Documentation
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore the docs to learn how to build, integrate, and scale with
            our platform. Whether you’re just getting started or deep-diving
            into the API, we’ve got you covered.
          </p>
        </div>

        {/* Sections */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
                  to={"/dashboard"}
                  className="mt-2 text-primary text-sm font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Docs;
