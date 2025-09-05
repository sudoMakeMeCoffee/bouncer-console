import React, { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { RiErrorWarningLine } from "react-icons/ri";
import { API_URL } from "../../Consts";
import axios from "axios";
import { BiLeftArrow } from "react-icons/bi";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const NewAppForm = () => {
  const navigate = useNavigate()
  const [touched, setTouched] = useState(false);

  const [data, setData] = useState({
    name: "",
  });

  const [errors, setErrors] = useState({
    apiError: "",
    name: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    if (!touched) setTouched(true);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {
      apiError: "",
      name: "",
    };
    let isValid = true;

    if (!data.name) {
      newErrors.name = "App Name is required.";
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
      .post(API_URL + "/client/app", data, { withCredentials: true })
      .then((res) => {
        setIsLoading(false);
        toast.success(`Your App '${data.name}' created.`)
        navigate(`/dashboard/apps/${res.data.data.id}`)
        console.log(res);
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
            name="name"
            value={data.name}
            onChange={handleInputChange}
            className="text-xs font-normal bg-transparent border border-gray-700 rounded-md px-3 py-3 focus:outline-none focus:border-primary transition-colors"
            placeholder="Application Name"
            disabled={isLoading}
          />
          <span className="text-xs text-red-500">{errors.name}</span>
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
