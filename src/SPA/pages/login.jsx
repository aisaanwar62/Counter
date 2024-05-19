//5/april/24
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-hot-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import bcrypt from "bcryptjs";
// Then you can use toast.success, toast.error, etc. as needed in your code

import { Formik } from "formik";
import * as Yup from "yup";
const SignupSchema = Yup.object().shape({
  loginId: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),

  password: Yup.string().required("Enter Password"),
});

function Login() {
  const navigate = useNavigate(); // Initialize useNavigate
  const handleLogin = async (values, setSubmitting) => {
    try {
      //16/april/2024
      const { loginId, password } = values;

      const { data } = await axios.post(
        "http://localhost:4001/api/users/login",
        values
      );
      console.log(data.message);
      localStorage.setItem("Fullstacktoken", loginId);
      navigate("/home");
    } catch (error) {
      console.log("error", error.message);
      toast.error(error.response.data.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="grid grid-cols-2 divide-x-2 h-screen ">
      <div className="px-12 pt-12 flex items-center justify-center">
        <img
          className="max-w-full max-h-full"
          src="istockphoto.jpg"
          alt="Image 3"
        />
      </div>

      <div className="px-12 pt-20">
        <h1 className="font-bold underline decoration-double text-center ">
          Login
        </h1>
        <Formik
          initialValues={{
            loginId: "",

            password: "",
          }}
          validationSchema={SignupSchema}
          // const
          // handle={(values, { setSubmitting }) => {
          //   localStorage.setItem("token", values);
          //   console.log(token);
          // }}

          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              handleLogin(values, setSubmitting);
            }, 400);
            // // setTimeout(() => {
            // //   alert(JSON.stringify(values, null, 2));
            // //   // console.log(values);
            // // }, 400);
            // // Simulating login process by storing dummy token in local storage
            // localStorage.setItem("token", "Fullstack");
            // navigate("/"); // Redirect to home page after successful login

            // setSubmitting(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col px-20 pt-10 space-y-4 "
            >
              {/* <div className="flex items-center justify-between gap-2">
                <div> */}
              <label>LoginID: </label>
              <input
                type="Text"
                name="loginId"
                placeholder="Enter your LoginID"
                className="border rounded shadow-md p-2 w-full"
                value={values.loginId}
                onChange={handleChange}
              />
              {errors.loginId && touched.loginId ? (
                <div className="text-red-400">{errors.loginId}</div>
              ) : null}
              {/* </div> */}
              {/* </div> */}

              <label>Password:</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your Password"
                className="border rounded shadow-md p-2 w-full"
                // className="border rounded shadow-md p-2 w-full"
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && touched.password ? (
                <div className="text-red-400">{errors.password}</div>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting}
                className="border rounded bg-green-200 shadow-md text-center px-2 py-2  flex items-center justify-center "
              >
                {isSubmitting ? (
                  <AiOutlineLoading3Quarters className="mr-2 animate-spin" />
                ) : null}
                {isSubmitting ? "Login in process..." : "login"}
              </button>
              <p>
                Don't have an account?
                <Link to="/signup" className="text-blue-500">
                  click here
                </Link>
              </p>
            </form>
          )}
        </Formik>
      </div>

      <Outlet />
    </div>
  );
}

export default Login;
