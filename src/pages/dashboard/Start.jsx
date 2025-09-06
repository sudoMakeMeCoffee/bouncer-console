import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import StartDocsSideNav from "../../components/dashboard/start/StartDocsSideNav";
import docsData from "../../data/docsData";
import StartContent from "../../components/dashboard/start/StartContent";

const Start = () => {
  const [activeTab, setActiveTab] = useState("register");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const doc = docsData[activeTab];

  return (
    <div className="flex flex-col md:flex-row w-full relative gap-6 py-6">
      {/* Hamburger button (mobile only) */}
      <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden">
        {isSidebarOpen ? <FiX size={22} /> : <FiMenu size={22} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 z-[1000] md:z-10 left-0 h-full md:h-auto bg-[#232328] md:bg-transparent transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
        `}
      >
        <div className="p-4 md:p-0 min-w-[220px]">
          <StartDocsSideNav activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </div>

      {/* Overlay (mobile only) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <StartContent doc={doc} />
    </div>
  );
};

export default Start;
