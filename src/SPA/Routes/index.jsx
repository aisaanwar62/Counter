//2/april/24 class task
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "../layout";
import Home from "../pages/home";

import AboutUs from "../pages/about-us";
import NotFound from "../pages/Notfound";
import Weather from "../pages/weather";
import SignUp from "../pages/signup";
import Login from "../pages/login";
import AuthRequired from "./authrequired";
import User from "../pages/user";
import Navbar from "../layout/navbar";
import AddUser from "../pages/adduser";
import Admin from "../pages/admin";
import Employee from "../pages/employee";
function AppRoutes() {
  // const token = localStorage.getItem("token");
  // console.log(token);
  return (
    <BrowserRouter>
      {/* {token ? ( */}
      <Routes>
        <Route element={<AuthRequired />}>
          {/* Wrap AppLayout and Navbar together */}
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/adduser" element={<AddUser />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/employee/:id" element={<Employee />} />
            <Route path="/user" element={<User />} />
            {/* <Route path="/signup" element={<SignUp />} /> */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;
