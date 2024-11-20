"use client";

import { SearchIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dispatch, SetStateAction, useCallback } from "react";

// --------- PROPS --------- //
interface FiltersProps {
  region: string;
  country: string;
  onRegionChange: Dispatch<SetStateAction<string>>;
  onCountryChange: Dispatch<SetStateAction<string>>;
}

export function Filters({
  region,
  country,
  onRegionChange,
  onCountryChange,
}: Readonly<FiltersProps>) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start lg:items-center gap-4 px-8 py-4">
      <div className="relative">
        <Input
          type="text"
          value={country}
          inputMode="text"
          placeholder="Search for a country..."
          onChange={(e) => onCountryChange(e.target.value)}
          className="peer pe-9 ps-9 bg-white dark:bg-slate-800 h-12 w-[500px]"
        />
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
          <SearchIcon size={16} strokeWidth={2} />
        </div>
      </div>
      <div>
        <Select value={region} onValueChange={onRegionChange}>
          <SelectTrigger className="bg-white dark:bg-slate-800 w-[200px] h-12">
            <SelectValue placeholder="Filter by Region" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="africa">Africa</SelectItem>
            <SelectItem value="americas">Americas</SelectItem>
            <SelectItem value="asia">Asia</SelectItem>
            <SelectItem value="europe">Europe</SelectItem>
            <SelectItem value="oceania">Oceania</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
