import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
      <div className="w-full h-full absolute top-0 left-0">
        <div className="wrapper w-full h-full">
          <div className="w-full h-full flex flex-col items-center justify-center gap-7">
            <h1 className="text-6xl font-bold text-center leading-tight">
              Authentication that <br />
              Adapts to You
            </h1>
            <p className="text-lg  text-gray-500 text-pretty w-[750px] text-center">
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
