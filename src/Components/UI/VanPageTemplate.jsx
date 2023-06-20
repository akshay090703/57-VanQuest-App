import { Link, useLocation } from "react-router-dom";

import classes from "./VanPageTemplate.module.css";

export default function VanTemplate(props) {
  const location = useLocation();

  const search = location.state?.searchParams || "";
  const type = location.state?.type || "all";

  return (
    <div className={classes["van-detail-container"]}>
      <Link
        to={`..${search}`}
        relative="path"
        className={classes["back-button"]}
      >
        &larr; <span>Back to {type} vans</span>
      </Link>

      <div className={classes["van-detail"]}>
        <img src={props.vans.imageUrl} />
        <i
          className={`${classes["van-type"]} ${classes["selected"]} ${
            classes[`${props.vans.type}`]
          }`}
        >
          {props.vans.type}
        </i>
        <h2>{props.vans.name}</h2>
        <p className={classes["van-price"]}>
          <span>${props.vans.price}</span>/day
        </p>
        <p>{props.vans.description}</p>
        <button className={classes["link-button"]}>Rent this van</button>
      </div>
    </div>
  );
}
