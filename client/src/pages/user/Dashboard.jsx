import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";
const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashborad - Ecommerce App"}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9 ">
            <div className="card">
              <h5>Name:- {auth?.user?.name}</h5>
              <h5>Email:- {auth?.user?.email}</h5>
              <h5>Address:- {auth?.user?.address}</h5>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
