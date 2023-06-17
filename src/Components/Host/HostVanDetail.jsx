import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import HostVanDetailsNavbar from "../UI/HostVanDetailsNavbar";

import classes from "./HostVanDetail.module.css";

export default function HostVanDetail() {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = useState(null);

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  }, []);

  if (!currentVan) {
    return <h1>Loading...</h1>;
  }

  return (
    <section>
      <Link to=".." relative="path" className={classes["back-button"]}>
        &larr; <span>Back to all vans</span>
      </Link>

      <div className={classes["host-van-detail-layout-container"]}>
        <div className={classes["host-van-detail"]}>
          <img src={currentVan.imageUrl} />
          <div className={classes["host-van-detail-info-text"]}>
            <i
              className={`${classes["van-type"]} ${
                classes[`van-type-${currentVan.type}`]
              }`}
            >
              {currentVan.type}
            </i>
            <h3>{currentVan.name}</h3>
            <h4>${currentVan.price}/day</h4>
          </div>
        </div>
        <HostVanDetailsNavbar />
        <Outlet context={{ currentVan }} />
      </div>
    </section>
  );
}
