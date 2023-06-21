import { Suspense } from "react";
import { useSearchParams, useLoaderData, defer, Await } from "react-router-dom";
import Van from "./VanComponent";
import { getVans } from "../../api";

import classes from "./VanlistPage.module.css";

export function loader() {
  return defer({ vans: getVans() });
}

export default function Vanslist() {
  const [searchParams, setSearchParams] = useSearchParams();
  const vansPromise = useLoaderData();

  const typeFilter = searchParams.get("type");

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

  function renderVanElements(vans) {
    const filteredArray = typeFilter
      ? vans.filter((van) => van.type === typeFilter)
      : vans;

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
    return (
      <>
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
      </>
    );
  }

  return (
    <div className={classes["van-list-container"]}>
      <h1>Explore our van options</h1>
      <Suspense fallback={<h2>Loading vans...</h2>}>
        <Await resolve={vansPromise.vans}>{renderVanElements}</Await>
      </Suspense>
    </div>
  );
}
