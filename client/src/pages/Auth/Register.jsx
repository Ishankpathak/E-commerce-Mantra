import React from "react";
import Layout from "../../components/Layout/Layout";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();
  const Swal = require("sweetalert2");

  //Form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`/api/v1/auth/register`, {
        name,
        email,
        password,
        phone,
        address,
      });
      if (res && res.data.success) {
        Swal.fire(res.data.message);
        navigate("/login");
      } else {
        Swal.fire(res.data.message);
      }
    } catch (error) {
      console.log(error);
      Swal.fire("Error While Registering");
    }
  };
  return (
    <Layout title="Register">
      <div className="register">
        <div
          style={{
            marginBottom: "1rem",
            textDecoration: "underline",
            letterSpacing: "2px",
          }}
        >
          <h1>Register</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="name"
              value={name}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={password}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={phone}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Phone"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Address"
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="submit">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
