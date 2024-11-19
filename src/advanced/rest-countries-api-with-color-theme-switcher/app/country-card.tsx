import Link from "next/link";
import Image from "next/image";
import { Country } from "types/rest-countries";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

// --------- COMPONENT ---------
export function CountryCard({ country }: Readonly<{ country: Country }>) {
  return (
    <Link href={`/country/${country.name.common}`}>
      <Card
        key={country.name.common}
        className="rounded-lg h-[400px] dark:bg-slate-800"
      >
        <CardHeader className="p-0 h-1/2">
          <Image
            width={0}
            height={0}
            placeholder="blur"
            src={country.flags.svg}
            blurDataURL={country.flags.svg}
            alt={`${country.name.common}'s flag`}
            className="w-full h-full object-cover rounded-t-lg"
          />
        </CardHeader>
        <CardContent className="p-4 space-y-4">
          <h2 className="font-bold text-lg">{country.name.common}</h2>
          <div className="space-y-2">
            <p>
              <span className="font-bold">Population:</span>{" "}
              {country.population}
            </p>
            <p>
              <span className="font-bold">Region:</span> {country.region}
            </p>
            <p>
              <span className="font-bold">Capital:</span> {country.capital}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

// --------- COMPONENT SKELETON ---------
export function CountryCardSkeleton() {
  return (
    <Card className="rounded-lg h-[400px]">
      <CardHeader className="p-0 h-1/2">
        <Skeleton className="w-full h-full rounded-t-lg" />
      </CardHeader>
      <CardContent className="p-4 space-y-4">
        <div className="space-y-2">
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-full h-4" />
        </div>
      </CardContent>
    </Card>
  );
}
