import { Outlet } from "react-router-dom";

import HostNavbar from "../HostNavbar";

export default function HostLayout() {
  return (
    <>
      <HostNavbar />
      <Outlet />
    </>
  );
}
