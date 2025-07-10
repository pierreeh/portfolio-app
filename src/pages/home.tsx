import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { useAllCountriesQuery } from "@/api/countries";
import { selectRegions } from "@/api/countriesSelector";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Pagination from "@/components/commons/pagination";

export default function Home() {
  const { data: countries = [], isLoading, isError } = useAllCountriesQuery();
  const regions = useSelector(selectRegions);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <p>Error, please try again later.</p>;

  return (
    <section>
      <Select onValueChange={(e) => console.log(e)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select by region" />
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all">All</SelectItem>
              {regions.map((r) => (
                <SelectItem key={r} value={r}>
                  {r}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </SelectTrigger>
      </Select>

      <Pagination items={countries}>
        {(paginatedCountries) => (
          <ul>
            {paginatedCountries?.map((c) => (
              <li key={c.ccn3}>
                <Link to={`${c.slug}/${c.ccn3}`}>
                  <h1>{c.name.common}</h1>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Pagination>
    </section>
  );
}
