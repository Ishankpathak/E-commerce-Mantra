import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <div title={"Admin-Menu"}>
      <div className="text-center">
        <div className="list-group admin-list">
          <h4 style={{ marginTop: "1rem", marginBottom: "1rem" }}>
            Admin Panel
          </h4>
          <NavLink
            to="/dashboard/admin/create-category"
            className="list-group-item list-group-item-action mb-1"
          >
            Create Category
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-product"
            className="list-group-item list-group-item-action mb-2"
          >
            Create Product
          </NavLink>
          <NavLink
            to="/dashboard/admin/users"
            className="list-group-item list-group-item-action mb-1"
          >
            Users
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AdminMenu;
