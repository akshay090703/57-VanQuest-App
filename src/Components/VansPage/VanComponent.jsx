import { Link } from "react-router-dom";

import classes from "./VanComponent.module.css";

export default function Van(props) {
  return (
    <Link to={`/vans/${props.id}`}>
      <div key={props.id} className={classes["van-tile"]}>
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
      </div>
    </Link>
  );
}
