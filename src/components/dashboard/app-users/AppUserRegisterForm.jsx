import React, { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { FcGoogle } from "react-icons/fc";
import { GrGithub } from "react-icons/gr";
import { RiErrorWarningLine } from "react-icons/ri";
import useAuthFormStore from "../../../store/useAuthFormStore";
import { useParams } from "react-router-dom";
import api from "../../../api/axios";

const AppUserRegisterForm = () => {
  const {id} = useParams();
  const { openLogin, closeSignup, openInfo } = useAuthFormStore();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  const [errors, setErrors] = useState({
    apiError: "",
    email: "",
    password: "",
  });

  const formValidation = () => {
    let isValid = true;
    const newErrors = {
      apiError: "",
      email: "",
      password: "",
    };

 

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
      email: true,
      password: true,
    });

    if (!formValidation()) return;

    setIsLoading(true);
    api
      .post("/client/app/user/register", {...data, clientAppId: id}, { withCredentials: true })
      .then((res) => {
        setIsLoading(false);
        console.log(res)
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
      className="bg-[#1B1B1F] outline outline-[0.1px] outline-gray-700 w-full max-w-[400px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[1000]
     p-8 flex flex-col gap-4 rounded-md"
    >
      <div className="flex items-center justify-between mb-4 border-b-[0.2px] border-gray-700 pb-4">
        <h1 className="text-md">Create new user</h1>
        <CgClose className="cursor-pointer" onClick={closeSignup} />
      </div>

     
        

      {errors.apiError && (
        <div className="flex items-center gap-2 text-[#ff3535] bg-[#ffabab] rounded-md px-3 py-3">
          <RiErrorWarningLine />
          <p className="text-xs">{errors.apiError}</p>
        </div>
      )}

      
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
        {isLoading ? "Creating..." : "Create user"}
      </button>
      
    </form>
  );
};

export default AppUserRegisterForm;
