import React, { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { FcGoogle } from "react-icons/fc";
import { GrGithub } from "react-icons/gr";
import { RiErrorWarningLine } from "react-icons/ri";
import { FaRegUser, FaRegEnvelope, FaLock } from "react-icons/fa";
import useAuthFormStore from "../../store/useAuthFormStore";
import { toast } from "sonner";
import api from "../../api/axios";

const SignupForm = () => {
  const { openLogin, closeSignup } = useAuthFormStore();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({ username: "", email: "", password: "" });
  const [touched, setTouched] = useState({ username: false, email: false, password: false });
  const [errors, setErrors] = useState({ apiError: "", username: "", email: "", password: "" });

  const formValidation = () => {
    let isValid = true;
    const newErrors = { apiError: "", username: "", email: "", password: "" };

    if (touched.username) {
      if (!data.username) { newErrors.username = "Username is required."; isValid = false; }
      else if (data.username.length < 3) { newErrors.username = "Username must be at least 3 characters."; isValid = false; }
    }

    if (touched.email) {
      if (!data.email) { newErrors.email = "Email is required."; isValid = false; }
      else if (!/\S+@\S+\.\S+/.test(data.email)) { newErrors.email = "Email format is invalid."; isValid = false; }
    }

    if (touched.password) {
      if (!data.password) { newErrors.password = "Password is required."; isValid = false; }
      else if (data.password.length < 8) { newErrors.password = "Password must be at least 8 characters."; isValid = false; }
    }

    setErrors(newErrors);
    return isValid;
  };

  useEffect(() => { formValidation(); }, [data, touched]);

  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
  const handleBlur = (e) => setTouched({ ...touched, [e.target.name]: true });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ username: true, email: true, password: true });
    if (!formValidation()) return;

    setIsLoading(true);
    api.post("/auth/client/signup", data, { withCredentials: true })
      .then(() => {
        setIsLoading(false);
        closeSignup();
        openLogin();
        toast.info("A verification link has been sent to your email. Please check your inbox.");
      })
      .catch((err) => {
        setIsLoading(false);
        setErrors((prev) => ({
          ...prev,
          apiError: err?.response?.data?.error || "Something went wrong.",
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
          onClick={closeSignup}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <CgClose className="text-xl" />
        </button>

        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-white">Create Account ✨</h1>
        <p className="text-center text-gray-400 text-sm">
          Sign up to start your journey
        </p>

        {/* Social buttons */}
        {/* <div className="flex gap-4">
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
        </div> */}

        {/* Divider */}
        {/* <div className="flex items-center gap-2">
          <div className="flex-grow border-t border-gray-700"></div>
          <span className="text-xs text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-700"></div>
        </div> */}

        {/* Error */}
        {errors.apiError && (
          <div className="flex items-center gap-2 text-[#ff4d4d] bg-[#2a1c1c] rounded-lg px-4 py-3">
            <RiErrorWarningLine />
            <p className="text-sm">{errors.apiError}</p>
          </div>
        )}

        {/* Username */}
        <div className="flex flex-col gap-1">
          <div className="relative">
            <FaRegUser className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500 text-sm" />
            <input
              type="text"
              name="username"
              value={data.username}
              onChange={handleChange}
              onBlur={handleBlur}
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
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              onBlur={handleBlur}
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
              onChange={handleChange}
              onBlur={handleBlur}
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
            "Sign Up"
          )}
        </button>

        {/* Extra links */}
        <div className="flex justify-center text-xs text-gray-400 mt-4">
          <p>
            Already have an account?{" "}
            <button
              type="button"
              onClick={openLogin}
              className="text-[#00B2FF] hover:underline"
            >
              Log in
            </button>
          </p>
        </div>

        <p className="text-[10px] text-gray-500 text-center">
          By signing up, you agree to our{" "}
          <span className="text-[#00b3ff86] cursor-pointer">Terms of Service</span>{" "}
          and{" "}
          <span className="text-[#00b3ff86] cursor-pointer">Privacy Policy</span>.
        </p>
      </form>
    </div>
  );
};

export default SignupForm;
