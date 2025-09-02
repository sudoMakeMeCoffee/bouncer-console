import React from "react";
import { Link } from "react-router-dom";

const App = ({ app }) => {
  return (
    <Link
      to=""
      className="min-h-[200px] bg-[#212126] rounded-md mt-4 p-4 flex items-center justify-center border border-gray-700"
    >
      <span className="text-sm flex items-center gap-2">{app.name}</span>
    </Link>
  );
};

export default App;
