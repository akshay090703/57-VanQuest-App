import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function VanTemplate() {
  const params = useParams();

  useEffect(() => {
    fetch(``);
  }, [params.id]);

  return;
}
