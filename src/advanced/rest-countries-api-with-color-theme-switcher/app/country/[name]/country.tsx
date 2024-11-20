import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

import { getCountry } from "@/app/actions";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

// --------- COMPONENT ---------
export async function CountryDetails({ name }: { name: string }) {
  const country = await getCountry({ name });

  return (
    <div className="container px-8 py-8 space-y-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="w-full">
          <Image
            priority
            width={560}
            height={400}
            className="shadow-md"
            src={country.flags.svg}
            alt={country.name.common}
          />
        </div>
        <div className="space-y-8">
          <h1 className="text-3xl font-bold">{country.name.common}</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p>
                <span className="font-semibold">Native Name: </span>
                {(country.name.nativeName &&
                  Object.values(country.name.nativeName)[0]?.common) ??
                  "NA"}
              </p>
              <p>
                <span className="font-semibold">Population: </span>
                {country.population.toLocaleString()}
              </p>
              <p>
                <span className="font-semibold">Region: </span>
                {country.region}
              </p>
              <p>
                <span className="font-semibold">Sub Region: </span>
                {country.subregion ?? "NA"}
              </p>
              <p>
                <span className="font-semibold">Capital: </span>
                {country.capital ?? "NA"}
              </p>
            </div>
            <div className="space-y-4">
              <p>
                <span className="font-semibold">Top Level Domain: </span>
                {country?.tld?.join(", ") ?? "NA"}
              </p>
              <p>
                <span className="font-semibold">Currencies: </span>
                {country.currencies
                  ? Object.values(country.currencies)
                      .map((currency) => currency.name)
                      .join(", ")
                  : "NA"}
              </p>
              <p>
                <span className="font-semibold">Languages: </span>
                {country.languages
                  ? Object.values(country.languages).join(", ")
                  : "NA"}
              </p>
            </div>
          </div>
          {country?.borders && (
            <div className="flex flex-wrap items-center gap-4">
              <span className="font-semibold">Border Countries:</span>
              <div className="flex flex-wrap gap-2">
                {country.borders.map((border) => (
                  <Badge
                    key={border}
                    variant="outline"
                    className="px-6 py-1 bg-background/20 hover:bg-background/20 shadow-sm"
                  >
                    {border}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// --------- COMPONENT SKELETON ---------
export function CountryDetailsSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-16">
      <Skeleton className="h-10 w-24" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <Skeleton className="w-full aspect-[1.4/1] rounded-lg" />
        <div className="space-y-8">
          <Skeleton className="h-10 w-48" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className="h-6 w-full max-w-[250px]" />
              ))}
            </div>
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className="h-6 w-full max-w-[250px]" />
              ))}
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Skeleton className="h-6 w-36" />
            <div className="flex gap-2">
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className="h-8 w-24" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
