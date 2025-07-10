import { baseApi } from ".";

import type { Country, CountryWithSlug } from "@/types/countries";
import slugify from "@/lib/slugify";

export const countriesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allCountries: builder.query<CountryWithSlug[], void>({
      query: () => "/all?fields=name,flags,population,capital,region,ccn3",
      transformResponse: (res: Country[]): CountryWithSlug[] =>
        res
          .map((c) => ({
            ...c,
            slug: slugify(c.name.common),
          }))
          .sort((a, b) => a.name.common.localeCompare(b.name.common)),
      providesTags: (result) =>
        result
          ? [
              ...result.map((c) => ({ type: "Country" as const, id: c.ccn3 })),
              { type: "Country", id: "LIST" },
            ]
          : [{ type: "Country", id: "LIST" }],
      keepUnusedDataFor: 60,
    }),
  }),
  overrideExisting: false,
});

export const { useAllCountriesQuery } = countriesApi;
