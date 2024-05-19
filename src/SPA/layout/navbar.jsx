import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    navigate("/login");
  };
  return (
    <div>
      {" "}
      <div className="flex flex-col flex-grow">
        <div className="bg-gray-700 p-8 flex items-center justify-center relative h-20  fixed">
          <div className="absolute right-0">
            <div className="relative">
              <img
                src="/bus.avif"
                alt="Logo"
                className="w-16 h-16 rounded-full rose-400 p-2 cursor-pointer"
                onClick={toggleDropdown}
              />
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
                  <ul>
                    <li
                      onClick={handleLogout}
                      className="py-2 px-4 cursor-pointer hover:bg-gray-200"
                    >
                      Logout
                    </li>
                    {/* Add more dropdown items as needed */}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
