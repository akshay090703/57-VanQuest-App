import { Link } from "react-router-dom";

import classes from "./HostVansTemplate.module.css";

export default function HostVanTemplate(props) {
  return (
    <Link
      to={`/host/vans/${props.van.id}`}
      key={props.van.id}
      className={classes["host-van-link-wrapper"]}
    >
      <div className={classes["host-van-single"]} key={props.van.id}>
        <img src={props.van.imageUrl} alt={`Photo of ${props.van.name}`} />
        <div className={classes["host-van-info"]}>
          <h3>{props.van.name}</h3>
          <p>${props.van.price}/day</p>
        </div>
      </div>
    </Link>
  );
}
