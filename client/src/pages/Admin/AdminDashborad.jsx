import React from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import { useAuth } from "../../context/auth";

const AdminDashborad = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Admin-dashboard"}>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9 mt-3 text-center">
            <div className="card">
              <h5>Admin Name:- {auth?.user?.name}</h5>
              <h5>Admin Email:- {auth?.user?.email}</h5>
              <h5>Admin Phone:- {auth?.user?.phone}</h5>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashborad;
