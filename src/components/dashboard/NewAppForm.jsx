import React, { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { RiErrorWarningLine } from "react-icons/ri";
import { API_URL } from "../../Consts";
import axios from "axios";
import { BiLeftArrow } from "react-icons/bi";
import { FaArrowLeft } from "react-icons/fa";

const NewAppForm = () => {
  const [touched, setTouched] = useState(false);

  const [data, setData] = useState({
    appName: "",
  });

  const [errors, setErrors] = useState({
    apiError: "",
    appName: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    if (!touched) setTouched(true);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {
      apiError: "",
      appName: "",
    };
    let isValid = true;

    if (!data.appName) {
      newErrors.appName = "App Name is required.";
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
        className="bg-[#1B1B1F] outline outline-[0.1px] outline-gray-700 w-full 
     p-8 flex flex-col gap-4 rounded-md"
      >
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-md">New Application</h1>
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
            value={data.appName}
            onChange={handleInputChange}
            className="text-xs font-normal bg-transparent border border-gray-700 rounded-md px-3 py-3 focus:outline-none focus:border-primary transition-colors"
            placeholder="Application Name"
            disabled={isLoading}
          />
          <span className="text-xs text-red-500">{errors.appName}</span>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="text-xs bg-primary rounded-md px-3 py-3 focus:outline-none transition-colors disabled:opacity-50"
        >
          {isLoading ? "Creating" : "Create Application"}
        </button>
      </form>

  );
};

export default NewAppForm;
