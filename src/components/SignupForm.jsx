import React from "react";
import { CgClose } from "react-icons/cg";
import { FcGoogle } from "react-icons/fc";
import { GrGithub } from "react-icons/gr";
import { Link } from "react-router-dom";
import useSignupStore from "../store/useSignupStore";

const SignupForm = () => {
  const closeSignup = useSignupStore((state) => state.closeSignup);
  return (
    <form
      className="bg-secondary outline outline-[0.1px] outline-gray-700 w-full max-w-[400px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[1000]
     p-8 flex flex-col gap-4 rounded-md"
    >
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-md">Signup with</h1>
        <CgClose className="cursor-pointer" onClick={closeSignup}/>
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

      <div className="flex items-center gap-2 ">
        <div className="flex-grow border-t border-gray-700"></div>
        <span className="text-xs text-gray-500">or</span>
        <div className="flex-grow border-t border-gray-700"></div>
      </div>

      <input
        type="text"
        className="text-xs font-normal bg-transparent border  border-gray-700 rounded-md px-3 py-3 focus:outline-none focus:border-primary transition-colors"
        placeholder="Username"
      />
      <input
        type="email"
        className="text-xs font-normal bg-transparent border  border-gray-700 rounded-md px-3 py-3 focus:outline-none focus:border-primary transition-colors"
        placeholder="Email"
      />

      <input
        type="password"
        className="text-xs font-normal bg-transparent border border-gray-700 rounded-md px-3 py-3 focus:outline-none focus:border-primary transition-colors"
        placeholder="Password"
      />
      <button className="text-xs bg-primary rounded-md px-3 py-3 focus:outline-none transition-colors">
        Sign Up
      </button>

      <div className="flex-grow border-t border-gray-700 mt-4"></div>

      <p className="text-xs text-center  text-gray-500">
        Already have an account?{" "}
        <Link className="text-[#00B2FF] underline" to={"/login"}>
          Log in
        </Link>
      </p>

      <p className="text-[10px] text-gray-500">
        By signing up, you agree to our{" "}
        <span className="text-[#00b3ff86] cursor-pointer">
          Terms of Service
        </span>{" "}
        and{" "}
        <span className="text-[#00b3ff86] cursor-pointer">Privacy Policy</span>.
      </p>
    </form>
  );
};

export default SignupForm;
