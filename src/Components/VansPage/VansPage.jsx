import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import VanTemplate from "../UI/VanPageTemplate";

export default function Vans(props) {
  const params = useParams();
  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  return <VanTemplate vans={van} />;
}
