import React from "react";
import { CiLogin, CiLogout } from "react-icons/ci";
import { HiOutlineUserAdd } from "react-icons/hi";
import { MdOutlineSecurity } from "react-icons/md";
import clsx from "clsx";
import { LuLogIn, LuLogOut, LuShieldCheck, LuUserPlus } from "react-icons/lu";

const StartDocsSideNav = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { key: "register", label: "Registration", icon: <LuUserPlus /> },
    { key: "login", label: "Login", icon: <LuLogIn /> },
    { key: "logout", label: "Logout", icon: <LuLogOut /> },
    { key: "auth", label: "Check Authentication", icon: <LuShieldCheck /> },
  ];

  return (
    <div className="min-w-[200px] flex flex-col gap-2">
      {navItems.map((item) => (
        <button
          key={item.key}
          onClick={() => setActiveTab(item.key)}
          className={clsx(
            "flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors",
            activeTab === item.key
              ? "bg-[#33333E] text-white"
              : "text-gray-400 hover:bg-[#2A2A35] hover:text-white"
          )}
        >
          {item.icon}
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default StartDocsSideNav;
