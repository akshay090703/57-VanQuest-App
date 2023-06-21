import { Suspense } from "react";
import { Outlet, useLoaderData, defer, Await } from "react-router-dom";
import { Link } from "react-router-dom";
import { getVan } from "../../api";
import HostVanDetailsNavbar from "../UI/HostVanDetailsNavbar";
import requireAuth from "../../utils";

import classes from "./HostVanDetail.module.css";

export async function loader({ params, request }) {
  await requireAuth(request);
  return defer({ getHostVans: getVan(params.id) });
}

export default function HostVanDetail() {
  const currentVanPromise = useLoaderData();

  return (
    <section>
      <Link to=".." relative="path" className={classes["back-button"]}>
        &larr; <span>Back to listed vans</span>
      </Link>

      <Suspense fallback={<h3>Loading van...</h3>}>
        <Await resolve={currentVanPromise.getHostVans}>
          {(currentVan) => {
            return (
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
            );
          }}
        </Await>
      </Suspense>
    </section>
  );
}
