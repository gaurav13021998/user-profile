import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {

  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    salary: "", 
    gender:"", 
    dateOfBirth: "",
    website: ""
  });


  const {firstName, lastName, salary, gender, dateOfBirth, employmentType } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, user);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="First Name"
              name="firstName"
              value={firstName}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Last Name"
              name="lastName"
              value={lastName}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Your Salary"
              name="salary"
              value={salary}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <select value={gender} onChange={e => onInputChange(e)} className="form-control form-control-lg" name="gender" id="cars">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Transgender">Transgender</option>
         </select>
          </div>
          <div className="form-group">
            <input
              type="date"
              className="form-control form-control-lg"
              placeholder="DOB"
              name="dateOfBirth"
              value={dateOfBirth}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <select value={employmentType} onChange={e => onInputChange(e)} className="form-control form-control-lg" name="employmentType" id="cars">
          <option value="None">None</option>
          <option value="Salaried">Salaried</option>
          <option value="Self-employed">Self-employed</option>
         </select>
          </div>
          <button className="btn btn-warning btn-block">Update User</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
