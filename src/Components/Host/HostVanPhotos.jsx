import { useOutletContext } from "react-router-dom";

import classes from "./HostVanPhotos.module.css";

export default function HostVanPhotos() {
  const { currentVan } = useOutletContext();

  return (
    <img
      src={currentVan.imageUrl}
      className={classes["host-van-detail-image"]}
    />
  );
}
