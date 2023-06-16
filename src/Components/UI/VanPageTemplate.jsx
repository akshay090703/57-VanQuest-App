import classes from "./VanPageTemplate.module.css";

export default function VanTemplate(props) {
  return (
    <div className={classes["van-detail-container"]}>
      {props.vans ? (
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
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
