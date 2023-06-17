import { Outlet } from "react-router-dom";

import HostNavbar from "../UI/HostNavbar";

export default function HostLayout() {
  return (
    <>
      <HostNavbar />
      <Outlet />
    </>
  );
}
