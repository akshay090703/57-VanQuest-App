import { useEffect, useState } from "react";
import Van from "./VanComponent";

import classes from "./VanlistPage.module.css";

export default function Vanslist() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vanElements = vans.map((van) => {
    return (
      <Van
        key={van.id}
        id={van.id}
        imageUrl={van.imageUrl}
        name={van.name}
        price={van.price}
        type={van.type}
      />
    );
  });

  return (
    <div className={classes["van-list-container"]}>
      <h1>Explore our van options</h1>
      <div className={classes["van-list"]}>{vanElements}</div>
    </div>
  );
}
