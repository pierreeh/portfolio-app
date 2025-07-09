import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError(); // eslint-disable-line @typescript-eslint/no-explicit-any

  return (
    <section>
      <h1>Error {error.status}</h1>
      <p>{error.statusText}</p>
      <Link to="/">Back home</Link>
    </section>
  );
}
