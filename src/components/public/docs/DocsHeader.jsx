import React from "react";

const DocsHeader = () => {
  return (
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
  );
};

export default DocsHeader;
