import { Link } from "react-router-dom";

import classes from "./HostNavbar.module.css";

export default function HostNavbar() {
  return (
    <nav className={classes["host-nav"]}>
      <Link to="/host">Dashboard</Link>
      <Link to="/host/income">Income</Link>
      {/* <Link to="/host/vans">Vans</Link> */}
      <Link to="/host/reviews">Reviews</Link>
    </nav>
  );
}
