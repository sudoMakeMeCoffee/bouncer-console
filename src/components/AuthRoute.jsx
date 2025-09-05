import { useEffect } from "react";
import { useLocation, Outlet, useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import useAuthFormStore from "../store/useAuthFormStore";

const AuthRoute = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user, loading } = useAuthStore();
  const location = useLocation();

  useEffect(() => {
    if (!loading && isAuthenticated) {
      navigate(`/`);

    }
  }, [loading, isAuthenticated]);

  if (loading) {
    return null; // or <Spinner />
  }

  if (isAuthenticated) {
    return null;
  }

  // ✅ render nested routes here
  return <Outlet />;
};

export default AuthRoute;
