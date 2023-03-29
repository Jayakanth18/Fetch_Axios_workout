import React from "react";
import { Outlet, NavLink } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <NavLink to="fetch"> Fetch </NavLink>
      <hr />
      <NavLink to="asyncfetch"> Async Await Fetch </NavLink>
      <hr />
      <NavLink to="axios"> Axios </NavLink>
      <hr />
      <Outlet />
    </div>
  );
}

export default RootLayout;
