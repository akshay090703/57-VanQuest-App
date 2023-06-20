import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  // console.log(error);

  return (
    <>
      <h1>Error: {error.message || "An Error occured!"}</h1>
      <pre>
        {error.status} - {error.statusText || "An unexpected error!"}
      </pre>
    </>
  );
}
