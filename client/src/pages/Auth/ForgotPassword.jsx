import React from "react";
import Layout from "../../components/Layout/Layout";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  const Swal = require("sweetalert2");

  //Form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`/api/v1/auth/forgot-password`, {
        email,
        newPassword,
        answer,
      });
      if (res && res.data.success) {
        Swal.fire(res.data.message);
        navigate("/login");
      } else {
        Swal.fire(res.data.message);
        console.log("some error");
      }
    } catch (error) {
      console.log(error);
      Swal.fire("Error While reset Password");
    }
  };
  return (
    <Layout title="Forgot-password">
      <div className="register">
        <div
          style={{
            marginBottom: "1rem",
            textDecoration: "underline",
            letterSpacing: "2px",
          }}
        >
          <h1>Reset Password</h1>
        </div>
        <form onSubmit={handleSubmit}>
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
              value={answer}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Nick Name"
              onChange={(e) => setAnswer(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={newPassword}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter New Password"
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>

          <div className="submit">
            <button type="submit" className="btn btn-primary mt-3 ">
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
