import { useLoaderData } from "react-router-dom";

import classes from "./HostVans.module.css";
import HostVanTemplate from "../UI/HostVansTemplate";
import { getHostVans } from "../../api";
import requireAuth from "../../utils";

export async function loader({ request }) {
  await requireAuth(request);
  return getHostVans();
}

export default function HostVans() {
  const vans = useLoaderData();

  const hostVansEls = vans.map((van) => (
    <HostVanTemplate van={van} key={van.id} />
  ));

  return (
    <section>
      <h1 className={classes["host-vans-title"]}>Your listed vans</h1>
      <div className={classes["host-vans-list"]}>
        <section>{hostVansEls}</section>
      </div>
    </section>
  );
}
