import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout.jsx";
import UserMenu from "../../components/Layout/UserMenu.jsx";
import { useAuth } from "../../context/auth.js";
import axios from "axios";
import Swal from "sweetalert2";

const Profile = () => {
  //context
  const [auth, setAuth] = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  //get user detail
  useEffect(() => {
    const { email, name, phone, address } = auth?.user;
    setName(name);
    setPhone(phone);
    setEmail(email);
    setAddress(address);
  }, [auth?.user]);

  //Form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(`/api/v1/auth/profile`, {
        name,
        email,
        password,
        phone,
        address,
      });
      if (data?.error) {
        Swal.fire(`${data?.error}`);
      } else {
        setAuth({ ...auth, user: data?.updatedUser });
        let ls = localStorage.getItem("auth");
        ls = JSON.parse(ls);
        ls.user = data.updatedUser;
        localStorage.setItem("auth", JSON.stringify(ls));
        Swal.fire("Profile Updated Successfully");
      }
    } catch (error) {
      console.log(error);
      Swal.fire("Error While Registering");
    }
  };
  return (
    <Layout title="Profile">
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div
              style={{
                marginBottom: "1rem",
                textAlign: "center",
                marginTop: "1rem",
              }}
            >
              <h4>Update Profile</h4>
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
                  disabled
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
                />
              </div>

              <div className="submit">
                <button type="submit" className="btn btn-primary mb-2">
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
