"use client";

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import {
  CountriesList,
  CountriesListError,
  CountriesListSkeleton,
} from "./countries";
import { Filters } from "./filters";
import { getCountries } from "./actions";

// --------- LAYOUT ---------
export default function Home() {
  const [region, setRegion] = useState("");
  const [country, setCountry] = useState("");

  const { data, error, status } = useQuery({
    queryKey: ["country", [country, region]],
    queryFn: () => getCountries({ name: country, region }),
  });

  return (
    <div className="grid grid-cols-1 p-4">
      {/* ___FILTERS___ */}
      <Filters
        region={region}
        country={country}
        onRegionChange={setRegion}
        onCountryChange={setCountry}
      />

      {/* ___COUNTRY CARDS___ */}
      <div>
        {status === "pending" ? (
          <CountriesListSkeleton />
        ) : status === "error" ? (
          <CountriesListError error={error} />
        ) : (
          data?.length > 0 && <CountriesList countries={data} />
        )}
      </div>
    </div>
  );
}
