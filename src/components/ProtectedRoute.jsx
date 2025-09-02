import { useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import useAuthFormStore from "../store/useAuthFormStore";

const ProtectedRoute = ({ allowedRoles, requireVerified = false }) => {
  const { isAuthenticated, user, loading } = useAuthStore();
  const { openLogin } = useAuthFormStore();
  const location = useLocation();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      openLogin();
    }
  }, [loading, isAuthenticated, openLogin]);

  if (loading) {
    return null; // or <Spinner />
  }

  if (!isAuthenticated) {
    return null;
  }

  if (requireVerified && !user?.emailVerified) {
    return null;
  }

  if (allowedRoles && !allowedRoles.includes(user?.role)) {
    return null;
  }

  // ✅ render nested routes here
  return <Outlet />;
};

export default ProtectedRoute;
