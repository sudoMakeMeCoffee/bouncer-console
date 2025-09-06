import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthFormStore from "../store/useAuthFormStore";

const CTASection = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthFormStore();

  const startBuilding = () => {
    if (isAuthenticated) {
      navigate("/dashboard");
    } else {
      navigate("/login?origin=/dashboard");
    }
  };
  return (
    <div className="bg-primary/20 py-20 flex flex-col items-center gap-6">
      <h2 className="text-4xl font-bold text-white text-center">
        Ready to get started?
      </h2>
      <p className="text-gray-300 text-center max-w-xl">
        Sign up and start managing clients, apps, and users with full control
        and secure API keys.
      </p>
      <div className="flex gap-4">
        <button className="btn-primary btn-md" onClick={startBuilding}>Start Free</button>
        <Link
          to="/docs"
          className="text-sm text-white flex gap-2 items-center hover:text-primary transition"
        >
          Documentation
        </Link>
      </div>
    </div>
  );
};

export default CTASection;
