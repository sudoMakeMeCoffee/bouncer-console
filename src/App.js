import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import Signup from "./pages/Signup";
import SignupForm from "./components/SignupForm";
import useAuthFormStore from "./store/useAuthFormStore";
import LoginForm from "./components/LoginForm";
import Verification from "./pages/Verification";
import { Toaster } from "sonner";
import InfoCard from "./components/InfoCard";
import Dashboard from "./pages/client/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import axios from "axios";
import { API_URL } from "./Consts";
import useAuthStore from "./store/useAuthStore";

function App() {
  const {
    openSignup,
    openLogin,
    isSignupOpen,
    isLoginOpen,
    isInfoOpen,
    closeSignup,
    closeLogin,
    closeInfo,
  } = useAuthFormStore();

  const { isAuthenticated, user, setIsAuthenticated, setUser, setLoading } =
    useAuthStore();

  useEffect(() => {
    document.documentElement.classList.add("dark");
    axios
      .post(API_URL + "/auth/client/check-auth", {}, { withCredentials: true })
      .then((res) => {
        setIsAuthenticated(true);
        setUser(res.data.data);
      })
      .catch(async (error) => {
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
          } catch {
            // Refresh failed — log out user
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
  }, []);

  useEffect(() => {
    if (isSignupOpen || isLoginOpen || isInfoOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.overflow = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }, [isSignupOpen, isLoginOpen, isInfoOpen]);

  return (
    <div className="bg-background dark:bg-secondary text-secondary dark:text-background min-h-screen relative">
      <Router>
        <div
          className={`transition-all duration-300 ${
            isSignupOpen ? "blur-sm pointer-events-none opacity-50" : ""
          }`}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/verification/:type" element={<Verification />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute allowedRoles={["CLIENT"]}>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Toaster richColors position="top-right" />
        </div>

        {isSignupOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-md"
            onClick={closeSignup}
          >
            <div
              className="bg-white dark:bg-secondary text-black dark:text-white p-6 rounded-lg w-full max-w-md mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <SignupForm />
            </div>
          </div>
        )}

        {isLoginOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-md"
            onClick={closeLogin}
          >
            <div
              className="bg-white dark:bg-secondary text-black dark:text-white p-6 rounded-lg w-full max-w-md mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <LoginForm />
            </div>
          </div>
        )}

        {isInfoOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-md"
            onClick={closeLogin}
          >
            <div
              className="bg-white dark:bg-secondary text-black dark:text-white p-6 rounded-lg w-full max-w-md mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <InfoCard />
            </div>
          </div>
        )}
      </Router>
    </div>
  );
}

export default App;
