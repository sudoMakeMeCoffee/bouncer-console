import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import Signup from "./pages/Signup";
import SignupForm from "./components/SignupForm";
import useSignupStore from "./store/useSignupStore";

function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark"); // toggle dynamically if needed
  }, []);
  const { isSignupOpen, closeSignup } = useSignupStore();

  return (
    <div className="bg-background dark:bg-secondary text-secondary dark:text-background min-h-screen relative">
      <Router>
        {/* Main background content */}
        <div
          className={`transition-all duration-300 ${
            isSignupOpen ? "blur-sm pointer-events-none opacity-50" : ""
          }`}
        >
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>

        {/* Signup modal */}
        {isSignupOpen && (
          <div
            className="absolute inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={closeSignup} // <-- This listens for clicks on the backdrop
          >
            <div
              className="bg-white dark:bg-secondary p-6 rounded-lg shadow-lg"
              onClick={(e) => e.stopPropagation()} // <-- Prevents modal click from closing it
            >
              <SignupForm onClose={closeSignup} />
            </div>
          </div>
        )}
      </Router>
    </div>
  );
}

export default App;
