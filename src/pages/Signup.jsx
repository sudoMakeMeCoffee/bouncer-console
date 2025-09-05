import React, { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { FcGoogle } from "react-icons/fc";
import { GrGithub } from "react-icons/gr";
import { RiErrorWarningLine } from "react-icons/ri";
import useAuthFormStore from "../store/useAuthFormStore";
import axios from "axios";
import { API_URL } from "../Consts";
import { toast } from "sonner";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const { openInfo } = useAuthFormStore();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [touched, setTouched] = useState({
    username: false,
    email: false,
    password: false,
  });

  const [errors, setErrors] = useState({
    apiError: "",
    username: "",
    email: "",
    password: "",
  });

  const formValidation = () => {
    let isValid = true;
    const newErrors = {
      apiError: "",
      username: "",
      email: "",
      password: "",
    };

    if (touched.username) {
      if (!data.username) {
        newErrors.username = "Username is required.";
        isValid = false;
      } else if (data.username.length < 3) {
        newErrors.username = "Username must be at least 3 characters.";
        isValid = false;
      }
    }

    if (touched.email) {
      if (!data.email) {
        newErrors.email = "Email is required.";
        isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        newErrors.email = "Email format is invalid.";
        isValid = false;
      }
    }

    if (touched.password) {
      if (!data.password) {
        newErrors.password = "Password is required.";
        isValid = false;
      } else if (data.password.length < 8) {
        newErrors.password = "Password must be at least 8 characters.";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  useEffect(() => {
    formValidation();
  }, [data, touched]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({
      username: true,
      email: true,
      password: true,
    });

    if (!formValidation()) return;

    setIsLoading(true);
    axios
      .post(API_URL + "/auth/client/signup", data, { withCredentials: true })
      .then((res) => {
        setIsLoading(false);
        openInfo("Verification Link Sent","A verification link has been sent to your email. Please check your inbox.");
      })
      .catch((err) => {
        setIsLoading(false);
        setErrors((prev) => ({
          ...prev,
          apiError: err?.response?.data?.error || "Something went wrong.",
        }));
        console.error(err);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-secondary md:outline outline-[0.1px] outline-gray-700 w-full md:max-w-[400px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[1000]
     p-8 flex flex-col gap-4 rounded-md"
    >
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={handleBack}
          className="flex items-center text-xs gap-2 text-white hover:text-gray-300 w-fit"
        >
          <FaArrowLeft />
          <span>Back</span>
        </button>
      </div>
      
      <h1 className="text-md">Sign up with</h1>

      <div className="flex items-center gap-4">
        <div className="w-full text-xs bg-transparent border border-gray-700 rounded-md px-3 py-3 flex items-center justify-center gap-2 cursor-pointer">
          <FcGoogle />
          <span className="text-gray-500">Google</span>
        </div>
        <div className="w-full text-xs bg-transparent border border-gray-700 rounded-md px-3 py-3 flex items-center justify-center gap-2 cursor-pointer">
          <GrGithub />
          <span className="text-gray-500">Github</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex-grow border-t border-gray-700"></div>
        <span className="text-xs text-gray-500">or</span>
        <div className="flex-grow border-t border-gray-700"></div>
      </div>

      {errors.apiError && (
        <div className="flex items-center gap-2 text-[#ff3535] bg-[#ffabab] rounded-md px-3 py-3">
          <RiErrorWarningLine />
          <p className="text-xs">{errors.apiError}</p>
        </div>
      )}

      <div className="flex flex-col gap-2">
        <input
          type="text"
          name="username"
          value={data.username}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Username"
          className="text-xs font-normal bg-transparent border border-gray-700 rounded-md px-3 py-3 focus:outline-none focus:border-primary transition-colors"
          disabled={isLoading}
        />
        <span className="text-xs text-red-500">{errors.username}</span>
      </div>

      <div className="flex flex-col gap-2">
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Email"
          className="text-xs font-normal bg-transparent border border-gray-700 rounded-md px-3 py-3 focus:outline-none focus:border-primary transition-colors"
          disabled={isLoading}
        />
        <span className="text-xs text-red-500">{errors.email}</span>
      </div>

      <div className="flex flex-col gap-2">
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Password"
          className="text-xs font-normal bg-transparent border border-gray-700 rounded-md px-3 py-3 focus:outline-none focus:border-primary transition-colors"
          disabled={isLoading}
        />
        <span className="text-xs text-red-500">{errors.password}</span>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="text-xs bg-primary rounded-md px-3 py-3 focus:outline-none transition-colors disabled:opacity-50"
      >
        {isLoading ? "Signing Up..." : "Sign Up"}
      </button>

      <div className="flex-grow border-t border-gray-700 mt-4"></div>

      <p className="text-xs text-center text-gray-500">
        Already have an account?{" "}
        <Link to={"/login"} className="text-[#00B2FF] underline">
         Login
        </Link>
      </p>

      <p className="text-[10px] text-gray-500 text-center">
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

export default Signup;
