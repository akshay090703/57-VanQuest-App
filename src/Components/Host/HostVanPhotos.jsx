import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
  const { currentVan } = useOutletContext();
  return <h1>Host Van Photos</h1>;
}
