import { createSelector } from "@reduxjs/toolkit";

import { countriesApi } from "./countries";

export const selectCountriesResult =
  countriesApi.endpoints.allCountries.select();

export const selectRegions = createSelector(selectCountriesResult, (result) => {
  const countries = result.data ?? [];
  const regions = Array.from(
    new Set(countries.map((c) => c.region).filter(Boolean))
  );
  return regions.sort();
});
