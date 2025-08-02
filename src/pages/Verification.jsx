import React from "react";
import { useParams, useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Verification = () => {
  const { type } = useParams();
  const query = useQuery();

  const expired = query.get("expired") === "true";
  const valid = query.get("valid") === "true";
  const verified = query.get("verified") === "true";
  const error = query.get("error");

  const renderMessage = () => {
    if (error === "unknownType") {
      return "Invalid verification type.";
    }

    if (error === "missingClient") {
      return "Verification failed: No client associated with this token.";
    }

    if (!valid) {
      return "This verification link is invalid or has already been used.";
    }

    if (expired) {
      return "This link has expired. Please request a new one.";
    }

    if (type === "email" && verified) {
      return "🎉 Your email has been successfully verified!";
    }

    if (type === "password") {
      return "✅ Password reset token is valid. You may now change your password.";
    }

    return "✅ Verification complete.";
  };

  const title =
    type === "email"
      ? "Email Verification"
      : type === "password"
      ? "Password Reset Verification"
      : "Verification";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-xl p-8 max-w-lg w-full text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>
        <p className="text-gray-600">{renderMessage()}</p>
      </div>
    </div>
  );
};

export default Verification;
