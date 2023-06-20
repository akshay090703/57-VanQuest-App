import { useEffect, useState } from "react";
import { Outlet, useParams, useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { getHostVans } from "../../api";
import HostVanDetailsNavbar from "../UI/HostVanDetailsNavbar";
import requireAuth from "../../utils";

import classes from "./HostVanDetail.module.css";

export async function loader({ params }) {
  await requireAuth();
  return getHostVans(params.id);
}

export default function HostVanDetail() {
  const currentVan = useLoaderData();

  return (
    <section>
      <Link to=".." relative="path" className={classes["back-button"]}>
        &larr; <span>Back to listed vans</span>
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
