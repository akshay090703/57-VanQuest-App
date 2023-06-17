import { Outlet } from "react-router-dom";
import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";

import classes from "./Layout.module.css";

export default function Layout() {
  return (
    <div className={classes["site-wrapper"]}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
