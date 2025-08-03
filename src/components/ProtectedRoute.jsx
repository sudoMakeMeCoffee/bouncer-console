import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import useAuthFormStore from "../store/useAuthFormStore";

const ProtectedRoute = ({ allowedRoles, requireVerified = false, children }) => {
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
    return null; // block render but don't redirect
  }

  if (requireVerified && !user?.emailVerified) {
    // optionally show a message or modal here instead of redirect
    return null;
  }

  if (allowedRoles && !allowedRoles.includes(user?.role)) {
    return null; // or show "Not Authorized" component
  }

  return children;
};

export default ProtectedRoute;
