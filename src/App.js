import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark"); // toggle dynamically if needed
  }, []);
  return (
    <div className="bg-background dark:bg-secondary text-secondary dark:text-background">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
