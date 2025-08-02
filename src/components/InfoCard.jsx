import React, { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { FcGoogle } from "react-icons/fc";
import { GrGithub } from "react-icons/gr";
import { RiErrorWarningLine } from "react-icons/ri";
import useAuthFormStore from "../store/useAuthFormStore";
import axios from "axios";
import { API_URL } from "../Consts";
import { toast } from "sonner";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";

const InfoCard = () => {
  const { openLogin, closeSignup, closeInfo, info } = useAuthFormStore();

  const [isLoading, setIsLoading] = useState(false);
  const email = localStorage.getItem("pendingEmail");

  const resendEmail = () => {
    setIsLoading(true);
    axios
      .post(
        API_URL +
          `/auth/client/send-verification-email?email=${encodeURIComponent(
            email
          )}`,
        {},
        { withCredentials: true }
      )
      .then((res) => {
        setIsLoading(false);
        toast.success("Verification email sent successfully!");
      })
      .catch((err) => {
        setIsLoading(false);
        toast.error("Failed to send verification email. Please try again.");
      });
  };

  return (
    <div
      className="bg-secondary outline outline-[0.1px] outline-gray-700 w-full max-w-[400px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[1000]
     p-8 flex flex-col gap-4 rounded-md"
    >
      <h1 className="flex items-center justify-center font-semibold gap-3">
        Check your inbox
        <MdEmail className="text-2xl" />
      </h1>
      <span className="text-sm text-accent text-center">
        We have sent an verification link to your email
      </span>

      <button className="btn-primary btn-md" onClick={resendEmail}>
        {
          isLoading ? (
            <span className="loading loading-spinner loading-sm"></span>
          ) : (
            "Resend Verification Email"
          )
        }
      </button>
    </div>
  );
};
export default InfoCard;
