//28/march class self work
import React, { useState } from "react";
import Home from "./userdetail";
import UserDetail from "./userdetail";

export default function User() {
  const [showHome, setShowHome] = useState(false);

  const handleClick = () => {
    setShowHome(!showHome); // Toggle the state to show/hide Home component
  };

  return (
    <div className="flex flex-col items-left justify-left border-dark ">
      <p
        onClick={handleClick}
        className="font-bold text-black hover:cursor-pointer hover:text-blue-600 underline"
      >
        User
      </p>
      {showHome && <UserDetail />} {/* Render Home only if showHome is true */}
    </div>
  );
}
