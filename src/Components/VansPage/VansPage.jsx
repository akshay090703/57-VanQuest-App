import { Suspense } from "react";
import {
  defer,
  useLoaderData,
  Await,
  Link,
  useLocation,
} from "react-router-dom";

import { getVan } from "../../api";
import VanTemplate from "../UI/VanPageTemplate";
import classes from "./VansPage.module.css";

export function loader({ params }) {
  return defer({ getVan: getVan(params.id) });
}

export default function Vans() {
  const vanPromise = useLoaderData();

  const location = useLocation();

  const search = location.state?.searchParams || "";
  const type = location.state?.type || "all";

  return (
    <>
      <Link
        to={`..${search}`}
        relative="path"
        className={classes["back-button"]}
      >
        &larr; <span>Back to {type} vans</span>
      </Link>
      <Suspense fallback={<h2>Loading van details...</h2>}>
        <Await resolve={vanPromise.getVan}>
          {(van) => {
            return <VanTemplate vans={van} />;
          }}
        </Await>
      </Suspense>
    </>
  );
}
