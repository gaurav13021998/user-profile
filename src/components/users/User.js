import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";


const User = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    webiste: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">First-Name : {user.firstName}</li>
        <li className="list-group-item">Last-Name : {user.lastName}</li>
        <li className="list-group-item">Gender : {user.gender}</li>
        <li className="list-group-item">Salary : {user.salary}</li>
        <li className="list-group-item">dob : {user.dateOfBirth}</li>
        <li className="list-group-item">Employment Type: {user.employmentType}</li>
      </ul>
    </div>
  );
};

export default User;
