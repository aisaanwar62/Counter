//28/march class self work
import React, { useState, useEffect } from "react";
// import Myprogress from "./myprogress";
export default function UserDetail() {
  const [state, setState] = useState([]);
  const getUserData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await data.json();
    console.log(result);
    setState(result);
  };
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className=" items-right justify-right ">
        <table className="table-fixed ">
          <thead>
            <tr className="border-dark">
              <th className="border">id</th>
              <th className="border">name</th>
              <th className="border">Username</th>
              <th className="border">Email</th>
              <th className="border">Address</th>
              <th className="border">phone</th>
              <th className="border">website</th>
              <th className="border">company</th>
            </tr>
          </thead>
          <tbody>
            {state.map((user) => (
              <tr key={user.id}>
                <td className="border">{user.id}</td>
                <td className="border">{user.name}</td>
                <td className="border">{user.username}</td>
                <td className="border">{user.email}</td>
                <td className="border">
                  {user.address.street}, {user.address.city},{" "}
                  {user.address.zipcode}
                </td>
                <td className="border">{user.phone}</td>
                <td className="border">{user.website}</td>
                <td className="border">{user.company.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
