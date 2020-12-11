import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUsers(result.data);
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <div className="table-responsive">
          <table className="table border shadow mt-5 text-center">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">User Name</th>
                <th scope="col">Email</th>
                <th scope="">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">#1</th>
                <td>Akash Prasher</td>
                <td>akashprasher</td>
                <td>akashprasher@gmail.com</td>
                <td className="btn-action text-center">
                  <Link className="btn btn-primary mr-2">View</Link>
                  <Link className="btn btn-outline-primary mr-2">Edit</Link>
                  <Link className="btn btn-danger">Delete</Link>
                </td>
              </tr>
              <tr>
                <th scope="row">#2</th>
                <td>Sumit Chahar</td>
                <td>sumitchahar</td>
                <td>sumitchahar@gmail.com</td>
                <td className="btn-action text-center">
                  <Link className="btn btn-primary mr-2">View</Link>
                  <Link className="btn btn-outline-primary mr-2">Edit</Link>
                  <Link className="btn btn-danger">Delete</Link>
                </td>
              </tr>
              {users.map((user, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td className="btn-action text-center">
                    <Link className="btn btn-primary mr-2">View</Link>
                    <Link className="btn btn-outline-primary mr-2">Edit</Link>
                    <Link className="btn btn-danger">Delete</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <p className="font-weight-bold text-center">
          Time Stamp: 01:13:34 | Date Stamp: 09-12-2020
        </p>
      </div>
      <div className="mt-5 text-center">
        <p>
          Made with ❤️ by{" "}
          <a href="https://github.com/akashprasher">Akash Prasher</a>
        </p>
      </div>
      <div className="mt-4 text-center">
        <Link className="mr-3" to="/">
          /home
        </Link>
        <Link className="mr-3" to="/about">
          /about
        </Link>
        <Link to="/contact">/contact</Link>
      </div>
    </div>
  );
};

export default Home;
