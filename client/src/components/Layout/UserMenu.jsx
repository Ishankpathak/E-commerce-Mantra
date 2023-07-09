import React from "react";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <div title={"Admin-Menu"}>
      <div className="text-center">
        <div className="list-group admin-list">
          <h4 style={{ marginTop: "1rem", marginBottom: "1rem" }}>Dashboard</h4>
          <NavLink
            to="/dashboard/user/profile"
            className="list-group-item list-group-item-action mb-1"
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/user/orders"
            className="list-group-item list-group-item-action mb-2"
          >
            Orders
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
