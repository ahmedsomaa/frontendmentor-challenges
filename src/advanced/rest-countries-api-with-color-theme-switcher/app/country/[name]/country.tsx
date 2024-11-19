import Image from "next/image";
import { getCountry } from "@/app/actions";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

// --------- COMPONENT ---------
export async function CountryDetails({ name }: { name: string }) {
  const country = await getCountry({ name });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 py-20 gap-8 place-content-center">
      <div className="col-span-1">
        <Image
          width={400}
          height={400}
          placeholder="blur"
          src={country.flags.svg}
          alt={country.name.common}
          blurDataURL={country.flags.svg}
          className="rounded"
        />
      </div>
      <div className="col-span-1 space-y-4">
        <h1 className="text-3xl font-bold">{country.name.common}</h1>
        <div className="space-y-2">
          <p>
            <span className="font-bold">Native Name:</span>{" "}
            {(country.name.nativeName &&
              Object.values(country.name.nativeName)[0]?.common) ??
              "NA"}
          </p>
          <p>
            <span className="font-bold">Population:</span> {country.population}
          </p>
          <p>
            <span className="font-bold">Region:</span> {country.region}
          </p>
          <p>
            <span className="font-bold">Sub Region:</span>{" "}
            {country.subregion ?? "NA"}
          </p>
          <p>
            <span className="font-bold">Capital:</span>{" "}
            {country.capital ?? "NA"}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {country?.borders?.map((border) => (
            <Badge
              className="bg-white text-foreground hover:text-white dark:bg-slate-800"
              key={border}
            >
              {border}
            </Badge>
          ))}
        </div>
      </div>
      <div className="col-span-1">
        <p>
          <span className="font-bold">Top Level Domain:</span>{" "}
          {country?.tld?.join(", ") ?? "NA"}
        </p>
        <p>
          <span className="font-bold">Currencies:</span>{" "}
          {(
            country.currencies &&
            Object.values(country.currencies).map((currency) => currency.name)
          ).join(", ") ?? "NA"}
        </p>
        <p>
          <span className="font-bold">Languages:</span>{" "}
          {(
            country.languages &&
            Object.values(country.languages).map((language) => language)
          ).join(", ") ?? "NA"}
        </p>
      </div>
    </div>
  );
}

// --------- COMPONENT SKELETON ---------
export function CountryDetailsSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 py-10 gap-8">
      <div className="col-span-1">
        <Skeleton className="w-full h-[300px] rounded" />
      </div>

      <div className="col-span-1 space-y-4">
        <Skeleton className="h-10 w-[250px]" />
        <div className="space-y-2">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-6 w-[200px]" />
          ))}
        </div>
        <div className="flex items-center gap-2">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-6 w-16" />
          ))}
        </div>
      </div>

      <div className="col-span-1 space-y-2">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-6 w-[250px]" />
        ))}
      </div>
    </div>
  );
}
