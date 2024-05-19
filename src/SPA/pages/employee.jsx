import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function EmployeeDetail() {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:4001/api/users/getemployeeverification/${id}`
        );
        setEmployee(data.employee);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching employee:", error);
        setLoading(false);
      }
    };

    fetchEmployee();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!employee) {
    return <div>Employee not found</div>;
  }

  return (
    <div>
      <h2 className="font-bold">Employee Detail</h2>
      <p>Name: {employee.name}</p>
      <p>Company: {employee.company}</p>
      <p>Email: {employee.email}</p>
      <p>
        Verify Number:{" "}
        {employee.verification_code ? employee.verification_code : "No"}
      </p>
    </div>
  );
}

export default EmployeeDetail;
