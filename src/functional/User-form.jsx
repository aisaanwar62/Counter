// class task 19/march/24
// import { useState } from "react";

// export default function Component() {
//   // state = {
//   //   userName: "user name",
//   // }; in classes hooks
//   // jhooks start with use keyword

//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [address, setAddress] = useState("");
//   const [email, setEmail] = useState("");
//   const handleClick = () => {
//     // setUserName(userNmae + 1);
//     console.log("state name", name);
//     console.log("state age", age);
//     console.log("state address", address);
//     console.log("state email", email);
//   };

//   return (
//     <div className="flex flex-col items-center justify-content-center h-screen w-full">
//       {/* <h1>functional Component {userNmae}</h1> */}
//       <h1>User form</h1>
//       <div className="flex flex-col space-y-3">
//         <input
//           placeholder="name"
//           className="border rounded shadow-md p-2"
//           value={name}
//           onChange={(event) => {
//             setName(event.target.value);
//           }}
//         ></input>
//         <input
//           placeholder="age"
//           className="border rounded shadow-md p-2"
//           value={age}
//           onChange={(event) => {
//             setAge(event.target.value);
//           }}
//         ></input>
//         <input
//           placeholder="address"
//           className="border rounded shadow-md p-2"
//           value={address}
//           onChange={(event) => {
//             setAddress(event.target.value);
//           }}
//         ></input>
//         <input
//           placeholder="email"
//           className="border rounded shadow-md p-2"
//           value={email}
//           onChange={(event) => {
//             setEmail(event.target.value);
//           }}
//         ></input>
//       </div>
//       <button
//         className="bg-slate-500 py-2 px-3 mt-4 rounded shadow"
//         onClick={handleClick}
//       >
//         Update
//       </button>
//     </div>
//   );
// }

//home task 19/march/24
import { useState } from "react";

export default function Component() {
  // state = {
  //   userName: "user name",
  // }; in classes hooks
  // jhooks start with use keyword
  let object = {
    name: "",
    age: "",
    address: "",
    email: "",
  };
  const [state, setState] = useState(object);

  //20/march/24 class task
  const [errors, setErrors] = useState({});
  const handleState = (event, field) => {
    setState({ ...state, [field]: event.target.value });
  };

  const handleClick = () => {
    // setUserName(userNmae + 1);
    let errors = {};
    if (!state.name.trim()) {
      errors.name = "name is required";
    }
    if (!state.age.trim()) {
      errors.age = "Age is required";
    }
    if (!state.address.trim()) {
      errors.address = "Address is required";
    }
    if (!state.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(state.email)) {
      errors.email = "Invalid! Email address";
    }
    // Update errors state
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      console.log("object values", state);
      // Perform further actions like submitting the form
    }
  };
  const [content, setContent] = useState(null);

  //20/march/24 home task
  const manageEvent = (event) => {
    event.preventDefault();
    var id = event.target.getAttribute("number");
    if (id === "1") {
      setContent(<h1 className="bg-gray-300  font-bold">HOME</h1>);
    }
    if (id === "2") {
      setContent(<h1 className="bg-gray-300  font-bold">ABOUT</h1>);
    }
    if (id === "3") {
      setContent(<h1 className="bg-gray-300  font-bold">CONTACT US</h1>);
    }
    if (id === "4") {
      setContent(<h1 className="bg-gray-300  font-bold">SINGIN</h1>);
    }
  };

  return (
    <div>
      {/* 20/march/24 home task */}
      <nav className="bg-gray-600 p-4 border shadow-xl">
        <div className="flex items-center">
          <div className="ml-30">
            <p
              className="inline m-3 text-white cursor-pointer hover:underline hover:text-gray-800"
              number="1"
              onClick={manageEvent}
            >
              Home
            </p>

            <p
              className="inline m-3 text-white cursor-pointer  hover:underline hover:text-gray-800"
              number="2"
              onClick={manageEvent}
            >
              About
            </p>

            <h1
              className="inline m-3 text-white cursor-pointer hover:underline hover:text-gray-800"
              number="3"
              onClick={manageEvent}
            >
              Contact
            </h1>

            <p
              className="inline m-3 text-white cursor-pointer hover:underline hover:text-gray-800"
              number="4"
              onClick={manageEvent}
            >
              Signin
            </p>
          </div>
        </div>
      </nav>
      <div className="container mx-auto mt-5">{content}</div>
      <div className="flex flex-col items-center justify-center h-screen w-full ">
        {/* <h1>functional Component {userNmae}</h1> */}
        <div className="max-w-lg mx-auto border p-8 shadow-xl bg-gray-300">
          <h1 className="font-bold text-center">User form</h1>
          <div className="flex flex-col space-y-3">
            <div className="flex items-center">
              <input
                placeholder="name"
                className="border rounded shadow-md p-2"
                value={state.name}
                onChange={(event) => {
                  handleState(event, "name");
                }}
              />
              <h5 className="m-5 font-bold">Name: {state.name}</h5>
            </div>
            {errors.name && <span className="text-red-500">{errors.name}</span>}
            <div className="flex items-center">
              <input
                placeholder="age"
                className="border rounded shadow-md p-2"
                value={state.age}
                onChange={(event) => {
                  handleState(event, "age");
                }}
              />
              <h5 className="m-5 font-bold">Age: {state.age}</h5>
              {errors.age && <span className="text-red-500">{errors.age}</span>}
            </div>
            <div className="flex items-center">
              <input
                placeholder="address"
                className="border rounded shadow-md p-2"
                value={state.address}
                onChange={(event) => {
                  handleState(event, "address");
                }}
              />
              <h5 className="m-5 font-bold">Address: {state.address}</h5>
            </div>
            {errors.address && (
              <span className="text-red-500">{errors.address}</span>
            )}
            <div className="flex items-center ">
              <input
                placeholder="email"
                className="border rounded shadow-md p-2"
                value={state.email}
                onChange={(event) => {
                  handleState(event, "email");
                }}
              />
              <h5 className="m-5 font-bold">Email: {state.email}</h5>
            </div>
            {errors.email && (
              <span className="text-red-500">{errors.email}</span>
            )}
          </div>
          <button
            className="bg-slate-500 py-3 px-3 w-full mt-4 rounded shadow-xl text-center"
            name="update"
            onClick={handleClick}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
