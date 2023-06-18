import { Link } from "react-router-dom";

import classes from "./VanComponent.module.css";

export default function Van(props) {
  return (
    <div key={props.id} className={classes["van-tile"]}>
      <Link
        to={props.id}
        state={{
          searchParams: `?${props.searchParams.toString()}`,
          type: props.typeFilter,
        }}
      >
        <img src={props.imageUrl} />
        <div className={classes["van-info"]}>
          <h3>{props.name}</h3>
          <p>
            ${props.price}
            <span>/day</span>
          </p>
        </div>
        <i
          className={`${classes["van-type"]} ${classes["selected"]} ${
            classes[`${props.type}`]
          }`}
        >
          {props.type}
        </i>
      </Link>
    </div>
  );
}
