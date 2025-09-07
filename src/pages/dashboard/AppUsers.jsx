import React, { useState, useEffect } from "react";
import AppUsersTable from "../../components/dashboard/app-users/AppUsersTable";
import { useParams } from "react-router-dom";
import AppUsersSkeleton from "../../components/skeletons/AppUsersSkeleton";
import api from "../../api/axios";
const AppUsers = () => {
  const { appId } = useParams();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await api.get(`/client/app/user/${appId}`, {
        withCredentials: true,
      });
      console.log(res.data)
      setUsers(res.data.data);
    } catch (e) {
      console.error(e);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [appId]);

  return (
    <div className="w-full flex flex-col gap-8 py-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Users</h1>
      </div>

        {loading ? <AppUsersSkeleton /> : <AppUsersTable users={users} />}
    </div>
  );
};

export default AppUsers;
