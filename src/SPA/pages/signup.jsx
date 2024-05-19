//5/april/24
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-hot-toast";
import { Formik } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  loginId: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  // password: Yup.string()
  //   .required("Enter Password")
  //   .min(8, "Password must be at least 8 characters")
  //   .matches(
  //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
  //     "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
  //   ),

  // ConfirmPassword: Yup.string()
  //   .oneOf([Yup.ref("password"), null], "Passwords must match") // Validation to ensure ConfirmPassword matches password
  //   .required("Confirm Password is required"),
});
// var bcrypt = require("bcryptjs");

function SignUp() {
  const navigate = useNavigate(); // Initialize useNavigate
  const handleSubmit = async (values, setSubmitting) => {
    //16/april/2024
    try {
      const { data } = await axios.post(
        "http://localhost:4001/api/users/register",
        values
      );
      console.log(data.message);
      // console.log(data);
      //json
      toast.success("user registered successfully");
      navigate("/login");
    } catch (errors) {
      console.log("error", errors.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="grid grid-cols-2 divide-x-2  h-screen ">
      <div className="px-12 pt-12 flex items-center justify-center">
        <img className="max-w-full max-h-full" src="/7675.jpg" alt="Image 3" />
      </div>

      <div className="px-12 pt-12">
        <h1 className="font-bold underline decoration-double text-center  ">
          Sign Up
        </h1>
        <Formik
          initialValues={{
            loginId: "",
            email: "",
            password: "",
            ConfirmPassword: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              handleSubmit(values, setSubmitting);
            }, 400);
            // setTimeout(() => {
            //   // localStorage.setItem("token", values);
            //   // localStorage.setItem("token", JSON.stringify(values));

            //   // alert(JSON.stringify(values, null, 2));
            //   navigate("/login");
            //   setSubmitting(false);
            // }, 400);
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
              className=" flex flex-col px-20 pt-10 space-y-4 "
            >
              <label>Full Name/loginid:</label>
              <input
                type="Text"
                name="loginId"
                placeholder="Enter your Full Name.loginid"
                className="border rounded shadow-md p-2 w-full"
                value={values.loginId}
                onChange={handleChange}
              />
              {errors.loginId && touched.loginId ? (
                <div className="text-red-400">{errors.loginId}</div>
              ) : null}

              <label>Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                className="border rounded shadow-md p-2 w-full"
                // className="border rounded shadow-md p-2 w-full"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && touched.email ? (
                <div className="text-red-400">{errors.email}</div>
              ) : null}

              <label>Password:</label>
              <input
                type="Password"
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

              <label>Confirm Password:</label>
              <input
                type="Password"
                name="ConfirmPassword"
                placeholder="Enter your Confirm Password"
                className="border rounded shadow-md p-2 w-full"
                // className="border rounded shadow-md p-2 w-full"
                value={values.ConfirmPassword}
                onChange={handleChange}
              />
              {errors.ConfirmPassword && touched.ConfirmPassword ? (
                <div className="text-red-400">{errors.ConfirmPassword}</div>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting}
                className=" border rounded bg-green-200 shadow-md text-center px-2 py-2  flex items-center justify-center w-full"
              >
                {isSubmitting ? (
                  <AiOutlineLoading3Quarters className="mr-2 animate-spin" />
                ) : null}
                {isSubmitting ? "signing up ..." : "Sign up"}
              </button>
              <p>
                Already have an account!{" "}
                <Link to="/login" className="text-blue-500">
                  {" "}
                  login
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

export default SignUp;
