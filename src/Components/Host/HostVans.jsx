import { useState, useEffect } from "react";

import classes from "./HostVans.module.css";
import HostVanTemplate from "../UI/HostVansTemplate";

export default function HostVans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const hostVansEls = vans.map((van) => (
    <HostVanTemplate van={van} key={van.id} />
  ));

  return (
    <section>
      <h1 className={classes["host-vans-title"]}>Your listed vans</h1>
      <div className={classes["host-vans-list"]}>
        {vans.length > 0 ? (
          <section>{hostVansEls}</section>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </section>
  );
}
