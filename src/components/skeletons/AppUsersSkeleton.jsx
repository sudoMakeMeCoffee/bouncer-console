import React, { useState, useEffect } from "react";
import AppUsersTable from "../dashboard/app-users/AppUsersTable";
import axios from "axios";
import { API_URL } from "../../Consts";
import { useParams } from "react-router-dom";

const AppUsersSkeleton = () => {
  return (
    <div className="bg-[#1b1b1f] border border-gray-700 rounded-xl p-6 animate-pulse">
      <div className="h-6 bg-gray-700 rounded w-1/3 mb-4"></div>
      <div className="h-6 bg-gray-700 rounded w-full mb-2"></div>
      <div className="h-6 bg-gray-700 rounded w-full mb-2"></div>
      <div className="h-6 bg-gray-700 rounded w-full mb-2"></div>
    </div>
  );
};

const AppUsersPage = () => {
  const { appId } = useParams();
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${API_URL}/client/app/user/${appId}`, {
        withCredentials: true,
      });
      setUsers(res.data.data);
      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [appId]);

  if (loading) return <AppUsersSkeleton />;

  return (
    <div className="p-4 md:p-8">
      <AppUsersTable users={users} />
    </div>
  );
};

export default AppUsersPage;
