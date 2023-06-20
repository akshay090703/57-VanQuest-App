import { useLoaderData } from "react-router-dom";

import { getVans } from "../../api";
import VanTemplate from "../UI/VanPageTemplate";

export function loader({ params }) {
  return getVans(params.id);
}

export default function Vans() {
  const van = useLoaderData();

  return <VanTemplate vans={van} />;
}
