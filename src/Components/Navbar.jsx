import { Link } from "react-router-dom";

import classes from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header>
      <Link className={classes["site-logo"]} to="/">
        #VANQUEST
      </Link>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}
