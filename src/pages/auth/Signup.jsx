import React, { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { GrGithub } from "react-icons/gr";
import { RiErrorWarningLine } from "react-icons/ri";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaRegEnvelope, FaLock, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { API_URL } from "../../Consts";

const Signup = () => {
  const navigate = useNavigate();

  const [touched, setTouched] = useState(false);
  const [data, setData] = useState({ username: "", email: "", password: "" });
  const [errors, setErrors] = useState({
    apiError: "",
    username: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    if (!touched) setTouched(true);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = { apiError: "", username: "", email: "", password: "" };
    let isValid = true;

    if (!data.username) {
      newErrors.username = "Username is required.";
      isValid = false;
    }
    if (!data.email) {
      newErrors.email = "Email is required.";
      isValid = false;
    }
    if (!data.password) {
      newErrors.password = "Password is required.";
      isValid = false;
    } else if (data.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  useEffect(() => {
    if (touched) validateForm();
  }, [data, touched]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const res = await axios.post(API_URL + "/auth/client/signup", data, {
        withCredentials: true,
      });
      toast.success("Account created successfully! Please log in.");
      navigate("/login");
      console.log(res);
    } catch (err) {
      setErrors((prev) => ({
        ...prev,
        apiError: err?.response?.data?.error || "An error occurred.",
      }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#1b1b1f] to-[#111113] md:px-4 overflow-hidden">
      <form
        onSubmit={handleSubmit}
        className="w-full h-full md:max-w-md md:bg-[#1e1e23] rounded-2xl md:shadow-lg p-6 md:p-8 md:border border-gray-800 space-y-6"
      >
        {/* Back button */}
        <button
          type="button"
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-gray-400 hover:text-white text-sm"
        >
          <MdKeyboardArrowLeft className="text-xl" />
          Back
        </button>

        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-white">
          Create an Account ✨
        </h1>
        <p className="text-center text-gray-400 text-sm">
          Sign up to get started with your dashboard
        </p>

        {/* Social buttons */}
        <div className="flex gap-4">
          <button
            type="button"
            className="flex-1 bg-transparent border border-gray-700 rounded-lg py-3 flex items-center justify-center gap-2 hover:bg-gray-800 transition"
          >
            <FcGoogle />
            <span className="text-gray-300 text-sm">Google</span>
          </button>
          <button
            type="button"
            className="flex-1 bg-transparent border border-gray-700 rounded-lg py-3 flex items-center justify-center gap-2 hover:bg-gray-800 transition"
          >
            <GrGithub className="text-white" />
            <span className="text-gray-300 text-sm">Github</span>
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-2">
          <div className="flex-grow border-t border-gray-700"></div>
          <span className="text-xs text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-700"></div>
        </div>

        {/* Error Alert */}
        {errors.apiError && (
          <div className="flex items-center gap-2 text-[#ff3535] bg-[#2a1c1c] rounded-lg px-4 py-3">
            <RiErrorWarningLine />
            <p className="text-sm">{errors.apiError}</p>
          </div>
        )}

        {/* Username */}
        <div className="flex flex-col gap-1">
          <div className="relative">
            <FaUser className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500 text-sm" />
            <input
              type="text"
              name="username"
              value={data.username}
              onChange={handleInputChange}
              placeholder="Username"
              disabled={isLoading}
              className="w-full bg-transparent border border-gray-700 rounded-lg pl-10 pr-3 py-3 text-sm text-white placeholder-gray-500 focus:border-primary focus:ring-1 focus:ring-primary transition"
            />
          </div>
          <span className="text-xs text-red-500">{errors.username}</span>
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <div className="relative">
            <FaRegEnvelope className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500 text-sm" />
            <input
              type="text"
              name="email"
              value={data.email}
              onChange={handleInputChange}
              placeholder="Email"
              disabled={isLoading}
              className="w-full bg-transparent border border-gray-700 rounded-lg pl-10 pr-3 py-3 text-sm text-white placeholder-gray-500 focus:border-primary focus:ring-1 focus:ring-primary transition"
            />
          </div>
          <span className="text-xs text-red-500">{errors.email}</span>
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1">
          <div className="relative">
            <FaLock className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500 text-sm" />
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={handleInputChange}
              placeholder="Password"
              disabled={isLoading}
              className="w-full bg-transparent border border-gray-700 rounded-lg pl-10 pr-3 py-3 text-sm text-white placeholder-gray-500 focus:border-primary focus:ring-1 focus:ring-primary transition"
            />
          </div>
          <span className="text-xs text-red-500">{errors.password}</span>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg py-3 text-sm font-semibold flex items-center justify-center gap-2 transition disabled:opacity-50"
        >
          {isLoading ? (
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          ) : (
            "Sign up"
          )}
        </button>

        {/* Extra Links */}
        <div className="flex justify-between text-xs text-gray-400 mt-4">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-[#00B2FF] hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
