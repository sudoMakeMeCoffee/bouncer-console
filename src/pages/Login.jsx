import React, { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { FcGoogle } from "react-icons/fc";
import { GrGithub } from "react-icons/gr";
import { RiErrorWarningLine } from "react-icons/ri";
import useAuthFormStore from "../store/useAuthFormStore";
import { API_URL } from "../Consts";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); 
  };


  const [touched, setTouched] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    apiError: "",
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    if (!touched) setTouched(true);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {
      apiError: "",
      email: "",
      password: "",
    };
    let isValid = true;

    if (!data.email) {
      newErrors.email = "Email or username is required.";
      isValid = false;
    }

    if (!data.password) {
      newErrors.password = "Password is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  useEffect(() => {
    if (touched) {
      validateForm();
    }
  }, [data, touched]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);

    axios
      .post(API_URL + "/auth/client/login", data, { withCredentials: true })
      .then((res) => {
        setIsLoading(false);
        console.log(res);
        setErrors((prev) => ({ ...prev, apiError: res.data.error }));
      })
      .catch((err) => {
        setIsLoading(false);
        setErrors((prev) => ({
          ...prev,
          apiError: err?.response?.data?.error || "An error occurred.",
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

      <h1 className="text-md">Log in with</h1>

      <div className="flex items-center gap-4">
        <button
          type="button"
          className="w-full text-xs bg-transparent border border-gray-700 rounded-md px-3 py-3 flex items-center justify-center gap-2"
        >
          <FcGoogle />
          <span className="text-gray-500">Google</span>
        </button>

        <button
          type="button"
          className="w-full text-xs bg-transparent border border-gray-700 rounded-md px-3 py-3 flex items-center justify-center gap-2"
        >
          <GrGithub />
          <span className="text-gray-500">Github</span>
        </button>
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
          name="email"
          value={data.email}
          onChange={handleInputChange}
          className="text-xs font-normal bg-transparent border border-gray-700 rounded-md px-3 py-3 focus:outline-none focus:border-primary transition-colors"
          placeholder="Email or Username"
          disabled={isLoading}
        />
        <span className="text-xs text-red-500">{errors.email}</span>
      </div>

      <div className="flex flex-col gap-2">
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleInputChange}
          className="text-xs font-normal bg-transparent border border-gray-700 rounded-md px-3 py-3 focus:outline-none focus:border-primary transition-colors"
          placeholder="Password"
          disabled={isLoading}
        />
        <span className="text-xs text-red-500">{errors.password}</span>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="text-xs bg-primary rounded-md px-3 py-3 focus:outline-none transition-colors disabled:opacity-50"
      >
        {isLoading ? "Logging in..." : "Log in"}
      </button>

      <div className="flex-grow border-t border-gray-700 mt-4"></div>

      <p className="text-xs text-center text-gray-500">
        <button type="button" className="text-[#00B2FF] underline">
          Forgot password?
        </button>
      </p>

      <p className="text-xs text-center text-gray-500">
        Don't have an account?{" "}
        <Link to={"/signup"} className="text-[#00B2FF] underline">
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default Login;
