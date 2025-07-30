import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
      <div className="w-full h-full absolute top-0 left-0 z-40">
        <div className="wrapper w-full h-full">
          <div className="w-full h-full flex flex-col items-center mt-[150px] gap-7 md:mt-0 md:justify-center">
            <h1 className="text-3xl font-bold text-center leading-tight pointer-events-none sm:text-5xl md:text-4xl lg:text-6xl">
              Authentication that <br />
              Adapts to You
            </h1>
            <p className="text-sm  text-gray-500 text-pretty max-w-[750px] text-center sm:text-sm md:text-lg lg:text-xl">
              Manage clients, their apps, and users with powerful
              authentication, API keys, and custom metadata — all from one
              flexible, developer-first platform built to scale.
            </p>

            <div className="flex items-center gap-4">
              <Link className="btn-primary btn-md">Start building</Link>
              <Link className="text-sm flex gap-2 items-center">
                Documentation <BsArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Hero;
