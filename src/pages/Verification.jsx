import React from "react";
import { useParams, useLocation } from "react-router-dom";
import NotFound from "./NotFound";
import { IoWarning } from "react-icons/io5";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Verification = () => {
  const { type } = useParams();
  const query = useQuery();

  const expired = query.get("expired") === "true";
  const valid = query.get("valid") === "true";
  const verified = query.get("verified") === "true";

  if (type != "email" && type != "password") {
    return <NotFound />;
  }
  if (expired) {
    return (
      <div className="text-white flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <IoWarning /> Verification Link Expired !
        </h1>
        <button className="text-md btn-primary btn-md">Get new link</button>
      </div>
    );
  }

  if (!valid) {
    return (
      <div className="text-white flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-semibold mb-4">Verification Link Valid</h1>
        <p className="text-md">You can proceed with your action.</p>
      </div>
    );
  }

  if(valid && !expired){
    return (
      <div className="text-white flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-semibold mb-4">Verification Successful</h1>
        <p className="text-md">Your Account has been verified successfully.</p>
      </div>
    );
  }
};

export default Verification;
