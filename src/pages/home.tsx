import { Link } from "react-router-dom";

import { useAllCountriesQuery } from "@/api/countries";

export default function Home() {
  const { data: countries, isLoading, isError } = useAllCountriesQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <p>Error, please try again later.</p>;

  return (
    <section>
      <ul>
        {countries?.map((c) => (
          <li key={c.ccn3}>
            <Link to={`${c.slug}/${c.ccn3}`}>
              <h1>{c.name.common}</h1>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
