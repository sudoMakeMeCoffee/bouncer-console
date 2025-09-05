import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import SignupForm from "./components/SignupForm";
import useAuthFormStore from "./store/useAuthFormStore";
import LoginForm from "./components/LoginForm";
import Verification from "./pages/Verification";
import { Toaster } from "sonner";
import InfoCard from "./components/InfoCard";
import ProtectedRoute from "./components/ProtectedRoute";
import axios from "axios";
import { API_URL } from "./Consts";
import useAuthStore from "./store/useAuthStore";
import DashboardLayout from "./layouts/DashboardLayout";
import Apps from "./pages/dashboard/Apps";
import Overview from "./pages/dashboard/Overview";
import NewApp from "./pages/dashboard/NewApp";
import AppUsers from "./pages/dashboard/AppUsers";
import AppOverview from "./pages/dashboard/AppOverview";
import Start from "./pages/dashboard/Start";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { checkAuth } from "./services/authSerive";
import AuthRoute from "./components/AuthRoute";

function App() {
  const { isSignupOpen, isLoginOpen, isInfoOpen, closeSignup, closeLogin } =
    useAuthFormStore();

  const { isAuthenticated, user, setIsAuthenticated, setUser, setLoading } =
    useAuthStore();

  useEffect(() => {
    document.documentElement.classList.add("dark");
    checkAuth(setIsAuthenticated, setUser, setLoading);
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
            <Route element={<AuthRoute />}>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </Route>

            <Route path="/verification/:type" element={<Verification />} />
            <Route element={<ProtectedRoute allowedRoles={["CLIENT"]} />}>
              <Route path="/dashboard" element={<DashboardLayout />}>
                <Route index element={<Overview />} />
                <Route path="apps" element={<Apps />} />
                <Route path="apps/:appId" element={<AppOverview />} />
                <Route path="apps/:appId/users" element={<AppUsers />} />
                <Route path="apps/:appId/start" element={<Start />} />
              </Route>
              <Route path="/dashboard/apps/new" element={<NewApp />} />
            </Route>
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
