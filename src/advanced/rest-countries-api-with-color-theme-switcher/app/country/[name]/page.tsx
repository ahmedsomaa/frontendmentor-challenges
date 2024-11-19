import Link from "next/link";
import { Suspense } from "react";
import { ArrowLeft } from "lucide-react";

import { CountryDetailsSkeleton, CountryDetails } from "./country";

export default async function CountryPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  return (
    <div className="grid grid-cols-1 p-10">
      <div className="flex justify-start">
        <Link
          href="/"
          className="bg-white dark:bg-slate-800 flex items-center font-semibold px-4 py-2 rounded-md shadow-md"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Link>
      </div>
      <Suspense fallback={<CountryDetailsSkeleton />}>
        <CountryDetails name={name} />
      </Suspense>
    </div>
  );
}