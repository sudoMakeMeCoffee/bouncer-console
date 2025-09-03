import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../../Consts";
import ApiCodeExample from "../../components/dashboard/ApiCodeExample";

const AppOverview = () => {
  const { appId } = useParams();
  const [app, setApp] = useState(null);

  const fetchApp = () => {
    axios
      .get(`${API_URL}/client/app/${appId}`, { withCredentials: true })
      .then((res) => {
        setApp(res.data.data);
        console.log(res);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    fetchApp();
  }, []);

  return (
    <div className="flex flex-col gap-8">
      {/* Registration Section */}
      <div className="bg-[#1b1b1f] border border-gray-700 rounded-xl p-6 shadow-md flex flex-col md:flex-row gap-6">
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-lg font-semibold text-white mb-2">Registration</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Allow new users to create accounts for your app securely. 
            Provide their <span className="text-gray-200">email</span> and{" "}
            <span className="text-gray-200">password</span>, and our API will handle 
            authentication and user creation.  
          </p>
        </div>
        <div className="flex-1">
          <ApiCodeExample />
        </div>
      </div>

      {/* Login Section */}
      <div className="bg-[#1b1b1f] border border-gray-700 rounded-xl p-6 shadow-md flex flex-col md:flex-row-reverse gap-6">
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-lg font-semibold text-white mb-2">Login</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Authenticate existing users with their credentials. 
            The API responds with a secure session or token, which you can 
            use to protect your app’s private routes and features.  
          </p>
        </div>
        <div className="flex-1">
          <ApiCodeExample />
        </div>
      </div>
    </div>
  );
};

export default AppOverview;
