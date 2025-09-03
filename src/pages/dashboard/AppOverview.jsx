import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../../Consts";

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
  }, [])

  return (
    <div className="bg-black text-white">
      <span>API KEY : {app?.apiKey}</span>
    </div>
  );
};

export default AppOverview;
