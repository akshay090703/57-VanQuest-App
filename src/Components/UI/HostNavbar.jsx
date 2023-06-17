import { NavLink } from "react-router-dom";

import classes from "./HostNavbar.module.css";

export default function HostNavbar() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <nav className={classes["host-nav"]}>
      <NavLink
        to="."
        end
        style={({ isActive }) => (isActive ? activeStyles : null)}
      >
        Dashboard
      </NavLink>
      <NavLink
        to="income"
        style={({ isActive }) => (isActive ? activeStyles : null)}
      >
        Income
      </NavLink>
      <NavLink
        to="vans"
        style={({ isActive }) => (isActive ? activeStyles : null)}
      >
        Vans
      </NavLink>
      <NavLink
        to="reviews"
        style={({ isActive }) => (isActive ? activeStyles : null)}
      >
        Reviews
      </NavLink>
    </nav>
  );
}
