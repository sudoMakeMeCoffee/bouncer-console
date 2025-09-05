import { useEffect } from "react";
import { useLocation, Outlet, useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import useAuthFormStore from "../store/useAuthFormStore";

const ProtectedRoute = ({ allowedRoles, requireVerified = false }) => {
  const navigate = useNavigate();
  const { isAuthenticated, user, loading } = useAuthStore();
  const location = useLocation();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate(`/login?origin=${(location.pathname)}`);
  
    }
  }, [loading, isAuthenticated]);

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
