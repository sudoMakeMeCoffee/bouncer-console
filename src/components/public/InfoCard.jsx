import React, { useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";
import useAuthFormStore from "../../store/useAuthFormStore";
import axios from "axios";
import { API_URL } from "../../Consts";
import { toast } from "sonner";
import { ClipLoader } from "react-spinners";

const InfoCard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cooldown, setCooldown] = useState(false);
  const [timer, setTimer] = useState(60);

  const email = localStorage.getItem("pendingEmail");

  const resendEmail = () => {
    if (cooldown) return;

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
      .then(() => {
        setIsLoading(false);
        toast.success("Verification email sent successfully!");
        setCooldown(true);
        setTimer(60);
      })
      .catch(() => {
        setIsLoading(false);
        toast.error("Failed to send verification email. Please try again.");
      });
  };

  useEffect(() => {
    let interval;
    if (cooldown) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setCooldown(false);
            return 60;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [cooldown]);

  return (
    <div className="bg-secondary outline outline-[0.1px] outline-gray-700 w-full max-w-[400px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[1000] p-8 flex flex-col gap-4 rounded-md">
      <h1 className="flex items-center justify-center font-semibold gap-3">
        Check your inbox
        <MdEmail className="text-2xl" />
      </h1>
      <span className="text-sm text-accent text-center">
        We have sent a verification link to your email
      </span>

      <button
        className="btn-primary btn-md disabled:opacity-50"
        onClick={resendEmail}
        disabled={isLoading || cooldown}
      >
        {isLoading ? (
          <ClipLoader
            color="#ffffff"
            loading={isLoading}
            size={20}
            aria-label="Loading..."
            data-testid="loader"
          />
        ) : cooldown ? (
          `Resend in ${timer} seconds`
        ) : (
          "Resend Verification Email"
        )}
      </button>
    </div>
  );
};

export default InfoCard;
