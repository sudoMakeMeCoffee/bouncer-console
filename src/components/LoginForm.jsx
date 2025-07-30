import React from "react";
import { CgClose } from "react-icons/cg";
import { FcGoogle } from "react-icons/fc";
import { GrGithub } from "react-icons/gr";
import useAuthFormStore from "../store/useAuthFormStore";
import { RiErrorWarningLine } from "react-icons/ri";

const LoginForm = () => {
  const { openSignup, closeLogin } = useAuthFormStore();

  return (
    <form
      className="bg-secondary outline outline-[0.1px] outline-gray-700 w-full max-w-[400px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[1000]
     p-8 flex flex-col gap-4 rounded-md"
    >
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-md">Login with</h1>
        <CgClose className="cursor-pointer" onClick={closeLogin} />
      </div>

      
      <div className="flex items-center gap-4">
        <div className="w-full text-xs bg-transparent border  border-gray-700 rounded-md px-3 py-3 flex items-center justify-center gap-2 cursor-pointer">
          <FcGoogle />
          <span className="text-gray-500">Google</span>
        </div>

        <div className="w-full text-xs bg-transparent border  border-gray-700 rounded-md px-3 py-3 flex items-center justify-center gap-2 cursor-pointer">
          <GrGithub />
          <span className="text-gray-500">Github</span>
        </div>
      </div>

      <div className="flex items-center gap-2 text-[#ff3535] bg-[#ffabab] rounded-md px-3 py-3">
        <RiErrorWarningLine />
        <p className="text-xs">Invalid Credentials</p>
      </div>
      <input
        type="text"
        className="text-xs font-normal bg-transparent border  border-gray-700 rounded-md px-3 py-3 focus:outline-none focus:border-primary transition-colors"
        placeholder="Email or Username"
      />
      <input
        type="password"
        className="text-xs font-normal bg-transparent border border-gray-700 rounded-md px-3 py-3 focus:outline-none focus:border-primary transition-colors"
        placeholder="Password"
      />

      <button className="text-xs bg-primary rounded-md px-3 py-3 focus:outline-none transition-colors">
        Log in
      </button>

      <div className="flex-grow border-t border-gray-700 mt-4"></div>

      <p className="text-xs text-center  text-gray-500">
        <button className="text-[#00B2FF] underline">Forgot password?</button>
      </p>

      <p className="text-xs text-center  text-gray-500">
        Don't have an account?{" "}
        <button
          className="text-[#00B2FF] underline"
          onClick={() => openSignup()}
        >
          Sign up
        </button>
      </p>
    </form>
  );
};

export default LoginForm;
