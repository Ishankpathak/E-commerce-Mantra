import React from "react";
import Layout from "../../components/Layout/Layout";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { useAuth } from "../../context/auth"; // *context api

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const Swal = require("sweetalert2");

  const [auth, setAuth] = useAuth();

  //Form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`/api/v1/auth/login`, {
        email,
        password,
      });
      if (res && res.data.success) {
        Swal.fire(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        Swal.fire(res.data.message);
      }
    } catch (error) {
      console.log(error);
      Swal.fire("Error While Login");
    }
  };
  return (
    <Layout title="Login">
      <div className="register">
        <div
          style={{
            marginBottom: "1rem",
            textDecoration: "underline",
            letterSpacing: "2px",
          }}
        >
          <h1>Login</h1>
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
              value={password}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="submit">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <button
              type="button"
              className="btn btn-warning mt-3"
              onClick={() => {
                navigate("/forgot-password");
              }}
            >
              Forgot Password
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
