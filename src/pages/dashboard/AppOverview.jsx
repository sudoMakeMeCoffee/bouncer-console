import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AppOverviewSkeleton from "../../components/skeletons/AppOverviewSkeleton";
import AppInfoCard from "../../components/dashboard/app-overview/AppInfoCard";
import AppHeader from "../../components/dashboard/app-overview/AppHeader";
import RecentUsersTable from "../../components/dashboard/app-overview/RecentUsersTable";
import UsersCard from "../../components/dashboard/app-overview/UsersCard";
import ApiKeyCard from "../../components/dashboard/app-overview/AppKeyCard";
import api from "../../api/axios";

const AppOverview = () => {
  const { appId } = useParams();
  const [app, setApp] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchApp = async () => {
    try {
      const res = await api.get(`/client/app/${appId}`, { withCredentials: true });
      setApp(res.data.data);
      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };

  useEffect(() => { fetchApp(); }, [appId]);

  if (loading || !app) return <AppOverviewSkeleton />;

  return (
    <div className="w-full flex flex-col gap-10">
      <AppHeader app={app} />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 py-6">
        <AppInfoCard app={app} />
        <ApiKeyCard apiKey={app.apiKey} />
        <UsersCard app={app} />
      </div>
      <RecentUsersTable app={app} />
    </div>
  );
};

export default AppOverview;
