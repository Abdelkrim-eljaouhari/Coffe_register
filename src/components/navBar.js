import React from "react";
import { NavLink } from "react-router-dom";

const NavLinStyle = { color: "#d8d0d0", fontWeight: "bold" };
export default () => (
  <nav className="navbar navbar-inverse">
    <ul className="NavLink_ul">
      <li>
        <NavLink
          to="/"
          activeClassName="selected"
          exact
          style={{ textDecoration: "none" }}
          activeStyle={NavLinStyle}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/types"
          activeClassName="selected"
          activeStyle={NavLinStyle}
          style={{ textDecoration: "none" }}
        >
          Coffe register
        </NavLink>
      </li>
    </ul>
  </nav>
);
