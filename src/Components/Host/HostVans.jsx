import { defer, useLoaderData, Await } from "react-router-dom";
import { Suspense } from "react";

import classes from "./HostVans.module.css";
import HostVanTemplate from "../UI/HostVansTemplate";
import { getHostVans } from "../../api";
import requireAuth from "../../utils";

export async function loader({ request }) {
  await requireAuth(request);
  return defer({ getHostVans: getHostVans() });
}

export default function HostVans() {
  const vansPromise = useLoaderData();

  return (
    <section>
      <h1 className={classes["host-vans-title"]}>Your listed vans</h1>
      <Suspense fallback={<h3>Loading listed vans...</h3>}>
        <Await resolve={vansPromise.getHostVans}>
          {(vans) => {
            const hostVansEls = vans.map((van) => (
              <HostVanTemplate van={van} key={van.id} />
            ));
            return (
              <div className={classes["host-vans-list"]}>
                <section>{hostVansEls}</section>
              </div>
            );
          }}
        </Await>
      </Suspense>
    </section>
  );
}
