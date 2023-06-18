import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Van from "./VanComponent";
import { getVans } from "../../api";

import classes from "./VanlistPage.module.css";

export default function Vanslist() {
  const [vans, setVans] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const typeFilter = searchParams.get("type");

  const filteredArray = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getVans();
        setVans(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadVans();
  }, []);

  const vanElements = filteredArray.map((van) => {
    return (
      <Van
        key={van.id}
        id={van.id}
        imageUrl={van.imageUrl}
        name={van.name}
        price={van.price}
        type={van.type}
        searchParams={searchParams}
        typeFilter={typeFilter}
      />
    );
  });

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

  return (
    <div className={classes["van-list-container"]}>
      <h1>Explore our van options</h1>
      <div className={classes["van-list-filter-buttons"]}>
        <button
          className={`${classes["van-type"]} ${classes.simple} ${
            typeFilter === "simple" ? classes.selected : ""
          }`}
          onClick={() => handleFilterChange("type", "simple")}
        >
          Simple
        </button>
        <button
          className={`${classes["van-type"]} ${classes.luxury} ${
            typeFilter === "luxury" ? classes.selected : ""
          }`}
          onClick={() => handleFilterChange("type", "luxury")}
        >
          Luxury
        </button>
        <button
          className={`${classes["van-type"]} ${classes.rugged} ${
            typeFilter === "rugged" ? classes.selected : ""
          }`}
          onClick={() => handleFilterChange("type", "rugged")}
        >
          Rugged
        </button>
        {typeFilter && (
          <button
            className={`${classes["van-type"]} ${classes["clear-filters"]}`}
            onClick={() => handleFilterChange("type", null)}
          >
            Clear filters
          </button>
        )}
      </div>
      <div className={classes["van-list"]}>{vanElements}</div>
    </div>
  );
}
