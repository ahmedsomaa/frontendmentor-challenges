import Image from "next/image";
import { Country } from "types/rest-countries";
import { AlertCircleIcon } from "lucide-react";

import { CountryCard, CountryCardSkeleton } from "./country-card";

// --------- COMPONENT ---------
export function CountriesList({
  countries,
}: Readonly<{ countries: Country[] }>) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 p-4 gap-4">
      {countries
        .sort((c1, c2) => c1.name.common.localeCompare(c2.name.common))
        .map((country) => (
          <CountryCard key={country.name.common} country={country} />
        ))}
    </div>
  );
}

// --------- COMPONENT SKELETON ---------
export function CountriesListSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 p-4 gap-4">
      {Array.from({ length: 20 }).map((_, i) => (
        <CountryCardSkeleton key={i} />
      ))}
    </div>
  );
}

// --------- COMPONENT ERROR ---------
export function CountriesListError({ error }: { error: Error }) {
  return (
    <div className="h-screen grid place-items-center">
      <div className="col-span-full space-y-4">
        {/* icon here */}
        <AlertCircleIcon className="w-10 h-10 mx-auto text-destructive" />
        <h2 className="text-center text-2xl font-semibold text-destructive">
          {error.message}
        </h2>
      </div>
    </div>
  );
}
