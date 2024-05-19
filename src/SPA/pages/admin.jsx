import React, { useEffect, useState } from "react";
import axios from "axios";

function Admin() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);
  const fetchEmployees = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:4001/api/users/getemployee"
      );
      const getdata = data.employee;
      setEmployees(getdata); // Ensure we set an array even if response.data.employees is undefined
    } catch (error) {
      console.error("Error fetching employees:", error);
      setEmployees([]); // Set to an empty array on error to prevent undefined state
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-5 mb-5">
        <table className="table-fixed border border-black p-12">
          <thead className="border border-black">
            <tr className="border border-black bg-gray-200">
              <th className="w-1/7 border border-blue-800 px-6">Name</th>
              <th className="w-1/7 border border-blue-800 px-20">Company</th>
              <th className="w-1/7 border border-blue-800 px-20">Email</th>
              <th className="w-1/7 border border-blue-800 px-20">
                Verify Number
              </th>
            </tr>
          </thead>
          <tbody className="border border-black">
            {employees.length > 0 ? (
              employees.map((employee, index) => (
                <tr key={index} className="border border-black">
                  <td className="border border-blue-200 px-4 py-2">
                    {employee.name}
                  </td>
                  <td className="border border-blue-200 px-4 py-2">
                    {employee.company}
                  </td>
                  <td className="border border-blue-200 px-4 py-2">
                    {employee.email}
                  </td>
                  <td className="border border-blue-200 px-4 py-2">
                    {employee.verification_code
                      ? employee.verification_code
                      : "No"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  No employees found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;
