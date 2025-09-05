import axios from "axios";
import { API_URL } from "../Consts";

export const checkAuth = (setIsAuthenticated, setUser, setLoading) => {
  axios
    .post(API_URL + "/auth/client/check-auth", {}, { withCredentials: true })
    .then((res) => {
      setIsAuthenticated(true);
      setUser(res.data.data);
    })
    .catch(async (error) => {
      console.log(error);
      if (error.response?.status === 401) {
        // Try refresh token
        try {
          await axios.post(
            API_URL + "/auth/client/refresh",
            {},
            { withCredentials: true }
          );
          // Retry check-auth after refresh success
          const retryRes = await axios.post(
            API_URL + "/auth/client/check-auth",
            {},
            { withCredentials: true }
          );
          setIsAuthenticated(true);
          setUser(retryRes.data.data);
        } catch (e) {
          // Refresh failed — log out user
          console.log(e);
          setIsAuthenticated(false);
          setUser(null);
        }
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    })
    .finally(() => {
      setLoading(false);
    });
};
