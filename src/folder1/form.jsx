//29/march/24 class and home task is libray k sath work krna yup,formik
// import { useState } from "react";

// export default function Form() {

// let object = {
//   firstname: "",
//   lastname: "",
//   username: "",
//   address: "",
//   phonenumber: "",
//   email: "",
// };
// const [state, setState] = useState(object);
// const handleState = (event, field) => {
//   setState({ ...state, [field]: event.target.value });
// };

// const handleSubmit = (event) => {
//   event.preventDefault(); // Prevents the default form submission behavior

//   // Extract form data

//   // Log form data to the console
//   console.log("Form data:", state);
// };
// return (
// <div className="max-w-lg mx-auto border p-8 shadow-xl bg-gray-300 my-auto">
//   <h1 className="font-bold text-center">User form</h1>
//   <div className="flex flex-col space-y-3 items-center">
//     <form onSubmit={handleSubmit}>
//       <label>First Name:</label>
//       <input
//         placeholder="Enter your first name"
//         className="border rounded shadow-md p-2 w-full"
//         value={state.firstname}
//         onChange={(event) => {
//           handleState(event, "firstname");
//         }}
//       />
//       <label>Last Name:</label>
//       <input
//         placeholder="Enter your last name"
//         className="border rounded shadow-md p-2 w-full"
//         value={state.lastname}
//         onChange={(event) => {
//           handleState(event, "lastname");
//         }}
//       />
//       <label>User Name:</label>
//       <input
//         placeholder="Enter your user name"
//         className="border rounded shadow-md p-2 w-full"
//         value={state.username}
//         onChange={(event) => {
//           handleState(event, "username");
//         }}
//       />
//       <label>Address:</label>
//       <input
//         placeholder="Enter your address"
//         className="border rounded shadow-md p-2 w-full"
//         value={state.address}
//         onChange={(event) => {
//           handleState(event, "address");
//         }}
//       />

//       <label>PhoneNumber:</label>
//       <input
//         placeholder="Enter your phone number"
//         className="border rounded shadow-md p-2 w-full"
//         value={state.phonenumber}
//         onChange={(event) => {
//           handleState(event, "phonenumber");
//         }}
//       />
//       <label>Email:</label>
//       <input
//         placeholder="Enter your email"
//         className="border rounded shadow-md p-2 w-full"
//         value={state.email}
//         onChange={(event) => {
//           handleState(event, "email");
//         }}
//       />
//       <button
//         type="submit"
//         className="bg-blue-500 text-white p-2 rounded shadow-md hover:bg-blue-600 w-full"
//       >
//         Get Values
//       </button>
//     </form>
//   </div>
// </div>
//   );
// }
//29/march/24 home task using yup and formik libraries
import React from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  Address: Yup.string().required("Required"),
  city: Yup.string().required("enter city"),
  country: Yup.string().required("Enter country"),
  gender: Yup.string().required("select gender"),
  courses: Yup.string().required("select courses"),
});

const Basic = () => (
  <div>
    <h1 className="font-bold underline decoration-double text-center mb-3">
      My Form
    </h1>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        Address: "",
        country: "",
        city: "",
        gender: "",
        courses: "",
      }}
      // // Synchronous validation
      // validate={(values) => {
      //   const errors = {};
      //   if (!values.email) {
      //     errors.email = "Required";
      //   } else if (
      //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      //   ) {
      //     errors.email = "Invalid email address";
      //   }
      //   return errors;
      // }}

      validationSchema={SignupSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          // console.log(values);
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
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div className="flex items-center justify-between gap-2">
            <div>
              <label>Firstname:</label>
              <input
                type="firstName"
                name="firstName"
                placeholder="Enter your Firstname"
                className="border rounded shadow-md p-2 w-full"
                value={values.firstName}
                onChange={handleChange}
              />
              {errors.firstName && touched.firstName ? (
                <div className="text-red-400">{errors.firstName}</div>
              ) : null}
            </div>
            <div>
              <label>Lastname:</label>
              <input
                type="lastName"
                name="lastName"
                placeholder="Enter your Lastname"
                className="border rounded shadow-md p-2 w-full"
                // className="border rounded shadow-md p-2 w-full"
                value={values.lastName}
                onChange={handleChange}
              />
              {errors.lastName && touched.lastName ? (
                <div className="text-red-400">{errors.lastName}</div>
              ) : null}
            </div>
          </div>

          <label>Address:</label>
          <input
            type="Address"
            name="Address"
            placeholder="Enter your Address"
            className="border rounded shadow-md p-2 w-full"
            // className="border rounded shadow-md p-2 w-full"
            value={values.Address}
            onChange={handleChange}
          />
          {errors.Address && touched.Address ? (
            <div className="text-red-400">{errors.Address}</div>
          ) : null}
          <div className="flex items-center justify-between">
            <div>
              <label>Country: </label>
              <input
                type="country"
                name="country"
                placeholder="Enter your country name"
                className="border rounded shadow-md p-2 w-full"
                // className="border rounded shadow-md p-2 w-full"
                value={values.country}
                onChange={handleChange}
              />{" "}
              {errors.country && touched.country ? (
                <div className="text-red-400">{errors.country}</div>
              ) : null}
            </div>
            <div>
              <label>City:</label>
              <input
                type="city"
                name="city"
                placeholder="Enter your city name"
                className="border rounded shadow-md p-2 w-full"
                // className="border rounded shadow-md p-2 w-full"
                value={values.city}
                onChange={handleChange}
              />{" "}
              {errors.city && touched.city ? (
                <div className="text-red-400">{errors.city}</div>
              ) : null}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="row">
              <label>Gender:</label>
              <div>
                <label className="mr-5">
                  <Field type="radio" name="gender" value={values.gender} />
                  male
                </label>
                <label>
                  <Field type="radio" name="gender" value={values.gender} />
                  female
                </label>
                {errors.gender && touched.gender ? (
                  <div className="text-red-400">{errors.gender}</div>
                ) : null}
              </div>

              {/* {errors.email && touched.email && errors.email} */}
            </div>
            <div>
              {/* 
            The <select> element will also behave the same way if 
            you pass `multiple` prop to it. 
           */}
              <label>Courses:</label>
              <Field
                component="select"
                name="courses"
                placeholder="select your course"
                className="border rounded shadow-md p-2 w-full"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.courses}
                // multiple={true}
              >
                <option value="React">React</option>
                <option value="JS">JS </option>
                <option value="FULL Stack">Full Stack</option>
                <option value="OTHER">Other</option>
              </Field>
              {errors.courses && touched.courses ? (
                <div className="text-red-400">{errors.courses}</div>
              ) : null}
              {/* {errors.email && touched.email && errors.email} */}
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="border rounded bg-green-200 shadow-md text-center px-2 py-2 w-full "
          >
            Get Values
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Basic;
