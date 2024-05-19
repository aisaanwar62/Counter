import React from "react";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="flex h-screen">
      {/* Side Navigation */}
      <div className="bg-gray-700 text-white w-64 py-8 flex  justify-center overflow-y-auto ">
        <div className="px-6 space-y-10">
          <img src="/logoipsum-332.svg" alt="Logo" />
          <ul className="space-y-4">
            <li>
              <Link to="/" className="block hover:text-blue-500 mt-10">
                Home
              </Link>
            </li>{" "}
            <li>
              <Link to="/admin" className="block hover:text-blue-500 mt-10">
                Admin
              </Link>
            </li>
            <li>
              <Link to="/employee" className="block hover:text-blue-500 mt-10">
                Employee
              </Link>
            </li>
            <li>
              <Link to="/adduser" className="block hover:text-blue-500 mt-10">
                Add User
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="block hover:text-blue-500 mt-10">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/weather" className="block hover:text-blue-500 mt-10">
                Weather
              </Link>
            </li>
            <li>
              <Link to="/user" className="block hover:text-blue-500 mt-10">
                User
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
