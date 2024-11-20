import { Country } from "types/rest-countries";

export async function getCountries({
  name,
  region,
}: {
  readonly name: string;
  readonly region: string;
}): Promise<Country[]> {
  let url = "https://restcountries.com/v3.1/all";

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Failed to fetch countries!`);
  }

  const data = await res.json();
  return (data as Country[]).filter((country) => {
    if (name && !country.name.common.toLowerCase().includes(name.toLowerCase()))
      return false;
    if (region && !country.region.toLowerCase().includes(region.toLowerCase()))
      return false;
    return true;
  });
}

export async function getCountry({
  code,
}: {
  readonly code: string;
}): Promise<Country> {
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${code}?fullText=true`
  );
  if (!res.ok) {
    throw new Error(`Failed to fetch country!`);
  }
  const data = await res.json();
  return data[0] as Country;
}
