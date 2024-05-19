import React from "react";
import { toast } from "react-hot-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid"; // Import the uuid library
import { Formik } from "formik";
import * as Yup from "yup";
// import { useDispatch, useSelector } from "react-redux";
// import { UserReducer } from "../../store/slice";
// import { setUserDetail } from "../../store/slice/user";
import axios from "axios";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  company: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const handleSubmit = async (values, setSubmitting) => {
  // Simulating form submission delay
  try {
    const verification_code = uuidv4();
    console.log(verification_code); // Generate a UUID
    const userData = { ...values, verification_code };
    const { data } = await axios.post(
      "http://localhost:4001/api/users/addemployee",
      userData
    );
    console.log(data.message);
    // console.log(data);
    //json
    toast.success("user added successfully");
  } catch (errors) {
    console.log("error", errors.message);
  } finally {
    setSubmitting(false);
  }
};

export default function AddUser() {
  // const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center shadow-lg rounded-lg border border-black p-10 bg-[url('https://t3.ftcdn.net/jpg/04/47/19/30/360_F_447193040_0MTKO703A5olX1bC1lON7F4kHiPKEtte.jpg')]">
        <div className="px-12 pt-12">
          <h1 className="font-bold underline decoration-double text-center">
            User Form
          </h1>
          <Formik
            initialValues={{
              name: "",
              company: "",
              email: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                handleSubmit(values, setSubmitting);
              }, 400);
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
                className="flex flex-col px-20 pt-10 space-y-4"
              >
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your Name"
                  className="border rounded shadow-md p-2 w-full"
                  value={values.name}
                  onChange={handleChange}
                />
                {errors.name && touched.name && (
                  <div className="text-red-400">{errors.name}</div>
                )}
                <label>Company</label>
                <input
                  type="text"
                  name="company"
                  placeholder="Enter your company name"
                  className="border rounded shadow-md p-2 w-full"
                  value={values.company}
                  onChange={handleChange}
                />
                {errors.address && touched.company && (
                  <div className="text-red-400">{errors.company}</div>
                )}

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

                <button
                  type="submit"
                  disabled={isSubmitting}
                  // onClick={() => dispatch(setUserDetail(values))}
                  className="border rounded bg-green-200 shadow-md text-center px-2 py-2  flex items-center justify-center w-full"
                >
                  {isSubmitting ? (
                    <AiOutlineLoading3Quarters className="mr-2 animate-spin" />
                  ) : null}
                  {isSubmitting ? "Submit..." : "Submit"}
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
