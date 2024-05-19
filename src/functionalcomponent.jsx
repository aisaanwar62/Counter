//25/march/24 class task
import { useEffect, useState } from "react";

export default function Component() {
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
    <div>
      <nav className="bg-gray-600 p-4 border shadow-xl">
        <div className="flex items-center">
          <div className="ml-30">
            <img src="" className="w-12"></img>
          </div>
        </div>
      </nav>
      <div className="flex flex-col">
        <div className=" items-left justify-left ">
          <p>User</p>
        </div>
      </div>
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
