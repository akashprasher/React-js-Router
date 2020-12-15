import React, { useState, useEffect } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import axios from "axios";

const ViewUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  // const { name, username, email, phone, website } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container mt-5">
      <div className="border shadow p-3">
        <h4 className="text-center">User ID: #{id}</h4>
        <hr />
        <ul className="list-group">
          <li className="list-group-item">Name: {user.name}</li>
          <li className="list-group-item">Username: {user.username}</li>
          <li className="list-group-item">Email: {user.email}</li>
          <li className="list-group-item">Phone: {user.phone}</li>
          <li className="list-group-item">Website: <a href={`https://${user.website}`} target="_blank">{user.website}</a></li>
        </ul>
      </div>
    </div>
  );
};

export default ViewUser;
