import React, { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { FcGoogle } from "react-icons/fc";
import { GrGithub } from "react-icons/gr";
import { RiErrorWarningLine } from "react-icons/ri";
import { FaRegEnvelope, FaLock } from "react-icons/fa";
import useAuthFormStore from "../../store/useAuthFormStore";
import { API_URL } from "../../Consts";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { checkAuth } from "../../services/authSerive";
import useAuthStore from "../../store/useAuthStore";

const LoginForm = () => {
  const { openSignup, closeLogin } = useAuthFormStore();
  const navigate = useNavigate();
  const { setIsAuthenticated, setUser, setLoading } = useAuthStore();

  const [touched, setTouched] = useState(false);
  const [data, setData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ apiError: "", email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    if (!touched) setTouched(true);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = { apiError: "", email: "", password: "" };
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
    if (touched) validateForm();
  }, [data, touched]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    axios
      .post(API_URL + "/auth/client/login", data, { withCredentials: true })
      .then((res) => {
        setIsLoading(false);
        closeLogin();
        toast.success("Logged in successfully!");
        checkAuth(setIsAuthenticated, setUser, setLoading);
        navigate("/dashboard");
      })
      .catch((err) => {
        setIsLoading(false);
        setErrors((prev) => ({
          ...prev,
          apiError: err?.response?.data?.error || "An error occurred.",
        }));
      });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-[1000]">
      <form
        onSubmit={handleSubmit}
        className="w-full h-full md:h-auto md:max-w-md  bg-[#1e1e23] md:rounded-2xl shadow-xl p-6 md:p-8 border border-gray-800 space-y-6 relative"
      >
        {/* Close button */}
        <button
          type="button"
          onClick={closeLogin}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <CgClose className="text-xl" />
        </button>

        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-white">Welcome Back 👋</h1>
        <p className="text-center text-gray-400 text-sm">
          Log in to continue to your dashboard
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
          <div className="flex items-center gap-2 text-[#ff4d4d] bg-[#2a1c1c] rounded-lg px-4 py-3">
            <RiErrorWarningLine />
            <p className="text-sm">{errors.apiError}</p>
          </div>
        )}

        {/* Email */}
        <div className="flex flex-col gap-1">
          <div className="relative">
            <FaRegEnvelope className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500 text-sm" />
            <input
              type="text"
              name="email"
              value={data.email}
              onChange={handleInputChange}
              placeholder="Email or Username"
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
            "Log in"
          )}
        </button>

        {/* Extra Links */}
        <div className="flex justify-between text-xs text-gray-400 mt-4">
          <button type="button" className="hover:underline text-[#00B2FF]">
            Forgot password?
          </button>
          <p>
            Don’t have an account?{" "}
            <button
              type="button"
              onClick={openSignup}
              className="text-[#00B2FF] hover:underline"
            >
              Sign up
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
