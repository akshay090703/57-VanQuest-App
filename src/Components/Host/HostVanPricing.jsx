import { useOutletContext } from "react-router-dom";

import classes from "./HostVanPricing.module.css";

export default function HostVanPricing() {
  const { currentVan } = useOutletContext();
  return (
    <h3 className={classes["host-van-price"]}>
      ${currentVan.price}
      <span>/day</span>
    </h3>
  );
}
