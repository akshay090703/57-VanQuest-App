import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
  const { currentVan } = useOutletContext();
  return <h1>Host Van Pricing</h1>;
}
