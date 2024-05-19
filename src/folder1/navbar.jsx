////26,27march/24 class work
import React from "react";

export default function Navbar(props) {
  return (
    <div className="flex w-full items-center justify-between p-4 bg-gray-500">
      <img src="logoipsum-332.svg" alt="Logo" />

      <div className="flex items-center justify-center gap-2">
        <ul className="flex gap-4 capitalize text-lg font-bold hover:cursor-pointer text-white ">
          <li onClick={() => props.setPage(1)}> Home </li>
          <li onClick={() => props.setPage(2)}>My Progress </li>
          <li onClick={() => props.setPage(3)}> Contact us</li>
          <li onClick={() => props.setPage(4)}>User Details</li>
          <li onClick={() => props.setPage(5)}>Form</li>
        </ul>
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold bg-blue-500 rounded-full text-center px-1">
            {props.overallCount}
          </h1>
          <img
            src="download (1).png"
            alt="Logo"
            className="w-16 h-16 rounded-full rose-400 p-2 "
          />
        </div>
      </div>
    </div>
  );
}
