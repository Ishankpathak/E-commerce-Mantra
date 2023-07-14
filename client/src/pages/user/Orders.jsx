import React from "react";
import Layout from "../../components/Layout/Layout.jsx";
import UserMenu from "../../components/Layout/UserMenu.jsx";
const Orders = () => {
  return (
    <Layout title="Orders">
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9 text-center">
            <h4 className="mt-3">All Orders</h4>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
