import React, { useEffect, useState } from "react";
import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

// import { useSelector } from "react-redux";

function User() {
  const [userRecords, setUserRecords] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    id: "",
    fullName: "",
    email: "",
    address: "",
    status: "",
  });

  const toggleModal = async () => {
    setIsModalOpen(!isModalOpen);
  };
  const [editingIndex, setEditingIndex] = useState(null);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (values, setSubmitting) => {
    console.log("Submitting form with values:", values);

    try {
      const { data } = await axios.post(
        "http://localhost:4001/api/users/adduser",
        values
      );
      console.log("Response from server:", data.message);

      toggleModal();
      console.log("Modal toggled");

      toast.success("User added successfully");
    } catch (error) {
      console.error("Error adding user:", error.message);
    } finally {
      setSubmitting(false);
      console.log("Form submission completed");
    }
  };

  useEffect(() => {
    fetchUserRecords();
  }, []);
  async function fetchUserRecords() {
    try {
      const response = await axios.get(
        "http://localhost:4001/api/users/getuser"
      );

      const getdata = response.data.user;
      setUserRecords(getdata);
    } catch (error) {
      console.error("Error fetching user records:", error);
    }
  }
  const handleEdit = (index) => {
    setEditingIndex(index);
    const record = userRecords[index];
    setFormData({
      id: record._id,
      fullName: record.fullName,
      email: record.email,
      address: record.address,
      status: record.status,
    });
  };

  const handleSave = async (index) => {
    try {
      const recordId = userRecords[index]._id;
      console.log(recordId);
      console.log(formData);
      const { data } = await axios.patch(
        `http://localhost:4001/api/users/edituser/${recordId}`,
        formData
      );
      console.log(data.message, data.user);
      setEditingIndex(null);
      setUserRecords((prevRecords) => {
        const updatedRecords = [...prevRecords];
        updatedRecords[index] = { ...formData, id: recordId };
        return updatedRecords;
      });
    } catch (error) {
      console.error("Error editing record:", error);
    }
  };
  // Function to handle record deletion
  const handleDelete = async (recordId) => {
    console.log(recordId);
    if (window.confirm("Are you sure you want to delete this record?")) {
      try {
        // Send a DELETE request to delete the record from the database
        await axios.delete(
          `http://localhost:4001/api/users/deleteuser/${recordId}`
        );
        console.log("data deleted successfully");
        // Remove the deleted record from the userRecords state
        const updatedRecords = userRecords.filter(
          (record) => record.id !== recordId
        );
        setUserRecords(updatedRecords);
      } catch (error) {
        console.error("Error deleting record:", error);
      }
    }
  };
  const AddUserSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });
  // const state = useSelector((state) => state.abc);

  return (
    <div className="">
      {/* <div className="flex flex-col ">
        <h1>{state.value.id}</h1>
        <h1>{state.value.name}</h1>
        <h1>{state.value.Address}</h1>
        <h1>{state.value.status === true ? "Active" : "Non-Active"}</h1>
      </div> */}
      {/* <!-- Modal toggle --> */}
      <div className="flex justify-end w-full mt-10">
        <button
          className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          onClick={toggleModal}
        >
          Add Data
        </button>
      </div>

      {/* <!-- Main modal --> */}
      <div
        id="authentication-modal"
        className={`${
          isModalOpen ? "fixed inset-0 flex" : "hidden"
        } items-center justify-center bg-gray-500 bg-opacity-75`}
      >
        <div className="bg-white w-full max-w-md px-4 py-6 rounded-lg shadow relative dark:bg-gray-700">
          <div className="flex justify-end p-2">
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              onClick={toggleModal}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          {/* Modal content */}
          <Formik
            initialValues={{
              fullName: "",
              email: "",
              address: "",
              status: "",
            }}
            validationSchema={AddUserSchema}
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
              <div className="bg-white rounded-lg shadow relative dark:bg-gray-700">
                <form
                  className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <label
                      htmlFor="loginId"
                      className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                    >
                      fullName
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={values.fullName}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Enter the Username/LoginID"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                    >
                      email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="address"
                      className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={values.address}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Enter your Address"
                      required
                    />
                  </div>
                  <div>
                    <label>Status</label>
                    <select
                      name="status"
                      value={values.status}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="border rounded shadow-md p-2 w-full"
                    >
                      <option value="">Select status</option>
                      <option value="active">Active</option>
                      <option value="nonactive">Non-Active</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="border rounded bg-green-200 shadow-md text-center px-2 py-2  flex items-center justify-center w-full"
                  >
                    {isSubmitting ? (
                      <AiOutlineLoading3Quarters className="mr-2 animate-spin" />
                    ) : null}
                    {isSubmitting ? "Submit..." : "Submit"}
                  </button>
                </form>
              </div>
            )}
          </Formik>
        </div>
      </div>
      {/* table */}
      {/* {editingRecord && (
        <EditModal
          record={editingRecord}
          onUpdate={handleUpdate}
          onClose={closeEditModal}
        />
      )} */}
      <div className="flex flex-col items-center justify-center mt-5 mb-5">
        {/* {console.log(state.value.name)} */}
        <h2 className="text-center font-bold">Your Data</h2>
        <table className="table-fixed border  border-black p-12">
          <thead className="border border-black">
            <tr className="border border-black bg-gray-200">
              <th className="w-1/7 border border-blue-800 px-6">fullName</th>
              <th className="w-1/7 border border-blue-800 px-20">email</th>
              <th className="w-1/7 border border-blue-800 px-20">Address</th>
              <th className="w-1/7 border border-blue-800 px-20">status</th>
              <th className="w-1/7 border border-blue-800 px-6">Action</th>
            </tr>
          </thead>
          <tbody className="border  border-black">
            {userRecords &&
              userRecords.map((record, index) => (
                <tr
                  key={record._id || index}
                  className={`border border-black ${
                    editingIndex === index
                      ? "bg-yellow-200"
                      : "hover:bg-gray-400"
                  }`}
                >
                  {/* <td className="border border-blue-200 px-4 py-2">
                    {record.id}
                  </td> */}
                  <td className="border border-blue-200 px-4 py-2">
                    {editingIndex === index ? (
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                      />
                    ) : (
                      record.fullName
                    )}
                  </td>

                  <td className="border border-blue-200 px-4 py-2">
                    {editingIndex === index ? (
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    ) : (
                      record.email
                    )}
                  </td>
                  <td className="border border-blue-200 px-4 py-2">
                    {editingIndex === index ? (
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                      />
                    ) : (
                      record.address
                    )}
                  </td>
                  <td className="border border-blue-200 px-4 py-2">
                    {editingIndex === index ? (
                      <input
                        type="text"
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                      />
                    ) : (
                      record.status
                    )}
                  </td>

                  <td className="border border-blue-200 px-4 py-2">
                    {editingIndex === index ? (
                      <button
                        onClick={() => handleSave(index)}
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded mr-2 focus:outline-none focus:ring focus:ring-blue-300"
                      >
                        Save
                      </button>
                    ) : (
                      <>
                        <button
                          onClick={() => handleEdit(index)}
                          className="bg-gray-600 hover:bg-gray-800 text-white font-bold py-1 px-2 rounded mr-2 focus:outline-none focus:ring focus:ring-blue-300"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(record._id)}
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mr-2 focus:outline-none focus:ring focus:ring-red-300"
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default User;
