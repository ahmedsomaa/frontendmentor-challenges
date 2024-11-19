// Dependencies: pnpm install lucide-react

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Search } from "lucide-react";

export default function Input26() {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-26">Search input with icon and button</Label>
      <div className="relative">
        <Input
          id="input-26"
          className="peer pe-9 ps-9"
          placeholder="Search..."
          type="search"
        />
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
          <Search size={16} strokeWidth={2} />
        </div>
      </div>
    </div>
  );
}
